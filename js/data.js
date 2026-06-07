/* ============================================================
   DATI · Carte di chimica
   ------------------------------------------------------------
   Schema di ogni carta:
     cat    : categoria  (elementi | cationi | anioni | gruppi |
                          acidi | ossidi | idrossidi | sali |
                          ossido | stati)
     f      : formula (HTML)                — non per "stati"
     n      : nome                          — solo "elementi"
     iupac  : nome IUPAC (anche Stock)       — non per "elementi"
     trad   : nome tradizionale             — non per "elementi"
     ox     : numeri di ossidazione (HTML, atomo centrale in <b>)
     spiega : nota didattica (opzionale)
     tag    : etichetta sostitutiva sul tag in alto a sinistra
     kind   : "ox"     -> carta dedicata al calcolo dei n.o.
              "states" -> elenco dei n.o. possibili di un elemento
   ============================================================ */

const DATA = [

  // ============================================================
  // ELEMENTI
  // ============================================================
  ...[
    ["H","Idrogeno"], ["He","Elio"],    ["Li","Litio"],   ["Be","Berillio"], ["B","Boro"],
    ["C","Carbonio"], ["N","Azoto"],    ["O","Ossigeno"], ["F","Fluoro"],    ["Ne","Neon"],
    ["Na","Sodio"],   ["Mg","Magnesio"],["Al","Alluminio"],["Si","Silicio"], ["P","Fosforo"],
    ["S","Zolfo"],    ["Cl","Cloro"],   ["Ar","Argon"],   ["K","Potassio"],  ["Ca","Calcio"],
    ["Cr","Cromo"],   ["Mn","Manganese"],["Fe","Ferro"],  ["Co","Cobalto"],  ["Ni","Nichel"],
    ["Cu","Rame"],    ["Zn","Zinco"],   ["Br","Bromo"],   ["Ag","Argento"],  ["Sn","Stagno"],
    ["I","Iodio"],    ["Ba","Bario"],   ["Pt","Platino"], ["Au","Oro"],      ["Hg","Mercurio"],
    ["Pb","Piombo"]
  ].map(([f,n]) => ({ cat:"elementi", f, n, ox:"<b>0</b>", spiega:"Sostanza elementare: n.o. = 0." })),

  // ============================================================
  // CATIONI
  // ============================================================
  { cat:"cationi", f:"H<sup>+</sup>",                   iupac:"idrogeno",    trad:"idrogeno",  ox:"<b>H +1</b>" },
  { cat:"cationi", f:"Li<sup>+</sup>",                  iupac:"litio",       trad:"litio",     ox:"<b>Li +1</b>" },
  { cat:"cationi", f:"Na<sup>+</sup>",                  iupac:"sodio",       trad:"sodio",     ox:"<b>Na +1</b>" },
  { cat:"cationi", f:"K<sup>+</sup>",                   iupac:"potassio",    trad:"potassio",  ox:"<b>K +1</b>" },
  { cat:"cationi", f:"Ag<sup>+</sup>",                  iupac:"argento",     trad:"argento",   ox:"<b>Ag +1</b>" },
  { cat:"cationi", f:"NH<sub>4</sub><sup>+</sup>",      iupac:"ammonio",     trad:"ammonio",   ox:"<b>N −3</b> · H +1",
    spiega:"Catione poliatomico: somma delle cariche = +1." },
  { cat:"cationi", f:"H<sub>3</sub>O<sup>+</sup>",      iupac:"ossonio",     trad:"idronio",   ox:"O −2 · H +1",
    spiega:"H₂O + H⁺. IUPAC: ossonio." },
  { cat:"cationi", f:"Cu<sup>+</sup>",                  iupac:"rame(I)",     trad:"rameoso",   ox:"<b>Cu +1</b>",
    spiega:"n.o. minore → «-oso»; IUPAC rame(I)." },
  { cat:"cationi", f:"Mg<sup>2+</sup>",                 iupac:"magnesio",    trad:"magnesio",  ox:"<b>Mg +2</b>" },
  { cat:"cationi", f:"Ca<sup>2+</sup>",                 iupac:"calcio",      trad:"calcio",    ox:"<b>Ca +2</b>" },
  { cat:"cationi", f:"Ba<sup>2+</sup>",                 iupac:"bario",       trad:"bario",     ox:"<b>Ba +2</b>" },
  { cat:"cationi", f:"Zn<sup>2+</sup>",                 iupac:"zinco",       trad:"zinco",     ox:"<b>Zn +2</b>" },
  { cat:"cationi", f:"Cu<sup>2+</sup>",                 iupac:"rame(II)",    trad:"rameico",   ox:"<b>Cu +2</b>",
    spiega:"n.o. maggiore → «-ico»; IUPAC rame(II)." },
  { cat:"cationi", f:"Fe<sup>2+</sup>",                 iupac:"ferro(II)",   trad:"ferroso",   ox:"<b>Fe +2</b>",
    spiega:"n.o. minore → «-oso» (ferroso); IUPAC ferro(II)." },
  { cat:"cationi", f:"Sn<sup>2+</sup>",                 iupac:"stagno(II)",  trad:"stannoso",  ox:"<b>Sn +2</b>",
    spiega:"n.o. minore → «-oso» (lo stagno ha anche +4)." },
  { cat:"cationi", f:"Pb<sup>2+</sup>",                 iupac:"piombo(II)",  trad:"piomboso",  ox:"<b>Pb +2</b>",
    spiega:"n.o. minore → «-oso» (il piombo ha anche +4)." },
  { cat:"cationi", f:"Hg<sub>2</sub><sup>2+</sup>",     iupac:"mercurio(I)", trad:"mercuroso", ox:"<b>Hg +1</b> (ciascuno)",
    spiega:"Ione doppio Hg–Hg, +1 per atomo → mercuroso." },
  { cat:"cationi", f:"Hg<sup>2+</sup>",                 iupac:"mercurio(II)",trad:"mercurico", ox:"<b>Hg +2</b>",
    spiega:"n.o. maggiore → «-ico» (mercurico)." },
  { cat:"cationi", f:"Al<sup>3+</sup>",                 iupac:"alluminio",   trad:"alluminio", ox:"<b>Al +3</b>" },
  { cat:"cationi", f:"Fe<sup>3+</sup>",                 iupac:"ferro(III)",  trad:"ferrico",   ox:"<b>Fe +3</b>",
    spiega:"n.o. maggiore → «-ico» (ferrico); IUPAC ferro(III)." },
  { cat:"cationi", f:"Cr<sup>3+</sup>",                 iupac:"cromo(III)",  trad:"cromico",   ox:"<b>Cr +3</b>",
    spiega:"«-ico» (cromico); IUPAC cromo(III)." },

  // ============================================================
  // ANIONI MONOATOMICI
  // ============================================================
  { cat:"anioni", f:"F<sup>−</sup>",   iupac:"fluoruro", trad:"fluoruro", ox:"<b>F −1</b>",
    spiega:"Anione monoatomico: n.o. = carica. Suffisso «-uro»." },
  { cat:"anioni", f:"Cl<sup>−</sup>",  iupac:"cloruro",  trad:"cloruro",  ox:"<b>Cl −1</b>" },
  { cat:"anioni", f:"Br<sup>−</sup>",  iupac:"bromuro",  trad:"bromuro",  ox:"<b>Br −1</b>" },
  { cat:"anioni", f:"I<sup>−</sup>",   iupac:"ioduro",   trad:"ioduro",   ox:"<b>I −1</b>" },
  { cat:"anioni", f:"H<sup>−</sup>",   iupac:"idruro",   trad:"idruro",   ox:"<b>H −1</b>",
    spiega:"Raro n.o. −1 dell'idrogeno (idruri metallici)." },
  { cat:"anioni", f:"O<sup>2−</sup>",  iupac:"ossido",   trad:"ossido",   ox:"<b>O −2</b>" },
  { cat:"anioni", f:"S<sup>2−</sup>",  iupac:"solfuro",  trad:"solfuro",  ox:"<b>S −2</b>" },
  { cat:"anioni", f:"N<sup>3−</sup>",  iupac:"nitruro",  trad:"nitruro",  ox:"<b>N −3</b>" },
  { cat:"anioni", f:"P<sup>3−</sup>",  iupac:"fosfuro",  trad:"fosfuro",  ox:"<b>P −3</b>" },

  // ============================================================
  // GRUPPI POLIATOMICI
  // ============================================================
  { cat:"gruppi", f:"OH<sup>−</sup>",                            iupac:"idrossido",                trad:"idrossido", ox:"O −2 · H +1" },
  { cat:"gruppi", f:"CN<sup>−</sup>",                            iupac:"cianuro",                  trad:"cianuro",   ox:"<b>C +2</b> · N −3" },
  { cat:"gruppi", f:"NO<sub>3</sub><sup>−</sup>",                iupac:"triossonitrato(V)",        trad:"nitrato",   ox:"<b>N +5</b> · O −2",
    spiega:"Da HNO₃ (acido nitrico, «-ico» → «-ato»)." },
  { cat:"gruppi", f:"NO<sub>2</sub><sup>−</sup>",                iupac:"diossonitrato(III)",       trad:"nitrito",   ox:"<b>N +3</b> · O −2",
    spiega:"Da HNO₂ (acido nitroso, «-oso» → «-ito»)." },
  { cat:"gruppi", f:"ClO<sup>−</sup>",                           iupac:"monoossoclorato(I)",       trad:"ipoclorito",ox:"<b>Cl +1</b> · O −2",
    spiega:"ipo-…-ito: Cl al n.o. più basso (+1)." },
  { cat:"gruppi", f:"ClO<sub>2</sub><sup>−</sup>",               iupac:"diossoclorato(III)",       trad:"clorito",   ox:"<b>Cl +3</b> · O −2",
    spiega:"«-ito» ← acido cloroso." },
  { cat:"gruppi", f:"ClO<sub>3</sub><sup>−</sup>",               iupac:"triossoclorato(V)",        trad:"clorato",   ox:"<b>Cl +5</b> · O −2",
    spiega:"«-ato» ← acido clorico." },
  { cat:"gruppi", f:"ClO<sub>4</sub><sup>−</sup>",               iupac:"tetraossoclorato(VII)",    trad:"perclorato",ox:"<b>Cl +7</b> · O −2",
    spiega:"per-…-ato: Cl al n.o. più alto (+7)." },
  { cat:"gruppi", f:"MnO<sub>4</sub><sup>−</sup>",               iupac:"tetraossomanganato(VII)",  trad:"permanganato", ox:"<b>Mn +7</b> · O −2",
    spiega:"Mn al n.o. massimo: forte ossidante." },
  { cat:"gruppi", f:"CH<sub>3</sub>COO<sup>−</sup>",             iupac:"etanoato",                 trad:"acetato",   ox:"<b>C +3 e −3</b> · O −2",
    spiega:"Anione organico: i due C hanno n.o. diversi (media 0)." },
  { cat:"gruppi", f:"HCO<sub>3</sub><sup>−</sup>",               iupac:"idrogenocarbonato",        trad:"bicarbonato", ox:"<b>C +4</b> · O −2 · H +1",
    spiega:"Carbonato con 1 H acido residuo (idrogeno-/bi-)." },
  { cat:"gruppi", f:"HSO<sub>4</sub><sup>−</sup>",               iupac:"idrogenosolfato",          trad:"bisolfato", ox:"<b>S +6</b> · O −2 · H +1",
    spiega:"Solfato con 1 H acido residuo (idrogeno-/bi-)." },
  { cat:"gruppi", f:"H<sub>2</sub>PO<sub>4</sub><sup>−</sup>",   iupac:"diidrogenofosfato",        trad:"fosfato biacido", ox:"<b>P +5</b> · O −2 · H +1",
    spiega:"Fosfato con 2 H acidi residui." },
  { cat:"gruppi", f:"HPO<sub>4</sub><sup>2−</sup>",              iupac:"idrogenofosfato",          trad:"fosfato monoacido", ox:"<b>P +5</b> · O −2 · H +1",
    spiega:"Fosfato con 1 H acido residuo." },
  { cat:"gruppi", f:"SO<sub>4</sub><sup>2−</sup>",               iupac:"tetraossosolfato(VI)",     trad:"solfato",   ox:"<b>S +6</b> · O −2",
    spiega:"Da H₂SO₄ (acido solforico, «-ico» → «-ato»)." },
  { cat:"gruppi", f:"SO<sub>3</sub><sup>2−</sup>",               iupac:"triossosolfato(IV)",       trad:"solfito",   ox:"<b>S +4</b> · O −2",
    spiega:"Da H₂SO₃ (acido solforoso, «-oso» → «-ito»)." },
  { cat:"gruppi", f:"S<sub>2</sub>O<sub>3</sub><sup>2−</sup>",   iupac:"tiosolfato",               trad:"tiosolfato",ox:"<b>S media +2</b> · O −2",
    spiega:"tio- = un O del solfato sostituito da uno S." },
  { cat:"gruppi", f:"CO<sub>3</sub><sup>2−</sup>",               iupac:"triossocarbonato(IV)",     trad:"carbonato", ox:"<b>C +4</b> · O −2",
    spiega:"Da H₂CO₃ (acido carbonico)." },
  { cat:"gruppi", f:"CrO<sub>4</sub><sup>2−</sup>",              iupac:"tetraossocromato(VI)",     trad:"cromato",   ox:"<b>Cr +6</b> · O −2",
    spiega:"In ambiente acido il cromato (giallo) → dicromato (arancio)." },
  { cat:"gruppi", f:"Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>",  iupac:"eptaossodicromato(VI)",    trad:"dicromato", ox:"<b>Cr +6</b> · O −2",
    spiega:"Due Cr(VI); in ambiente basico → 2 cromati." },
  { cat:"gruppi", f:"C<sub>2</sub>O<sub>4</sub><sup>2−</sup>",   iupac:"etandioato",               trad:"ossalato",  ox:"<b>C +3</b> · O −2",
    spiega:"Anione organico (sale dell'acido ossalico)." },
  { cat:"gruppi", f:"PO<sub>4</sub><sup>3−</sup>",               iupac:"tetraossofosfato(V)",      trad:"fosfato",   ox:"<b>P +5</b> · O −2",
    spiega:"Da H₃PO₄ (acido fosforico, «-ico» → «-ato»)." },

  // ============================================================
  // ACIDI
  // ============================================================
  { cat:"acidi", f:"HF",                          iupac:"fluoruro di idrogeno",          trad:"acido fluoridrico", ox:"H +1 · <b>F −1</b>",
    spiega:"Idracido: H + non-metallo, senza ossigeno." },
  { cat:"acidi", f:"HCl",                         iupac:"cloruro di idrogeno",           trad:"acido cloridrico",  ox:"H +1 · <b>Cl −1</b>",
    spiega:"Idracido (no ossigeno)." },
  { cat:"acidi", f:"HBr",                         iupac:"bromuro di idrogeno",           trad:"acido bromidrico",  ox:"H +1 · <b>Br −1</b>",
    spiega:"Idracido (no ossigeno)." },
  { cat:"acidi", f:"HI",                          iupac:"ioduro di idrogeno",            trad:"acido iodidrico",   ox:"H +1 · <b>I −1</b>",
    spiega:"Idracido; acido forte (no ossigeno)." },
  { cat:"acidi", f:"H<sub>2</sub>S",              iupac:"solfuro di diidrogeno",         trad:"acido solfidrico",  ox:"H +1 · <b>S −2</b>",
    spiega:"Idracido (no ossigeno)." },
  { cat:"acidi", f:"HCN",                         iupac:"cianuro di idrogeno",           trad:"acido cianidrico",  ox:"H +1 · C +2 · N −3",
    spiega:"Idracido del gruppo cianuro." },
  { cat:"acidi", f:"HNO<sub>3</sub>",             iupac:"acido triossonitrico(V)",       trad:"acido nitrico",     ox:"<b>N +5</b> · O −2 · H +1",
    spiega:"«-ico» → sale «-ato» (nitrato)." },
  { cat:"acidi", f:"HNO<sub>2</sub>",             iupac:"acido diossonitrico(III)",      trad:"acido nitroso",     ox:"<b>N +3</b> · O −2 · H +1",
    spiega:"«-oso» → sale «-ito» (nitrito)." },
  { cat:"acidi", f:"H<sub>2</sub>SO<sub>4</sub>", iupac:"acido tetraossosolforico(VI)",  trad:"acido solforico",   ox:"<b>S +6</b> · O −2 · H +1",
    spiega:"«-ico» → solfato." },
  { cat:"acidi", f:"H<sub>2</sub>SO<sub>3</sub>", iupac:"acido triossosolforico(IV)",    trad:"acido solforoso",   ox:"<b>S +4</b> · O −2 · H +1",
    spiega:"«-oso» → solfito." },
  { cat:"acidi", f:"H<sub>2</sub>CO<sub>3</sub>", iupac:"acido triossocarbonico(IV)",    trad:"acido carbonico",   ox:"<b>C +4</b> · O −2 · H +1",
    spiega:"«-ico» → carbonato." },
  { cat:"acidi", f:"H<sub>3</sub>PO<sub>4</sub>", iupac:"acido tetraossofosforico(V)",   trad:"acido fosforico",   ox:"<b>P +5</b> · O −2 · H +1",
    spiega:"«-ico» → fosfato." },
  { cat:"acidi", f:"HClO",                        iupac:"acido monoossoclorico(I)",      trad:"acido ipocloroso",  ox:"<b>Cl +1</b> · O −2 · H +1",
    spiega:"ipo-…-oso → sale ipoclorito (Cl +1)." },
  { cat:"acidi", f:"HClO<sub>2</sub>",            iupac:"acido diossoclorico(III)",      trad:"acido cloroso",     ox:"<b>Cl +3</b> · O −2 · H +1",
    spiega:"«-oso» → clorito (Cl +3)." },
  { cat:"acidi", f:"HClO<sub>3</sub>",            iupac:"acido triossoclorico(V)",       trad:"acido clorico",     ox:"<b>Cl +5</b> · O −2 · H +1",
    spiega:"«-ico» → clorato (Cl +5)." },
  { cat:"acidi", f:"HClO<sub>4</sub>",            iupac:"acido tetraossoclorico(VII)",   trad:"acido perclorico",  ox:"<b>Cl +7</b> · O −2 · H +1",
    spiega:"per-…-ico → perclorato (Cl +7)." },
  { cat:"acidi", f:"CH<sub>3</sub>COOH",          iupac:"acido etanoico",                trad:"acido acetico",     ox:"C +3 e −3 · O −2 · H +1",
    spiega:"Acido organico (carbossilico, –COOH)." },

  // ============================================================
  // OSSIDI
  // ------------------------------------------------------------
  // basici (metallo + O)
  // ============================================================
  { cat:"ossidi", f:"Na<sub>2</sub>O",            iupac:"ossido di sodio",       trad:"ossido di sodio",    ox:"Na +1 · <b>O −2</b>",
    spiega:"Ossido basico (metallo + O). Na₂O + H₂O → 2 NaOH." },
  { cat:"ossidi", f:"K<sub>2</sub>O",             iupac:"ossido di potassio",    trad:"ossido di potassio", ox:"K +1 · <b>O −2</b>",
    spiega:"Ossido basico." },
  { cat:"ossidi", f:"CaO",                        iupac:"ossido di calcio",      trad:"ossido di calcio",   ox:"Ca +2 · <b>O −2</b>",
    spiega:"Ossido basico; CaO + H₂O → Ca(OH)₂ (calce spenta)." },
  { cat:"ossidi", f:"MgO",                        iupac:"ossido di magnesio",    trad:"ossido di magnesio", ox:"Mg +2 · <b>O −2</b>",
    spiega:"Ossido basico." },
  { cat:"ossidi", f:"Al<sub>2</sub>O<sub>3</sub>",iupac:"ossido di alluminio",   trad:"ossido di alluminio",ox:"Al +3 · <b>O −2</b>",
    spiega:"Ossido basico (anfotero)." },
  { cat:"ossidi", f:"ZnO",                        iupac:"ossido di zinco",       trad:"ossido di zinco",    ox:"Zn +2 · <b>O −2</b>",
    spiega:"Ossido basico (anfotero)." },
  { cat:"ossidi", f:"FeO",                        iupac:"ossido di ferro(II)",   trad:"ossido ferroso",     ox:"Fe +2 · <b>O −2</b>",
    spiega:"Ossido basico; «-oso» = n.o. minore." },
  { cat:"ossidi", f:"Fe<sub>2</sub>O<sub>3</sub>",iupac:"ossido di ferro(III)",  trad:"ossido ferrico",     ox:"Fe +3 · <b>O −2</b>",
    spiega:"Ossido basico; «-ico» = n.o. maggiore." },
  { cat:"ossidi", f:"Cu<sub>2</sub>O",            iupac:"ossido di rame(I)",     trad:"ossido rameoso",     ox:"Cu +1 · <b>O −2</b>",
    spiega:"Ossido basico; «-oso» = n.o. minore." },
  { cat:"ossidi", f:"CuO",                        iupac:"ossido di rame(II)",    trad:"ossido rameico",     ox:"Cu +2 · <b>O −2</b>",
    spiega:"Ossido basico; «-ico» = n.o. maggiore." },
  // acidi / anidridi (non-metallo + O)
  { cat:"ossidi", tag:"Ossido acido",  f:"CO<sub>2</sub>",                iupac:"diossido di carbonio",   trad:"anidride carbonica", ox:"<b>C +4</b> · O −2",
    spiega:"Ossido acido (anidride). CO₂ + H₂O → H₂CO₃." },
  { cat:"ossidi", tag:"Ossido neutro", f:"CO",                            iupac:"monossido di carbonio",  trad:"ossido di carbonio", ox:"<b>C +2</b> · O −2",
    spiega:"Ossido neutro: non forma acido né base." },
  { cat:"ossidi", tag:"Ossido acido",  f:"SO<sub>2</sub>",                iupac:"diossido di zolfo",      trad:"anidride solforosa", ox:"<b>S +4</b> · O −2",
    spiega:"SO₂ + H₂O → H₂SO₃ (acido solforoso)." },
  { cat:"ossidi", tag:"Ossido acido",  f:"SO<sub>3</sub>",                iupac:"triossido di zolfo",     trad:"anidride solforica", ox:"<b>S +6</b> · O −2",
    spiega:"SO₃ + H₂O → H₂SO₄ (acido solforico)." },
  { cat:"ossidi", tag:"Ossido acido",  f:"N<sub>2</sub>O<sub>5</sub>",    iupac:"pentossido di diazoto",  trad:"anidride nitrica",   ox:"<b>N +5</b> · O −2",
    spiega:"N₂O₅ + H₂O → 2 HNO₃ (acido nitrico)." },
  { cat:"ossidi", tag:"Ossido acido",  f:"N<sub>2</sub>O<sub>3</sub>",    iupac:"triossido di diazoto",   trad:"anidride nitrosa",   ox:"<b>N +3</b> · O −2",
    spiega:"N₂O₃ + H₂O → 2 HNO₂ (acido nitroso)." },
  { cat:"ossidi", tag:"Ossido acido",  f:"P<sub>2</sub>O<sub>5</sub>",    iupac:"pentossido di difosforo",trad:"anidride fosforica", ox:"<b>P +5</b> · O −2",
    spiega:"P₂O₅ + 3 H₂O → 2 H₃PO₄ (acido fosforico)." },

  // ============================================================
  // IDROSSIDI (basi)
  // ============================================================
  { cat:"idrossidi", f:"NaOH",                        iupac:"idrossido di sodio",       trad:"idrossido di sodio",       ox:"Na +1 · O −2 · H +1",
    spiega:"Base forte (soda caustica). Na₂O + H₂O → NaOH." },
  { cat:"idrossidi", f:"KOH",                         iupac:"idrossido di potassio",    trad:"idrossido di potassio",    ox:"K +1 · O −2 · H +1",
    spiega:"Base forte (potassa caustica)." },
  { cat:"idrossidi", f:"Ca(OH)<sub>2</sub>",          iupac:"idrossido di calcio",      trad:"idrossido di calcio",      ox:"Ca +2 · O −2 · H +1",
    spiega:"Base (calce spenta). Due (OH)⁻ → Ca = +2." },
  { cat:"idrossidi", f:"Mg(OH)<sub>2</sub>",          iupac:"idrossido di magnesio",    trad:"idrossido di magnesio",    ox:"Mg +2 · O −2 · H +1",
    spiega:"Base debole (latte di magnesia)." },
  { cat:"idrossidi", f:"Ba(OH)<sub>2</sub>",          iupac:"idrossido di bario",       trad:"idrossido di bario",       ox:"Ba +2 · O −2 · H +1",
    spiega:"Base forte." },
  { cat:"idrossidi", f:"Al(OH)<sub>3</sub>",          iupac:"idrossido di alluminio",   trad:"idrossido di alluminio",   ox:"Al +3 · O −2 · H +1",
    spiega:"Idrossido anfotero. Tre (OH)⁻ → Al = +3." },
  { cat:"idrossidi", f:"Fe(OH)<sub>2</sub>",          iupac:"idrossido di ferro(II)",   trad:"idrossido ferroso",        ox:"Fe +2 · O −2 · H +1",
    spiega:"«-oso» = n.o. minore." },
  { cat:"idrossidi", f:"Fe(OH)<sub>3</sub>",          iupac:"idrossido di ferro(III)",  trad:"idrossido ferrico",        ox:"Fe +3 · O −2 · H +1",
    spiega:"«-ico» = n.o. maggiore." },
  { cat:"idrossidi", f:"NH<sub>4</sub>OH",            iupac:"idrossido di ammonio",     trad:"idrossido di ammonio",     ox:"N −3 · H +1 · O −2",
    spiega:"Ammoniaca in acqua: base debole." },

  // ============================================================
  // SALI
  // ------------------------------------------------------------
  // binari (metallo + non-metallo, «-uro»)
  // ============================================================
  { cat:"sali", f:"NaCl",                                              iupac:"cloruro di sodio",        trad:"cloruro di sodio",        ox:"Na +1 · Cl −1",
    spiega:"Sale binario; HCl + NaOH → NaCl + H₂O (sale da cucina)." },
  { cat:"sali", f:"KCl",                                               iupac:"cloruro di potassio",     trad:"cloruro di potassio",     ox:"K +1 · Cl −1",
    spiega:"Sale binario." },
  { cat:"sali", f:"CaCl<sub>2</sub>",                                  iupac:"cloruro di calcio",       trad:"cloruro di calcio",       ox:"Ca +2 · Cl −1",
    spiega:"Sale binario." },
  { cat:"sali", f:"FeCl<sub>3</sub>",                                  iupac:"cloruro di ferro(III)",   trad:"cloruro ferrico",         ox:"Fe +3 · Cl −1",
    spiega:"Stock (III) ↔ trad. «-ico» (n.o. maggiore)." },
  { cat:"sali", f:"AlCl<sub>3</sub>",                                  iupac:"cloruro di alluminio",    trad:"cloruro di alluminio",    ox:"Al +3 · Cl −1",
    spiega:"Sale binario." },
  { cat:"sali", f:"NH<sub>4</sub>Cl",                                  iupac:"cloruro di ammonio",      trad:"cloruro di ammonio",      ox:"N −3 · H +1 · Cl −1",
    spiega:"Sale dell'ammonio. Da acido forte + base debole → idrolisi acida." },
  { cat:"sali", f:"KI",                                                iupac:"ioduro di potassio",      trad:"ioduro di potassio",      ox:"K +1 · I −1",
    spiega:"Sale binario." },
  { cat:"sali", f:"Na<sub>2</sub>S",                                   iupac:"solfuro di sodio",        trad:"solfuro di sodio",        ox:"Na +1 · S −2",
    spiega:"Sale binario." },
  // ternari (metallo + ossoanione)
  { cat:"sali", f:"NaNO<sub>3</sub>",                                  iupac:"nitrato di sodio",        trad:"nitrato di sodio",        ox:"Na +1 · N +5 · O −2",
    spiega:"Sale ternario; HNO₃ + NaOH → NaNO₃ + H₂O." },
  { cat:"sali", f:"KNO<sub>3</sub>",                                   iupac:"nitrato di potassio",     trad:"nitrato di potassio",     ox:"K +1 · N +5 · O −2",
    spiega:"Sale ternario (salnitro)." },
  { cat:"sali", f:"CaCO<sub>3</sub>",                                  iupac:"carbonato di calcio",     trad:"carbonato di calcio",     ox:"Ca +2 · C +4 · O −2",
    spiega:"Calcare, marmo, calcite." },
  { cat:"sali", f:"Na<sub>2</sub>CO<sub>3</sub>",                      iupac:"carbonato di sodio",      trad:"carbonato di sodio",      ox:"Na +1 · C +4 · O −2",
    spiega:"Soda." },
  { cat:"sali", f:"Na<sub>2</sub>SO<sub>4</sub>",                      iupac:"solfato di sodio",        trad:"solfato di sodio",        ox:"Na +1 · S +6 · O −2",
    spiega:"Sale ternario." },
  { cat:"sali", f:"CuSO<sub>4</sub>",                                  iupac:"solfato di rame(II)",     trad:"solfato rameico",         ox:"Cu +2 · S +6 · O −2",
    spiega:"Solfato rameico (azzurro)." },
  { cat:"sali", f:"CaSO<sub>4</sub>",                                  iupac:"solfato di calcio",       trad:"solfato di calcio",       ox:"Ca +2 · S +6 · O −2",
    spiega:"Gesso." },
  { cat:"sali", f:"KMnO<sub>4</sub>",                                  iupac:"permanganato di potassio",trad:"permanganato di potassio",ox:"K +1 · Mn +7 · O −2",
    spiega:"Sale ternario; forte ossidante." },
  { cat:"sali", f:"AgNO<sub>3</sub>",                                  iupac:"nitrato di argento",      trad:"nitrato di argento",      ox:"Ag +1 · N +5 · O −2",
    spiega:"Sale ternario." },
  { cat:"sali", f:"KClO<sub>3</sub>",                                  iupac:"clorato di potassio",     trad:"clorato di potassio",     ox:"K +1 · Cl +5 · O −2",
    spiega:"Sale del clorato (Cl +5)." },
  { cat:"sali", f:"Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>",        iupac:"fosfato di calcio",       trad:"fosfato di calcio",       ox:"Ca +2 · P +5 · O −2",
    spiega:"Sale ternario con gruppo (PO₄)³⁻." },
  { cat:"sali", tag:"Sale acido", f:"NaHCO<sub>3</sub>",               iupac:"idrogenocarbonato di sodio", trad:"bicarbonato di sodio", ox:"Na +1 · C +4 · O −2 · H +1",
    spiega:"Sale acido (bicarbonato di sodio)." },

  // ============================================================
  // DETERMINAZIONE DEI NUMERI DI OSSIDAZIONE
  // (kind:"ox" -> davanti la formula, dietro la formula annotata)
  // ============================================================
  { cat:"ossido", kind:"ox", f:"H<sub>2</sub>O",
    parts:[{el:"H",sub:"2",ox:"+1"},{el:"O",ox:"−2"}],
    spiega:"2(+1) + O = 0  →  O = −2" },
  { cat:"ossido", kind:"ox", f:"CO<sub>2</sub>",
    parts:[{el:"C",ox:"+4"},{el:"O",sub:"2",ox:"−2"}],
    spiega:"C + 2(−2) = 0  →  C = +4" },
  { cat:"ossido", kind:"ox", f:"NH<sub>3</sub>",
    parts:[{el:"N",ox:"−3"},{el:"H",sub:"3",ox:"+1"}],
    spiega:"N + 3(+1) = 0  →  N = −3" },
  { cat:"ossido", kind:"ox", f:"NaCl",
    parts:[{el:"Na",ox:"+1"},{el:"Cl",ox:"−1"}],
    spiega:"Composto ionico: Na = +1, Cl = −1." },
  { cat:"ossido", kind:"ox", f:"CaO",
    parts:[{el:"Ca",ox:"+2"},{el:"O",ox:"−2"}],
    spiega:"Ca (gruppo 2) = +2  →  O = −2" },
  { cat:"ossido", kind:"ox", f:"Fe<sub>2</sub>O<sub>3</sub>",
    parts:[{el:"Fe",sub:"2",ox:"+3"},{el:"O",sub:"3",ox:"−2"}],
    spiega:"2·Fe + 3(−2) = 0  →  Fe = +3" },
  { cat:"ossido", kind:"ox", f:"Al<sub>2</sub>O<sub>3</sub>",
    parts:[{el:"Al",sub:"2",ox:"+3"},{el:"O",sub:"3",ox:"−2"}],
    spiega:"2·Al + 3(−2) = 0  →  Al = +3" },
  { cat:"ossido", kind:"ox", f:"SO<sub>3</sub>",
    parts:[{el:"S",ox:"+6"},{el:"O",sub:"3",ox:"−2"}],
    spiega:"S + 3(−2) = 0  →  S = +6" },
  { cat:"ossido", kind:"ox", f:"MnO<sub>2</sub>",
    parts:[{el:"Mn",ox:"+4"},{el:"O",sub:"2",ox:"−2"}],
    spiega:"Mn + 2(−2) = 0  →  Mn = +4" },
  { cat:"ossido", kind:"ox", f:"P<sub>2</sub>O<sub>5</sub>",
    parts:[{el:"P",sub:"2",ox:"+5"},{el:"O",sub:"5",ox:"−2"}],
    spiega:"2·P + 5(−2) = 0  →  P = +5" },
  { cat:"ossido", kind:"ox", f:"CH<sub>4</sub>",
    parts:[{el:"C",ox:"−4"},{el:"H",sub:"4",ox:"+1"}],
    spiega:"C + 4(+1) = 0  →  C = −4" },
  { cat:"ossido", kind:"ox", f:"H<sub>2</sub>SO<sub>4</sub>",
    parts:[{el:"H",sub:"2",ox:"+1"},{el:"S",ox:"+6"},{el:"O",sub:"4",ox:"−2"}],
    spiega:"2(+1) + S + 4(−2) = 0  →  S = +6" },
  { cat:"ossido", kind:"ox", f:"H<sub>2</sub>CO<sub>3</sub>",
    parts:[{el:"H",sub:"2",ox:"+1"},{el:"C",ox:"+4"},{el:"O",sub:"3",ox:"−2"}],
    spiega:"2(+1) + C + 3(−2) = 0  →  C = +4" },
  { cat:"ossido", kind:"ox", f:"HNO<sub>3</sub>",
    parts:[{el:"H",ox:"+1"},{el:"N",ox:"+5"},{el:"O",sub:"3",ox:"−2"}],
    spiega:"+1 + N + 3(−2) = 0  →  N = +5" },
  { cat:"ossido", kind:"ox", f:"HClO",
    parts:[{el:"H",ox:"+1"},{el:"Cl",ox:"+1"},{el:"O",ox:"−2"}],
    spiega:"+1 + Cl + (−2) = 0  →  Cl = +1" },
  { cat:"ossido", kind:"ox", f:"KMnO<sub>4</sub>",
    parts:[{el:"K",ox:"+1"},{el:"Mn",ox:"+7"},{el:"O",sub:"4",ox:"−2"}],
    spiega:"+1 + Mn + 4(−2) = 0  →  Mn = +7" },
  { cat:"ossido", kind:"ox", f:"K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>",
    parts:[{el:"K",sub:"2",ox:"+1"},{el:"Cr",sub:"2",ox:"+6"},{el:"O",sub:"7",ox:"−2"}],
    spiega:"2(+1) + 2·Cr + 7(−2) = 0  →  Cr = +6" },
  // casi-trappola
  { cat:"ossido", kind:"ox", f:"H<sub>2</sub>O<sub>2</sub>",
    parts:[{el:"H",sub:"2",ox:"+1"},{el:"O",sub:"2",ox:"−1"}],
    spiega:"⚠ Perossido: legame O–O  →  O = −1 (non −2)." },
  { cat:"ossido", kind:"ox", f:"NaH",
    parts:[{el:"Na",ox:"+1"},{el:"H",ox:"−1"}],
    spiega:"⚠ Idruro metallico: H legato a metallo  →  H = −1." },
  { cat:"ossido", kind:"ox", f:"OF<sub>2</sub>",
    parts:[{el:"O",ox:"+2"},{el:"F",sub:"2",ox:"−1"}],
    spiega:"⚠ F è più elettronegativo dell'O  →  F = −1, O = +2." },
  { cat:"ossido", kind:"ox", f:"N<sub>2</sub>",
    parts:[{el:"N",sub:"2",ox:"0"}],
    spiega:"⚠ Sostanza semplice  →  n.o. = 0." },
  { cat:"ossido", kind:"ox", f:"O<sub>2</sub>",
    parts:[{el:"O",sub:"2",ox:"0"}],
    spiega:"⚠ Sostanza semplice  →  n.o. = 0." },
  // con gruppi tra parentesi (inorganici)
  { cat:"ossido", kind:"ox", f:"Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>",
    parts:[{el:"Ca",sub:"3",ox:"+2"},{txt:"("},{el:"P",ox:"+5"},{el:"O",sub:"4",ox:"−2"},{txt:")",sub:"2"}],
    spiega:"Due fosfati (PO₄)³⁻ = −6, bilanciati da 3 Ca²⁺.  In PO₄: P + 4(−2) = −3  →  P = +5" },
  { cat:"ossido", kind:"ox", f:"Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>",
    parts:[{el:"Al",sub:"2",ox:"+3"},{txt:"("},{el:"S",ox:"+6"},{el:"O",sub:"4",ox:"−2"},{txt:")",sub:"3"}],
    spiega:"Tre solfati (SO₄)²⁻ = −6, da 2 Al³⁺.  In SO₄: S + 4(−2) = −2  →  S = +6" },
  { cat:"ossido", kind:"ox", f:"(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
    parts:[{txt:"("},{el:"N",ox:"−3"},{el:"H",sub:"4",ox:"+1"},{txt:")",sub:"2"},{el:"S",ox:"+6"},{el:"O",sub:"4",ox:"−2"}],
    spiega:"Due ammonio (NH₄)⁺ = +2, un solfato (SO₄)²⁻ = −2.  In NH₄: N + 4(+1) = +1  →  N = −3" },
  { cat:"ossido", kind:"ox", f:"Ca(NO<sub>3</sub>)<sub>2</sub>",
    parts:[{el:"Ca",ox:"+2"},{txt:"("},{el:"N",ox:"+5"},{el:"O",sub:"3",ox:"−2"},{txt:")",sub:"2"}],
    spiega:"Due nitrati (NO₃)⁻ = −2  →  Ca = +2.  In NO₃: N + 3(−2) = −1  →  N = +5" },
  { cat:"ossido", kind:"ox", f:"Cu(NO<sub>3</sub>)<sub>2</sub>",
    parts:[{el:"Cu",ox:"+2"},{txt:"("},{el:"N",ox:"+5"},{el:"O",sub:"3",ox:"−2"},{txt:")",sub:"2"}],
    spiega:"Due nitrati (NO₃)⁻ = −2  →  Cu = +2 (rame(II))." },
  { cat:"ossido", kind:"ox", f:"Mg(ClO<sub>4</sub>)<sub>2</sub>",
    parts:[{el:"Mg",ox:"+2"},{txt:"("},{el:"Cl",ox:"+7"},{el:"O",sub:"4",ox:"−2"},{txt:")",sub:"2"}],
    spiega:"Due perclorati (ClO₄)⁻ = −2  →  Mg = +2.  In ClO₄: Cl + 4(−2) = −1  →  Cl = +7" },
  { cat:"ossido", kind:"ox", f:"Fe(OH)<sub>3</sub>",
    parts:[{el:"Fe",ox:"+3"},{txt:"("},{el:"O",ox:"−2"},{el:"H",ox:"+1"},{txt:")",sub:"3"}],
    spiega:"Tre ossidrili (OH)⁻ = −3  →  Fe = +3.  (O = −2, H = +1)" },
  { cat:"ossido", kind:"ox", f:"Al(OH)<sub>3</sub>",
    parts:[{el:"Al",ox:"+3"},{txt:"("},{el:"O",ox:"−2"},{el:"H",ox:"+1"},{txt:")",sub:"3"}],
    spiega:"Tre (OH)⁻ = −3  →  Al = +3." },
  { cat:"ossido", kind:"ox", f:"Ba(OH)<sub>2</sub>",
    parts:[{el:"Ba",ox:"+2"},{txt:"("},{el:"O",ox:"−2"},{el:"H",ox:"+1"},{txt:")",sub:"2"}],
    spiega:"Due (OH)⁻ = −2  →  Ba = +2." },
  { cat:"ossido", kind:"ox", f:"(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub>",
    parts:[{txt:"("},{el:"N",ox:"−3"},{el:"H",sub:"4",ox:"+1"},{txt:")",sub:"3"},{el:"P",ox:"+5"},{el:"O",sub:"4",ox:"−2"}],
    spiega:"Tre ammonio (NH₄)⁺ = +3, un fosfato (PO₄)³⁻ = −3.  →  N = −3, P = +5" },

  // ============================================================
  // STATI DI OSSIDAZIONE POSSIBILI PER ELEMENTO
  // (kind:"states" -> davanti l'elemento, dietro i n.o. possibili)
  // ============================================================
  { cat:"stati", kind:"states", el:"H",  name:"Idrogeno",
    states:[
      {v:"+1", ex:"H₂O, HCl", main:true},
      {v:"−1", ex:"NaH (idruri)"},
      {v:"0",  ex:"H₂"}
    ],
    nota:"+1 quasi sempre; −1 solo negli idruri metallici." },
  { cat:"stati", kind:"states", el:"O",  name:"Ossigeno",
    states:[
      {v:"−2", ex:"H₂O, ossidi", main:true},
      {v:"−1", ex:"H₂O₂ (perossidi)"},
      {v:"+2", ex:"OF₂"},
      {v:"0",  ex:"O₂"}
    ],
    nota:"−2 di regola; −1 nei perossidi; positivo solo con F." },
  { cat:"stati", kind:"states", el:"F",  name:"Fluoro",
    states:[
      {v:"−1", ex:"NaF, HF", main:true},
      {v:"0",  ex:"F₂"}
    ],
    nota:"Sempre −1 nei composti: è l'elemento più elettronegativo." },
  { cat:"stati", kind:"states", el:"K",  name:"Potassio",
    states:[
      {v:"+1", ex:"KCl, KOH, KNO₃", main:true},
      {v:"0",  ex:"K metallico"}
    ],
    nota:"Tutti i metalli alcalini (gruppo 1: Li, Na, K…) sono sempre +1." },
  { cat:"stati", kind:"states", el:"Ca", name:"Calcio",
    states:[
      {v:"+2", ex:"CaO, CaCO₃", main:true},
      {v:"0",  ex:"Ca metallico"}
    ],
    nota:"Tutti gli alcalino-terrosi (gruppo 2: Mg, Ca, Ba…) sono sempre +2." },
  { cat:"stati", kind:"states", el:"Al", name:"Alluminio",
    states:[
      {v:"+3", ex:"Al₂O₃, AlCl₃", main:true},
      {v:"0",  ex:"Al metallico"}
    ],
    nota:"Unico stato nei composti: +3." },
  { cat:"stati", kind:"states", el:"Cl", name:"Cloro",
    states:[
      {v:"−1", ex:"NaCl, HCl", main:true},
      {v:"+1", ex:"HClO / ipoclorito"},
      {v:"+3", ex:"HClO₂ / clorito"},
      {v:"+5", ex:"HClO₃ / clorato", main:true},
      {v:"+7", ex:"HClO₄ / perclorato"},
      {v:"0",  ex:"Cl₂"}
    ],
    nota:"−1 con metalli e H; positivi dispari (+1,+3,+5,+7) negli ossoacidi/ossoanioni." },
  { cat:"stati", kind:"states", el:"Br", name:"Bromo",
    states:[
      {v:"−1", ex:"NaBr, HBr", main:true},
      {v:"+1", ex:"HBrO"},
      {v:"+5", ex:"HBrO₃ / bromato", main:true},
      {v:"+7", ex:"HBrO₄"},
      {v:"0",  ex:"Br₂"}
    ],
    nota:"Come il cloro: −1 di base, positivi negli ossocomposti." },
  { cat:"stati", kind:"states", el:"I",  name:"Iodio",
    states:[
      {v:"−1", ex:"NaI, HI", main:true},
      {v:"+1", ex:"HIO"},
      {v:"+5", ex:"HIO₃ / iodato", main:true},
      {v:"+7", ex:"HIO₄"},
      {v:"0",  ex:"I₂"}
    ],
    nota:"Stessa logica degli altri alogeni." },
  { cat:"stati", kind:"states", el:"S",  name:"Zolfo",
    states:[
      {v:"−2", ex:"H₂S / solfuri",       main:true},
      {v:"+4", ex:"SO₂, H₂SO₃ / solfiti", main:true},
      {v:"+6", ex:"SO₃, H₂SO₄ / solfati", main:true},
      {v:"0",  ex:"S₈"}
    ],
    nota:"I tre da ricordare: −2 (solfuro), +4 (solfito), +6 (solfato)." },
  { cat:"stati", kind:"states", el:"N",  name:"Azoto",
    states:[
      {v:"−3",     ex:"NH₃ / ammoniaca", main:true},
      {v:"+3",     ex:"HNO₂ / nitriti"},
      {v:"+5",     ex:"HNO₃ / nitrati",  main:true},
      {v:"+2 / +4",ex:"NO, NO₂"},
      {v:"0",      ex:"N₂"}
    ],
    nota:"Principali: −3, +3, +5. (Range completo da −3 a +5.)" },
  { cat:"stati", kind:"states", el:"P",  name:"Fosforo",
    states:[
      {v:"−3", ex:"PH₃ / fosfuri"},
      {v:"+3", ex:"H₃PO₃"},
      {v:"+5", ex:"H₃PO₄ / fosfati", main:true},
      {v:"0",  ex:"P₄"}
    ],
    nota:"Il più importante è +5 (fosfati); compaiono anche −3 e +3." },
  { cat:"stati", kind:"states", el:"C",  name:"Carbonio",
    states:[
      {v:"−4", ex:"CH₄"},
      {v:"+2", ex:"CO"},
      {v:"+4", ex:"CO₂ / carbonati", main:true},
      {v:"0",  ex:"C"}
    ],
    nota:"Range da −4 a +4; in chimica inorganica spicca +4." },
  { cat:"stati", kind:"states", el:"Fe", name:"Ferro",
    states:[
      {v:"+2", ex:"FeO / ferroso",     main:true},
      {v:"+3", ex:"Fe₂O₃ / ferrico",   main:true},
      {v:"0",  ex:"Fe metallico"}
    ],
    nota:"Due stati: +2 (ferroso) e +3 (ferrico)." },
  { cat:"stati", kind:"states", el:"Cu", name:"Rame",
    states:[
      {v:"+1", ex:"Cu₂O / rameoso"},
      {v:"+2", ex:"CuO / rameico", main:true},
      {v:"0",  ex:"Cu metallico"}
    ],
    nota:"+2 il più comune; +1 meno frequente." },
  { cat:"stati", kind:"states", el:"Mn", name:"Manganese",
    states:[
      {v:"+2", ex:"MnCl₂",                       main:true},
      {v:"+4", ex:"MnO₂"},
      {v:"+6", ex:"manganati"},
      {v:"+7", ex:"KMnO₄ / permanganato",        main:true},
      {v:"0",  ex:"Mn metallico"}
    ],
    nota:"Molti stati; chiave +2 (stabile) e +7 (permanganato, forte ossidante)." },
  { cat:"stati", kind:"states", el:"Cr", name:"Cromo",
    states:[
      {v:"+2", ex:"CrCl₂"},
      {v:"+3", ex:"Cr₂O₃ / cromico",  main:true},
      {v:"+6", ex:"cromati, dicromati",main:true},
      {v:"0",  ex:"Cr metallico"}
    ],
    nota:"Principali: +3 e +6." },
  { cat:"stati", kind:"states", el:"Zn", name:"Zinco",
    states:[
      {v:"+2", ex:"ZnO, ZnCl₂", main:true},
      {v:"0",  ex:"Zn metallico"}
    ],
    nota:"Unico stato nei composti: +2." },
  { cat:"stati", kind:"states", el:"Ag", name:"Argento",
    states:[
      {v:"+1", ex:"AgNO₃, AgCl", main:true},
      {v:"0",  ex:"Ag metallico"}
    ],
    nota:"Praticamente solo +1." },
  { cat:"stati", kind:"states", el:"Sn", name:"Stagno",
    states:[
      {v:"+2", ex:"SnCl₂ / stannoso", main:true},
      {v:"+4", ex:"SnO₂ / stannico",  main:true},
      {v:"0",  ex:"Sn metallico"}
    ],
    nota:"Due stati: +2 e +4." },
  { cat:"stati", kind:"states", el:"Pb", name:"Piombo",
    states:[
      {v:"+2", ex:"PbO / piomboso", main:true},
      {v:"+4", ex:"PbO₂"},
      {v:"0",  ex:"Pb metallico"}
    ],
    nota:"+2 più stabile, ma esiste anche +4." },
  { cat:"stati", kind:"states", el:"Hg", name:"Mercurio",
    states:[
      {v:"+1", ex:"Hg₂Cl₂ / mercuroso"},
      {v:"+2", ex:"HgO / mercurico", main:true},
      {v:"0",  ex:"Hg metallico"}
    ],
    nota:"+1 come ione doppio Hg₂²⁺ e +2." },

];

