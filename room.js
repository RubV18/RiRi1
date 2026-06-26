/* ============================================================
   room.js - scena cameretta (impianto Camera di Van Gogh, palette rosa)
   + sprite pixel degli oggetti. Prima versione, rifinibile.
   ============================================================ */

// ---- SCENA STANZA: cameretta pulita, prospettiva frontale con leggera profondita' ----
function drawRoom(){
  return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <!-- parete -->
    <rect x="0" y="0" width="100" height="72" fill="#F7D6E0"/>
    <!-- fascia decorativa a meta' parete -->
    <rect x="0" y="40" width="100" height="2.5" fill="#E9A8C0"/>
    <rect x="0" y="42.5" width="100" height="1" fill="#F2C0D2"/>
    <!-- pavimento (legno chiaro) -->
    <rect x="0" y="72" width="100" height="28" fill="#D9A98C"/>
    <rect x="0" y="72" width="100" height="2" fill="#9A4E68"/>
    <!-- assi pavimento -->
    <rect x="14" y="74" width="0.6" height="26" fill="#C9906F" opacity=".5"/>
    <rect x="34" y="74" width="0.6" height="26" fill="#C9906F" opacity=".5"/>
    <rect x="54" y="74" width="0.6" height="26" fill="#C9906F" opacity=".5"/>
    <rect x="74" y="74" width="0.6" height="26" fill="#C9906F" opacity=".5"/>
    <rect x="90" y="74" width="0.6" height="26" fill="#C9906F" opacity=".5"/>

    <!-- FINESTRA in alto a sinistra -->
    <rect x="6" y="8" width="26" height="22" fill="#fff"/>
    <rect x="7" y="9" width="24" height="20" fill="#BFE3F5"/>
    <rect x="18.5" y="9" width="1.5" height="20" fill="#fff"/>
    <rect x="7" y="18" width="24" height="1.5" fill="#fff"/>
    <rect x="5" y="7" width="28" height="2" fill="#9A4E68"/>
    <rect x="5" y="30" width="28" height="2" fill="#9A4E68"/>
    <!-- tendine -->
    <rect x="4" y="7" width="4" height="25" fill="#F5A3C7"/>
    <rect x="30" y="7" width="4" height="25" fill="#F5A3C7"/>
    <!-- nuvoletta nella finestra -->
    <rect x="22" y="13" width="6" height="3" fill="#fff" opacity=".8"/>
    <rect x="24" y="11" width="4" height="2" fill="#fff" opacity=".8"/>

    <!-- LETTO a destra, vista laterale -->
    <rect x="64" y="52" width="34" height="20" fill="#B5713E"/>           <!-- struttura -->
    <rect x="64" y="50" width="34" height="3" fill="#caa07a"/>            <!-- bordo -->
    <rect x="64" y="44" width="6" height="10" fill="#9A5A30"/>            <!-- testiera sx -->
    <rect x="92" y="46" width="6" height="8" fill="#9A5A30"/>            <!-- pediera dx -->
    <rect x="66" y="46" width="30" height="8" fill="#FBEFE0"/>            <!-- materasso -->
    <!-- coperta delle fate (richiamo, non Winx) -->
    <rect x="74" y="46" width="22" height="8" fill="#F5A3C7"/>
    <rect x="74" y="46" width="22" height="2.4" fill="#C4A3F5"/>
    <rect x="78" y="50" width="2" height="2" fill="#FFE98A"/>
    <rect x="84" y="49" width="2" height="2" fill="#fff"/>
    <rect x="90" y="51" width="2" height="2" fill="#BFE3F5"/>
    <rect x="87" y="48" width="1.5" height="1.5" fill="#FFE98A"/>
    <!-- cuscino -->
    <rect x="66" y="44" width="9" height="5" fill="#fff"/>

    <!-- SCRIVANIA a sinistra (la maestra ci si siede) -->
    <rect x="6" y="60" width="30" height="4" fill="#caa07a"/>             <!-- piano -->
    <rect x="8" y="64" width="3" height="14" fill="#B5713E"/>            <!-- gamba sx -->
    <rect x="31" y="64" width="3" height="14" fill="#B5713E"/>           <!-- gamba dx -->
    <rect x="6" y="60" width="30" height="1.5" fill="#dcc0a2"/>

    <!-- COMODINO accanto al letto (biberon, cannuccia) -->
    <rect x="52" y="58" width="11" height="14" fill="#B5713E"/>
    <rect x="52" y="58" width="11" height="2" fill="#caa07a"/>
    <rect x="54" y="63" width="7" height="3" fill="#9A5A30"/>            <!-- cassetto -->
    <rect x="57" y="64" width="1.5" height="1.5" fill="#FFD93D"/>        <!-- pomello -->

    <!-- MENSOLE a muro (lottatrice, mystery box, corona) -->
    <rect x="40" y="20" width="22" height="2.5" fill="#caa07a"/>         <!-- mensola alta -->
    <rect x="40" y="22.5" width="22" height="1" fill="#9A5A30"/>
    <rect x="66" y="28" width="20" height="2.5" fill="#caa07a"/>         <!-- mensola media dx -->
    <rect x="66" y="30.5" width="20" height="1" fill="#9A5A30"/>

    <!-- tappeto sul pavimento -->
    <ellipse cx="34" cy="88" rx="26" ry="9" fill="#E58BAA" opacity=".55"/>
    <ellipse cx="34" cy="88" rx="18" ry="6" fill="#F2B2C9" opacity=".6"/>

    <!-- quadretto cuore alla parete -->
    <rect x="44" y="8" width="12" height="10" fill="#fff"/>
    <rect x="45" y="9" width="10" height="8" fill="#FDE7EE"/>
    <rect x="48" y="11" width="2" height="2" fill="#F58BB0"/><rect x="50" y="11" width="2" height="2" fill="#F58BB0"/>
    <rect x="47" y="13" width="6" height="2" fill="#F58BB0"/><rect x="49" y="15" width="2" height="1" fill="#F58BB0"/>
  </svg>`;
}

// ---- SPRITE OGGETTI (SVG pixel, viewBox 16x16 salvo nota) ----
const SPRITES={
  // macchina gialla
  sprCar(){return `<svg viewBox="0 0 24 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="5" fill="#FFD93D"/>
    <rect x="6" y="3" width="10" height="4" fill="#FFD93D"/>
    <rect x="7" y="4" width="8" height="2" fill="#BFE3F5"/>
    <rect x="2" y="8" width="20" height="2" fill="#E8B92E"/>
    <rect x="5" y="10" width="4" height="4" fill="#333"/><rect x="6" y="11" width="2" height="2" fill="#888"/>
    <rect x="15" y="10" width="4" height="4" fill="#333"/><rect x="16" y="11" width="2" height="2" fill="#888"/>
    <rect x="20" y="7" width="2" height="2" fill="#fff"/></svg>`;},

  // cannuccia bubble tea
  sprStraw(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="1" width="3" height="13" fill="#F58BB0"/>
    <rect x="7" y="1" width="3" height="2" fill="#fff"/>
    <rect x="6" y="13" width="5" height="2" fill="#E55E8E"/>
    <rect x="9" y="3" width="1" height="11" fill="#fff" opacity=".5"/></svg>`;},

  // maestra (volto coperto generico)
  sprTeacher(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="8" height="9" fill="#7a5c9e"/>
    <rect x="5" y="4" width="6" height="5" fill="#E8C9A0"/>
    <rect x="4" y="2" width="8" height="3" fill="#5e4680"/>
    <rect x="4" y="9" width="8" height="2" fill="#5e4680"/>
    <rect x="6" y="6" width="1" height="1" fill="#333"/><rect x="9" y="6" width="1" height="1" fill="#333"/>
    <rect x="3" y="11" width="10" height="4" fill="#9a7bc0"/></svg>`;},

  // biberon latte
  sprBottle(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="1" width="4" height="2" fill="#F5B8CD"/>
    <rect x="5" y="3" width="6" height="2" fill="#E58BAA"/>
    <rect x="4" y="5" width="8" height="9" fill="#fff" stroke="#ccc"/>
    <rect x="5" y="9" width="6" height="4" fill="#FBEFE0"/>
    <rect x="5" y="6" width="2" height="6" fill="#eee" opacity=".7"/></svg>`;},

  // bambola lottatrice (generica, NON persona reale)
  sprDoll(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="1" width="6" height="5" fill="#3a2a3a"/>
    <rect x="6" y="3" width="4" height="3" fill="#E8C9A0"/>
    <rect x="6" y="4" width="1" height="1" fill="#000"/><rect x="9" y="4" width="1" height="1" fill="#000"/>
    <rect x="5" y="6" width="6" height="5" fill="#7a1f3a"/>
    <rect x="4" y="6" width="1" height="4" fill="#E8C9A0"/><rect x="11" y="6" width="1" height="4" fill="#E8C9A0"/>
    <rect x="5" y="11" width="2" height="4" fill="#222"/><rect x="9" y="11" width="2" height="4" fill="#222"/></svg>`;},

  // corona da fast food (gialla, generica, niente brand)
  sprCrown(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="2" height="6" fill="#FFD93D"/>
    <rect x="12" y="6" width="2" height="6" fill="#FFD93D"/>
    <rect x="7" y="5" width="2" height="7" fill="#FFD93D"/>
    <polygon points="2,6 4,9 6,5 8,9 10,5 12,9 14,6 14,11 2,11" fill="#FFD93D"/>
    <rect x="2" y="11" width="12" height="2" fill="#E8B92E"/>
    <rect x="7" y="3" width="2" height="2" fill="#F58BB0"/></svg>`;},

  // mystery box
  sprBox(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="12" height="8" fill="#C98AA0"/>
    <rect x="2" y="5" width="12" height="3" fill="#E58BAA"/>
    <rect x="7" y="5" width="2" height="9" fill="#FFD93D"/>
    <rect x="2" y="6" width="12" height="1" fill="#9A4E68"/>
    <rect x="6" y="8" width="4" height="4" fill="#FFE98A"/>
    <text x="8" y="11.5" font-size="4" text-anchor="middle" fill="#9A4E68">?</text></svg>`;},

  // BOOSTER: 67 magico (stella gialla con numero)
  sprMagic67(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <polygon points="8,1 10,6 15,6 11,9 13,15 8,11 3,15 5,9 1,6 6,6" fill="#FFD93D" stroke="#E8B92E" stroke-width="0.5"/>
    <text x="8" y="10.5" font-size="5" text-anchor="middle" fill="#9A4E68" font-family="monospace" font-weight="bold">67</text></svg>`;},

  // BOOSTER: broccoletto mini (richiama la mascotte)
  sprBroccoMini(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="11" width="4" height="4" fill="#4f8a4a"/>
    <rect x="4" y="6" width="8" height="6" fill="#6Fae6a" rx="2"/>
    <circle cx="5" cy="6" r="2.4" fill="#6Fae6a"/><circle cx="8" cy="4.5" r="2.6" fill="#6Fae6a"/>
    <circle cx="11" cy="6" r="2.4" fill="#4f8a4a"/><circle cx="6.5" cy="5" r="1.8" fill="#7dbf78"/>
    <rect x="6" y="8" width="1.4" height="1.4" fill="#1a3a18"/><rect x="9" y="8" width="1.4" height="1.4" fill="#1a3a18"/></svg>`;},

  // letterina (poster a parete): foglio a quadretti con cuore e righe di scrittura
  sprLetter(){return `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="1" width="12" height="14" fill="#fff" stroke="#E58BAA" stroke-width="0.5"/>
    <rect x="3" y="3" width="7" height="1" fill="#C9B0BC"/>
    <rect x="3" y="5" width="9" height="1" fill="#C9B0BC"/>
    <rect x="3" y="7" width="6" height="1" fill="#C9B0BC"/>
    <rect x="3" y="9" width="8" height="1" fill="#C9B0BC"/>
    <rect x="9" y="10" width="4" height="4" fill="#F58BB0"/>
    <rect x="9" y="11" width="1.5" height="1.5" fill="#fff"/><rect x="11" y="11" width="1.5" height="1.5" fill="#fff"/>
    <rect x="9.5" y="12.5" width="3" height="1" fill="#fff"/></svg>`;},

  // finestra: overlay trasparente (tutta l'area resta cliccabile via il div hotspot)
  // con un piccolo sole che luccica come invito a "guardare fuori" -> versione seria
  sprWindow(){return `<svg viewBox="0 0 30 25" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect x="5" y="4" width="4" height="4" fill="#FFD93D"/>
      <rect x="4" y="5" width="6" height="2" fill="#FFD93D"/>
      <rect x="6" y="3" width="2" height="6" fill="#FFD93D"/>
      <rect x="3" y="3" width="1" height="1" fill="#FFE98A"/>
      <rect x="10" y="9" width="1" height="1" fill="#FFE98A"/>
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
    </g>
    <rect x="15" y="17" width="1" height="1" fill="#fff">
      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite"/>
    </rect>
  </svg>`;},
};
