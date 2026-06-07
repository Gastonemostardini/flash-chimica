/* ============================================================
   RENDERING
   ------------------------------------------------------------
   Produce l'HTML del fronte/retro della carta corrente e
   aggiorna contatori e barra. Tutte le funzioni operano sulla
   carta `deck[pos]` letta dallo stato globale.
   ============================================================ */

const $ = (sel) => document.querySelector(sel);

const cardEl  = () => $("#card");
const chipsEl = () => $("#chips");

/* ---------- nomi (IUPAC + tradizionale) ---------- */

/* Costruisce la parte "nome" tenendo conto del toggle hideIupac.
   - elemento: un solo nome (campo n)
   - hideIupac on: solo il tradizionale
   - iupac == trad: un solo nome con etichetta
   - default: due righe etichettate (IUPAC + tradizionale) */
function renderNames(d) {
  if (d.cat === "elementi") {
    return `<div class="word">${d.n}</div>`;
  }
  if (hideIupac) {
    return `<div class="word">${d.trad}</div>`;
  }
  if (d.iupac === d.trad) {
    return `<div class="word">${d.trad}</div>`
         + `<div class="nomtag">IUPAC = tradizionale</div>`;
  }
  return `<div class="nomrow"><span class="lab">IUPAC</span>`
       + `<span class="word2">${d.iupac}</span></div>`
       + `<div class="nomrow"><span class="lab trad">tradizionale</span>`
       + `<span class="word2">${d.trad}</span></div>`;
}

/* Pannello "extra" sul retro: n.o. + spiegazione. */
function renderExtra(d) {
  let h = "";
  if (d.ox)     h += `<div class="ox"><span class="l">n.o.&nbsp;&nbsp;</span>${d.ox}</div>`;
  if (d.spiega) h += `<div class="note">${d.spiega}</div>`;
  return h;
}

/* Formula annotata coi numeri di ossidazione sopra ogni elemento. */
function buildOx(parts) {
  const inner = parts.map(p => {
    if (p.txt !== undefined) {
      return `<span class="oxtxt">${p.txt}${p.sub ? `<sub>${p.sub}</sub>` : ""}</span>`;
    }
    return `<span class="oxunit">`
         + `<span class="num">${p.ox}</span>`
         + `<span class="sym">${p.el}${p.sub ? `<sub>${p.sub}</sub>` : ""}</span>`
         + `</span>`;
  }).join("");
  return `<div class="oxform">${inner}</div>`;
}

/* Elenco dei numeri di ossidazione possibili di un elemento. */
function renderStates(d) {
  const rows = d.states.map(s =>
    `<div class="strow${s.main ? " main" : ""}">`
    + `<span class="sv">${s.v}</span>`
    + `<span class="sex">${s.ex || ""}</span>`
    + `</div>`
  ).join("");
  return `<div class="statelist">${rows}</div>`
       + (d.nota ? `<div class="note snota">${d.nota}</div>` : "");
}

/* ---------- rendering principale ---------- */

/* Formatta il tag della carta: "Categoria · #042". */
function tagText(d) {
  const base = d.tag || CAT_LABEL[d.cat] || "";
  return `<span>${base}</span><span class="cid">#${d.id}</span>`;
}

function render() {
  const card = cardEl();

  /* Mazzo vuoto: la carta sparisce e mostriamo un placeholder. */
  if (!deck.length) {
    card.style.display = "none";
    let empty = document.getElementById("empty");
    if (!empty) {
      empty = document.createElement("div");
      empty.id = "empty";
      empty.className = "empty";
      card.parentElement.appendChild(empty);
    }
    empty.textContent = onlyReview
      ? "Nessuna carta segnata come da rivedere."
      : "Nessuna carta in questa selezione.";
    $("#counter").textContent = "0 / 0";
    $("#barFill").style.width = "0%";
    paintStats();
    return;
  }
  card.style.display = "";
  const empty = document.getElementById("empty");
  if (empty) empty.remove();

  const d = deck[pos];
  card.classList.toggle("flipped", flipped);
  $("#ftag").innerHTML = tagText(d);
  $("#btag").innerHTML = tagText(d);

  if (d.kind === "states") {
    /* Elenco dei n.o. possibili di un elemento. */
    $("#fprompt").textContent = "Quali n.o. può avere?";
    $("#fbody").innerHTML     = `<div class="formula">${d.el}</div>`
                              + `<div class="elname">${d.name}</div>`;
    $("#bprompt").textContent = "Numeri di ossidazione";
    $("#bbody").innerHTML     = renderStates(d);
    $("#bextra").innerHTML    = "";
  } else if (d.kind === "ox") {
    /* Carte dedicate al calcolo dei n.o. */
    $("#fprompt").textContent = "Assegna i n.o.";
    $("#fbody").innerHTML     = `<div class="formula">${d.f}</div>`;
    $("#bprompt").textContent = "Numeri di ossidazione";
    $("#bbody").innerHTML     = buildOx(d.parts);
    $("#bextra").innerHTML    = d.spiega ? `<div class="note">${d.spiega}</div>` : "";
  } else {
    /* Carte standard: formula ↔ nome. */
    const namesHtml   = renderNames(d);
    const formulaHtml = `<div class="formula">${d.f}</div>`;
    if (direction === "f2n") {
      $("#fprompt").textContent = "Che cos'è?";
      $("#fbody").innerHTML     = formulaHtml;
      $("#bprompt").textContent = "Nome";
      $("#bbody").innerHTML     = namesHtml;
    } else {
      $("#fprompt").textContent = "Scrivi la formula";
      $("#fbody").innerHTML     = namesHtml;
      $("#bprompt").textContent = "Formula";
      $("#bbody").innerHTML     = formulaHtml;
    }
    $("#bextra").innerHTML = renderExtra(d);
  }

  $("#counter").textContent = `${pos + 1} / ${deck.length}`;
  $("#barFill").style.width = (deck.length ? ((pos + 1) / deck.length * 100) : 0) + "%";
  paintStats();
}

function paintStats() {
  $("#nKnow").textContent = known.size;
  $("#nRev").textContent  = review.size;
}

/* Gira la carta indietro PRIMA di cambiare contenuto, così non
   si intravede la risposta della carta successiva durante il flip. */
function hideThen(fn) {
  if (flipped) {
    flipped = false;
    cardEl().classList.remove("flipped");
    setTimeout(fn, 330);
  } else {
    fn();
  }
}
