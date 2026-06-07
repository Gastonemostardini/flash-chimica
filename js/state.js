/* ============================================================
   STATO GLOBALE
   ------------------------------------------------------------
   Tutto lo stato mutabile dell'app vive qui dentro. Le altre
   "moduli" lo leggono e lo modificano tramite questi alias.
   ============================================================ */

/* Set delle categorie attualmente attive.
   Se contiene "tutti" (o è vuoto) significa: nessun filtro. */
const activeCats = new Set(["tutti"]);

/* Direzione delle carte: "f2n" (formula → nome) o "n2f" (nome → formula). */
let direction = "f2n";

/* Toggle: nascondere il nome IUPAC/Stock e mostrare solo il tradizionale. */
let hideIupac = false;

/* Toggle: mostrare soltanto le carte segnate come "da rivedere". */
let onlyReview = false;

/* Mazzo corrente (filtrato/mescolato) e posizione attuale. */
let deck = [];
let pos = 0;
let flipped = false;

/* Memoria delle carte giudicate dall'utente. Salviamo l'id stabile (#001…). */
const known  = new Set();
const review = new Set();

/* ---------- helper ----------------------------------------------------- */

/* Ritorna il numero di carte in DATA appartenenti alla categoria id. */
function countCat(id) {
  return id === "tutti"
    ? DATA.length
    : DATA.filter(d => d.cat === id).length;
}

/* True se la carta d deve comparire nel mazzo, date le scelte attuali. */
function matchesFilters(d) {
  if (onlyReview && !review.has(d.id)) return false;
  if (activeCats.has("tutti") || activeCats.size === 0) return true;
  return activeCats.has(d.cat);
}
