/* ============================================================
   ENTRY POINT
   ------------------------------------------------------------
   Wiring iniziale: link alle issue di GitHub, costruzione dei
   chip, del mazzo, e attivazione dei controlli.
   ============================================================ */

function wireIssueLinks() {
  $("#linkError").href = ISSUE_ERROR_URL;
  $("#linkNew").href   = ISSUE_NEW_URL;
  $("#linkAll").href   = ISSUES_URL;
}

function init() {
  wireIssueLinks();
  buildChips();
  buildDeck();
  wireControls();
}

document.addEventListener("DOMContentLoaded", init);
