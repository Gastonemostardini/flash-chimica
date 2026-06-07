/* ============================================================
   CONTROLLI
   ------------------------------------------------------------
   Chip categoria (multi-select), toolbar (direzione, mescola,
   toggle "solo tradizionale" e "solo da rivedere"), navigazione,
   pulsanti di giudizio, scorciatoie da tastiera.
   ============================================================ */

/* ---------- chip categoria (multi-select) ----------------------------
   - clic su "Tutti" → svuota la selezione e attiva solo "Tutti"
   - clic su altra categoria → disattiva "Tutti", aggiunge/toglie la cat
   - se non resta nulla, torna a "Tutti"
*/
function buildChips() {
  const chips = chipsEl();
  chips.innerHTML = "";
  CATS.forEach(c => {
    const b = document.createElement("button");
    const active = activeCats.has(c.id);
    b.className   = "chip" + (active ? " active" : "");
    b.innerHTML   = `${c.label} <span class="n">${countCat(c.id)}</span>`;
    b.onclick = () => {
      if (c.id === "tutti") {
        activeCats.clear();
        activeCats.add("tutti");
      } else {
        activeCats.delete("tutti");
        if (activeCats.has(c.id)) activeCats.delete(c.id);
        else activeCats.add(c.id);
        if (activeCats.size === 0) activeCats.add("tutti");
      }
      buildChips();
      buildDeck();
    };
    chips.appendChild(b);
  });
}

/* ---------- costruzione e gestione mazzo ---------- */

function buildDeck() {
  deck = DATA.filter(matchesFilters);
  hideThen(() => { pos = 0; render(); });
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

/* ---------- navigazione & giudizio ---------- */

function flip() {
  flipped = !flipped;
  cardEl().classList.toggle("flipped", flipped);
}

function go(n) {
  if (!deck.length) return;
  hideThen(() => { pos = (pos + n + deck.length) % deck.length; render(); });
}

/* Sposta la carta corrente in `set`, rimuovendola da `other`.
   Se è attivo "solo da rivedere" e l'utente la dichiara nota,
   la carta sparisce dal mazzo: lo ricostruiamo. */
function judge(set, other) {
  if (!deck.length) return;
  const d = deck[pos];
  set.add(d.id);
  other.delete(d.id);
  paintStats();

  if (onlyReview && set === known) {
    hideThen(() => {
      deck = DATA.filter(matchesFilters);
      if (pos >= deck.length) pos = 0;
      render();
    });
    return;
  }
  hideThen(() => { pos = (pos + 1) % Math.max(deck.length, 1); render(); });
}

/* ---------- wiring dei pulsanti ---------- */

function wireControls() {
  cardEl().onclick   = flip;
  $("#prev").onclick = () => go(-1);
  $("#next").onclick = () => go( 1);
  $("#know").onclick   = () => judge(known,  review);
  $("#review").onclick = () => judge(review, known);
  $("#shuffle").onclick = () => hideThen(() => { shuffleDeck(); pos = 0; render(); });

  /* Segmento direzione (formula → nome / nome → formula). */
  $("#dir").querySelectorAll("button").forEach(b => {
    b.onclick = () => {
      direction = b.dataset.dir;
      $("#dir").querySelectorAll("button").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      hideThen(render);
    };
  });

  /* Toggle "Solo tradizionale": nasconde IUPAC/Stock. */
  const tradBtn = $("#toggleTrad");
  tradBtn.onclick = () => {
    hideIupac = !hideIupac;
    tradBtn.classList.toggle("on", hideIupac);
    tradBtn.textContent = hideIupac ? "✓ Solo tradizionale" : "Solo tradizionale";
    hideThen(render);
  };

  /* Toggle "Solo da rivedere": filtra il mazzo. */
  const revBtn = $("#toggleReview");
  revBtn.onclick = () => {
    onlyReview = !onlyReview;
    revBtn.classList.toggle("on", onlyReview);
    revBtn.textContent = onlyReview ? "✓ Solo da rivedere" : "Solo da rivedere";
    buildDeck();
  };

  /* Scorciatoie da tastiera. */
  document.addEventListener("keydown", e => {
    if (e.target.tagName === "SUMMARY") return;
    if (e.code === "Space") { e.preventDefault(); flip(); }
    else if (e.key === "ArrowRight") go( 1);
    else if (e.key === "ArrowLeft")  go(-1);
    else if (e.key.toLowerCase() === "s") judge(known,  review);
    else if (e.key.toLowerCase() === "d") judge(review, known);
    else if (e.key.toLowerCase() === "r") hideThen(() => { shuffleDeck(); pos = 0; render(); });
  });
}