/* Categorie selezionabili tramite i chip. */
const CATS = [
  { id:"tutti",     label:"Tutti" },
  { id:"elementi",  label:"Elementi" },
  { id:"cationi",   label:"Cationi" },
  { id:"anioni",    label:"Anioni" },
  { id:"gruppi",    label:"Gruppi poliatomici" },
  { id:"acidi",     label:"Acidi" },
  { id:"ossidi",    label:"Ossidi" },
  { id:"idrossidi", label:"Idrossidi" },
  { id:"sali",      label:"Sali" },
  { id:"ossido",    label:"N. ossidazione" },
  { id:"stati",     label:"Stati ox." },
];

/* Etichette mostrate sul tag in alto a sinistra di ogni carta. */
const CAT_LABEL = {
  elementi:  "Elemento",
  cationi:   "Catione",
  anioni:    "Anione",
  gruppi:    "Gruppo poliatomico",
  acidi:     "Acido",
  ossidi:    "Ossido",
  idrossidi: "Idrossido",
  sali:      "Sale",
  ossido:    "Numero di ossidazione",
  stati:     "Stati di ossidazione",
};

/* Assegna a ogni carta un ID stabile e leggibile (#001, #002, …).
   L'ID è la posizione 1-based nell'array DATA — non cambia finché
   non si aggiunge/rimuove qualcosa: è quello da citare nelle issue. */
DATA.forEach((d, i) => { d.id = String(i + 1).padStart(3, "0"); });
