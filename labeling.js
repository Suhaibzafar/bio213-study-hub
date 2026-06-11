/* ============================================================
   BIO 213 Study Hub — Diagrams & Labeling
   Image-labeling self-test for the final.
   Why this exists: the professor's exam reportedly includes
   "label the diagram" / "which phase is this" image questions.
   Every diagram below is hand-drawn inline SVG (no external
   images, so it always loads), with numbered markers keyed to
   the parts students are asked to identify. Built around the
   exact points Dr. Babu stressed (H-bonds, 5'/3', transcription
   vs translation, 5' cap / poly-A tail / introns / splicing,
   interphase & G0, sister chromatids separating in anaphase).
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------- shared SVG helpers ---------- */
  // numbered marker disc
  const MK = (x, y, n) =>
    `<circle cx="${x}" cy="${y}" r="13" fill="#184f3b" stroke="#fff" stroke-width="2.5"/>` +
    `<text x="${x}" y="${y}" text-anchor="middle" dy=".35em" font-size="14" font-weight="700" fill="#fff" font-family="sans-serif">${n}</text>`;
  // leader line from a feature (fx,fy) to a marker placed at (mx,my)
  const LM = (fx, fy, mx, my, n) =>
    `<line x1="${fx}" y1="${fy}" x2="${mx}" y2="${my}" stroke="#184f3b" stroke-width="1.4"/>` + MK(mx, my, n);
  const wrap = (vb, inner) =>
    `<svg viewBox="${vb}" role="img" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  function pent(cx, cy, r, fill, stroke) {
    let pts = "";
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
      pts += `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)} `;
    }
    return `<polygon points="${pts.trim()}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
  }
  // chromosome glyphs (used by Ch.8/9 diagrams and the phase quiz)
  function dupChrom(cx, cy, c, h = 17) {
    // duplicated chromosome: two sister chromatids joined at a centromere
    const d = (sx) =>
      `<path d="M ${cx + sx} ${cy - h} q ${sx > 0 ? 6 : -6} ${h} 0 ${2 * h}" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`;
    return d(-5) + d(5) + `<circle cx="${cx}" cy="${cy}" r="3.4" fill="#22262b"/>`;
  }
  function singleChrom(cx, cy, c, h = 17) {
    // one chromatid (post-separation)
    return `<path d="M ${cx} ${cy - h} q 6 ${h} 0 ${2 * h}" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>` +
      `<circle cx="${cx + 1.5}" cy="${cy}" r="3" fill="#22262b"/>`;
  }
  const GREEN = "#1f6b4f", GOLD = "#9a6b1e", GREEN2 = "#4ea27a", GOLD2 = "#c0903f";

  /* ============================================================
     LABELING DIAGRAMS
     Each: {ch, title, sub, svg, parts:[{label, blurb}, ...]}
     parts are listed in marker order (1..n).
     ============================================================ */
  const DIAGRAMS = [];

  /* ---- 7A · DNA double helix ---- */
  (function () {
    const L = 210, R = 310, mid = 260, top = 60, bot = 340;
    const ys = [80, 140, 200, 260, 320];
    const lefts = ["A", "T", "G", "C", "A"], comp = { A: "T", T: "A", G: "C", C: "G" };
    const col = { A: "#d98a3a", T: "#3f7fc4", G: "#2f8f5f", C: "#b25ab0" };
    let art = "";
    // rails
    art += `<line x1="${L}" y1="${top}" x2="${L}" y2="${bot}" stroke="#1f6b4f" stroke-width="7" stroke-linecap="round"/>`;
    art += `<line x1="${R}" y1="${top}" x2="${R}" y2="${bot}" stroke="#1f6b4f" stroke-width="7" stroke-linecap="round"/>`;
    // phosphates (between rungs)
    [110, 170, 230, 290].forEach((y) => {
      art += `<circle cx="${L}" cy="${y}" r="5" fill="#9a6b1e"/><circle cx="${R}" cy="${y}" r="5" fill="#9a6b1e"/>`;
    });
    // rungs: sugar pentagons + base blocks + H-bonds
    ys.forEach((y, i) => {
      const lb = lefts[i], rb = comp[lb];
      art += pent(L, y, 7, "#eaf1ec", "#1f6b4f") + pent(R, y, 7, "#eaf1ec", "#1f6b4f");
      art += `<rect x="${L + 12}" y="${y - 9}" width="${mid - 14 - (L + 12)}" height="18" rx="3" fill="${col[lb]}"/>`;
      art += `<rect x="${mid + 14}" y="${y - 9}" width="${R - 12 - (mid + 14)}" height="18" rx="3" fill="${col[rb]}"/>`;
      art += `<text x="${(L + 12 + mid - 14) / 2}" y="${y}" dy=".34em" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">${lb}</text>`;
      art += `<text x="${(mid + 14 + R - 12) / 2}" y="${y}" dy=".34em" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">${rb}</text>`;
      art += `<line x1="${mid - 13}" y1="${y}" x2="${mid + 13}" y2="${y}" stroke="#6b7178" stroke-width="2" stroke-dasharray="2 3"/>`;
    });
    // markers
    art += LM(L, 200, 150, 200, 1);          // backbone
    art += LM(L, 80, 150, 90, 2);            // sugar
    art += LM(L, 290, 150, 300, 3);          // phosphate
    art += LM(mid + 28, 140, 372, 130, 4);   // nitrogenous base (right block, rung 2)
    art += LM(mid, 260, 372, 270, 5);        // hydrogen bonds (rung 4)
    DIAGRAMS.push({
      ch: 7, title: "DNA double helix", sub: "The “twisted ladder” — backbone, bases, and what holds the strands together.",
      svg: wrap("0 0 520 400", art),
      parts: [
        { label: "Sugar–phosphate backbone", blurb: "The two side rails; alternating deoxyribose sugar + phosphate, joined by covalent bonds." },
        { label: "Deoxyribose (sugar)", blurb: "The 5-carbon sugar in each backbone unit (the pentagon)." },
        { label: "Phosphate group", blurb: "Links sugars along the backbone (the gold circle)." },
        { label: "Nitrogenous base", blurb: "A, T, G, or C — the colored rungs. A pairs with T, G pairs with C." },
        { label: "Hydrogen bonds", blurb: "Weak bonds between paired bases that hold the two strands together. (Professor point!)" }
      ]
    });
  })();

  /* ---- 7B · DNA nucleotide ---- */
  (function () {
    let art = "";
    art += `<line x1="118" y1="130" x2="172" y2="130" stroke="#6b7178" stroke-width="3"/>`;
    art += `<line x1="234" y1="130" x2="286" y2="130" stroke="#6b7178" stroke-width="3"/>`;
    art += `<circle cx="90" cy="130" r="30" fill="#9a6b1e"/><text x="90" y="130" dy=".34em" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" font-family="sans-serif">P</text>`;
    art += pent(200, 130, 36, "#eaf1ec", "#1f6b4f");
    art += `<text x="200" y="130" dy=".34em" text-anchor="middle" font-size="13" font-weight="600" fill="#1f6b4f" font-family="sans-serif">sugar</text>`;
    art += `<rect x="300" y="98" width="92" height="64" rx="8" fill="#3f7fc4"/><text x="346" y="130" dy=".34em" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="sans-serif">base</text>`;
    art += LM(90, 100, 90, 58, 1);
    art += LM(200, 166, 200, 212, 2);
    art += LM(346, 98, 346, 56, 3);
    DIAGRAMS.push({
      ch: 7, title: "A nucleotide", sub: "The building block of DNA & RNA. Three pieces — name each one.",
      svg: wrap("0 0 460 250", art),
      parts: [
        { label: "Phosphate group", blurb: "One of three parts of a nucleotide; forms the backbone with the sugar." },
        { label: "Deoxyribose (sugar)", blurb: "The 5-carbon sugar. In RNA this is ribose instead." },
        { label: "Nitrogenous base", blurb: "A/T/G/C in DNA (U replaces T in RNA). Carries the genetic 'letter'." }
      ]
    });
  })();

  /* ---- 7C · Central dogma ---- */
  (function () {
    let art = "";
    const box = (x, w, fill) => `<rect x="${x}" y="62" width="${w}" height="74" rx="9" fill="${fill}" stroke="#d6d0c2"/>`;
    const arrow = (x1, x2) => `<line x1="${x1}" y1="99" x2="${x2 - 8}" y2="99" stroke="#184f3b" stroke-width="3"/><path d="M ${x2 - 12} 93 L ${x2} 99 L ${x2 - 12} 105 Z" fill="#184f3b"/>`;
    art += box(30, 110, "#e9f1ec");
    // mini helix
    art += `<path d="M55 76 q30 23 0 46 M115 76 q-30 23 0 46" stroke="#1f6b4f" stroke-width="3" fill="none"/>`;
    for (let i = 0; i < 4; i++) art += `<line x1="${60 + i * 4}" y1="${82 + i * 9}" x2="${110 - i * 4}" y2="${82 + i * 9}" stroke="#9a6b1e" stroke-width="2.5"/>`;
    art += arrow(140, 230);
    art += box(232, 96, "#fbf3e4");
    art += `<path d="M248 99 q12 -14 24 0 t24 0" stroke="#9a6b1e" stroke-width="3" fill="none"/>`;
    art += arrow(330, 420);
    art += box(422, 110, "#eef2f6");
    for (let i = 0; i < 4; i++) art += `<circle cx="${445 + i * 16}" cy="${99 - (i % 2 ? 8 : 0)}" r="7" fill="#3f7fc4"/>`;
    art += LM(85, 136, 85, 178, 1);
    art += LM(185, 80, 185, 30, 2);
    art += LM(280, 136, 280, 178, 3);
    art += LM(375, 80, 375, 30, 4);
    art += LM(477, 136, 477, 178, 5);
    DIAGRAMS.push({
      ch: 7, title: "The central dogma", sub: "How information flows. Name each molecule and each step.",
      svg: wrap("0 0 562 210", art),
      parts: [
        { label: "DNA", blurb: "The stored master copy of the information." },
        { label: "Transcription", blurb: "DNA → RNA. (Professor: transcription makes RNA.)" },
        { label: "mRNA (messenger RNA)", blurb: "The working copy carried to the ribosome." },
        { label: "Translation", blurb: "RNA → protein. (Professor: translation makes protein.)" },
        { label: "Protein (polypeptide)", blurb: "Chain of amino acids — the final product that does the work." }
      ]
    });
  })();

  /* ---- 7D · mRNA processing ---- */
  (function () {
    let art = "";
    const y = 70;
    // pre-mRNA
    art += `<circle cx="44" cy="${y}" r="13" fill="#9a6b1e"/><text x="44" y="${y}" dy=".34em" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" font-family="sans-serif">cap</text>`;
    const seg = (x, w, fill) => `<rect x="${x}" y="${y - 11}" width="${w}" height="22" rx="3" fill="${fill}"/>`;
    art += seg(58, 80, "#2f8f5f");   // exon1
    art += seg(138, 64, "#c9c2b0"); // intron1 (grey)
    art += seg(202, 80, "#2f8f5f");  // exon2
    art += seg(282, 64, "#c9c2b0");  // intron2
    art += seg(346, 84, "#2f8f5f");  // exon3
    // poly-A tail
    art += `<path d="M430 ${y} q12 -10 24 0 t24 0 t24 0" stroke="#d98a3a" stroke-width="4" fill="none"/><text x="466" y="${y - 16}" text-anchor="middle" font-size="11" font-weight="700" fill="#d98a3a" font-family="sans-serif">AAAA</text>`;
    // splicing arrow
    art += `<line x1="260" y1="116" x2="260" y2="150" stroke="#184f3b" stroke-width="3"/><path d="M254 146 L260 158 L266 146 Z" fill="#184f3b"/>`;
    art += `<text x="276" y="140" font-size="12" fill="#6b7178" font-family="sans-serif" font-style="italic">splicing</text>`;
    // mature mRNA
    const y2 = 188;
    art += `<circle cx="120" cy="${y2}" r="11" fill="#9a6b1e"/>`;
    art += `<rect x="133" y="${y2 - 10}" width="220" height="20" rx="3" fill="#2f8f5f"/>`;
    art += `<path d="M353 ${y2} q11 -9 22 0 t22 0" stroke="#d98a3a" stroke-width="4" fill="none"/>`;
    art += `<text x="240" y="${y2 + 4}" dy=".34em" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">exons joined</text>`;
    // markers
    art += LM(44, 57, 44, 26, 1);            // 5' cap
    art += LM(242, 81, 300, 26, 2);          // exon (exon2)
    art += LM(170, 81, 120, 26, 3);          // intron (intron1)
    art += LM(478, 64, 520, 40, 4);          // poly-A tail
    art += LM(260, 150, 360, 132, 5);        // splicing / spliceosome
    DIAGRAMS.push({
      ch: 7, title: "mRNA processing", sub: "Turning pre-mRNA into mature mRNA. (Heavily stressed in class.)",
      svg: wrap("0 0 560 232", art),
      parts: [
        { label: "5′ cap", blurb: "A protective cap added to the front (5′) end of the mRNA." },
        { label: "Exon (kept)", blurb: "Coding pieces that stay in the final mRNA. EXons are EXpressed." },
        { label: "Intron (removed)", blurb: "Non-coding pieces cut out before the mRNA leaves the nucleus." },
        { label: "Poly-A tail", blurb: "A string of A's added to the 3′ end for stability." },
        { label: "Splicing (spliceosome)", blurb: "The spliceosome removes introns and joins exons. (Professor point!)" }
      ]
    });
  })();

  /* ---- 7E · Translation at the ribosome ---- */
  (function () {
    let art = "";
    // mRNA strand with codons
    const my = 196;
    art += `<rect x="40" y="${my - 6}" width="480" height="12" rx="6" fill="#c9c2b0"/>`;
    for (let i = 0; i < 8; i++) {
      const x = 60 + i * 58;
      art += `<rect x="${x}" y="${my - 6}" width="54" height="12" rx="2" fill="${i % 2 ? "#b9b09a" : "#a89f88"}"/>`;
    }
    // ribosome subunits
    art += `<ellipse cx="300" cy="${my + 34}" rx="120" ry="44" fill="#cdb89a" stroke="#9a6b1e"/>`; // large
    art += `<ellipse cx="300" cy="${my - 18}" rx="118" ry="34" fill="#e0cdae" stroke="#9a6b1e"/>`; // small
    // tRNAs (triangles) in P and A sites
    const trna = (cx, c) =>
      `<path d="M ${cx - 22} ${my - 6} L ${cx + 22} ${my - 6} L ${cx} ${my - 70} Z" fill="${c}" stroke="#184f3b"/>` +
      `<rect x="${cx - 16}" y="${my - 8}" width="32" height="10" rx="2" fill="#3f7fc4"/>`; // anticodon bar
    art += trna(272, "#e9f1ec");
    art += trna(330, "#e9f1ec");
    // amino acids on top (polypeptide)
    art += `<circle cx="272" cy="${my - 78}" r="10" fill="#3f7fc4"/>`;
    art += `<circle cx="252" cy="${my - 96}" r="10" fill="#2f8f5f"/>`;
    art += `<circle cx="228" cy="${my - 104}" r="10" fill="#b25ab0"/>`;
    art += `<circle cx="330" cy="${my - 86}" r="10" fill="#d98a3a"/>`;
    art += `<line x1="272" y1="${my - 78}" x2="252" y2="${my - 96}" stroke="#6b7178" stroke-width="3"/><line x1="252" y1="${my - 96}" x2="228" y2="${my - 104}" stroke="#6b7178" stroke-width="3"/>`;
    // markers
    art += LM(300, 240, 300, 280, 1);        // ribosome
    art += LM(110, 196, 70, 250, 2);         // mRNA
    art += LM(118, 190, 70, 150, 3);         // codon (a triplet)
    art += LM(330, 150, 470, 110, 4);        // tRNA
    art += LM(330, 192, 470, 196, 5);        // anticodon
    art += LM(228, 104, 150, 70, 6);         // amino acid / polypeptide
    DIAGRAMS.push({
      ch: 7, title: "Translation (the ribosome)", sub: "Reading mRNA to build a protein. Match each part.",
      svg: wrap("0 0 560 300", art),
      parts: [
        { label: "Ribosome (subunits)", blurb: "Large + small subunits; reads mRNA and links amino acids. Made of rRNA + protein." },
        { label: "mRNA", blurb: "The message being read, 5′→3′, three bases at a time." },
        { label: "Codon", blurb: "A 3-base 'word' on the mRNA that specifies one amino acid." },
        { label: "tRNA (transfer RNA)", blurb: "Brings the matching amino acid to the ribosome." },
        { label: "Anticodon", blurb: "The 3 bases on tRNA that pair with the mRNA codon." },
        { label: "Amino acid (polypeptide)", blurb: "The growing protein chain coming off the ribosome." }
      ]
    });
  })();

  /* ---- 8A · The cell cycle ---- */
  (function () {
    const cx = 210, cy = 210, rO = 150, rI = 92;
    const polar = (r, deg) => {
      const a = ((deg - 90) * Math.PI) / 180;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    };
    const ann = (a0, a1, fill) => {
      const [xo0, yo0] = polar(rO, a0), [xo1, yo1] = polar(rO, a1);
      const [xi1, yi1] = polar(rI, a1), [xi0, yi0] = polar(rI, a0);
      const laf = a1 - a0 > 180 ? 1 : 0;
      return `<path d="M ${xo0.toFixed(1)} ${yo0.toFixed(1)} A ${rO} ${rO} 0 ${laf} 1 ${xo1.toFixed(1)} ${yo1.toFixed(1)} L ${xi1.toFixed(1)} ${yi1.toFixed(1)} A ${rI} ${rI} 0 ${laf} 0 ${xi0.toFixed(1)} ${yi0.toFixed(1)} Z" fill="${fill}" stroke="#fff" stroke-width="2"/>`;
    };
    const lbl = (deg, t, sub) => {
      const [x, y] = polar((rO + rI) / 2, deg);
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" dy=".34em" text-anchor="middle" font-size="15" font-weight="700" fill="#fff" font-family="sans-serif">${t}</text>` +
        (sub ? `<text x="${x.toFixed(1)}" y="${(y + 16).toFixed(1)}" text-anchor="middle" font-size="9" fill="#eaf1ec" font-family="sans-serif">${sub}</text>` : "");
    };
    let art = "";
    art += ann(2, 110, "#8fc6a8");   // G1
    art += ann(112, 200, "#4ea27a"); // S
    art += ann(202, 298, "#2f7d59"); // G2
    art += ann(300, 358, "#c79a4a"); // M
    art += lbl(56, "G₁", "");
    art += lbl(156, "S", "");
    art += lbl(250, "G₂", "");
    art += lbl(329, "M", "");
    art += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="11" letter-spacing="1" fill="#6b7178" font-family="sans-serif">CELL</text>`;
    art += `<text x="${cx}" y="${cy + 10}" text-anchor="middle" font-size="11" letter-spacing="1" fill="#6b7178" font-family="sans-serif">CYCLE</text>`;
    // interphase outer bracket (G1->G2)
    const [bx0, by0] = polar(rO + 12, 4), [bx1, by1] = polar(rO + 12, 296);
    art += `<path d="M ${bx0.toFixed(1)} ${by0.toFixed(1)} A ${rO + 12} ${rO + 12} 0 1 1 ${bx1.toFixed(1)} ${by1.toFixed(1)}" fill="none" stroke="#1f6b4f" stroke-width="2.5"/>`;
    // G0 node (cells exit from G1)
    const [gx, gy] = polar(rO, 108);
    art += `<line x1="${gx.toFixed(1)}" y1="${gy.toFixed(1)}" x2="398" y2="300" stroke="#6b7178" stroke-width="2" stroke-dasharray="4 3"/>`;
    art += `<circle cx="420" cy="300" r="22" fill="#f4f1ea" stroke="#6b7178"/><text x="420" y="300" dy=".34em" text-anchor="middle" font-size="14" font-weight="700" fill="#6b7178" font-family="sans-serif">G₀</text>`;
    // markers (feature on the ring edge -> marker placed in the nearest margin)
    const m = (deg, mx, my, n) => { const [fx, fy] = polar(rO, deg); return LM(+fx.toFixed(1), +fy.toFixed(1), mx, my, n); };
    art += m(56, 415, 95, 1);    // G1
    art += m(156, 300, 398, 2);  // S
    art += m(250, 40, 300, 3);   // G2
    art += m(329, 110, 40, 4);   // M
    art += LM(bx1, by1, 38, 150, 5);   // interphase bracket end
    art += LM(420, 322, 420, 360, 6);  // G0
    DIAGRAMS.push({
      ch: 8, title: "The cell cycle", sub: "Name each phase. Which part is longest? What is G₀?",
      svg: wrap("0 0 460 420", art),
      parts: [
        { label: "G₁ phase", blurb: "First growth phase — cell grows and does its normal job." },
        { label: "S phase", blurb: "DNA synthesis — the chromosomes are copied here." },
        { label: "G₂ phase", blurb: "Second growth phase — final prep for division." },
        { label: "M phase (mitosis)", blurb: "Mitosis + cytokinesis — the actual division." },
        { label: "Interphase (longest)", blurb: "G₁ + S + G₂. The longest part of the cell cycle. (Professor point!)" },
        { label: "G₀ (resting)", blurb: "Cells that exit the cycle and don't divide — but they are NOT dead. (Professor point!)" }
      ]
    });
  })();

  /* ---- 8B · DNA replication fork ---- */
  (function () {
    let art = "";
    const fx = 300, fy = 160;
    // parental double strand (right)
    art += `<line x1="520" y1="146" x2="${fx}" y2="146" stroke="#6b7178" stroke-width="4"/>`;
    art += `<line x1="520" y1="174" x2="${fx}" y2="174" stroke="#6b7178" stroke-width="4"/>`;
    for (let x = 320; x < 515; x += 18) art += `<line x1="${x}" y1="150" x2="${x}" y2="170" stroke="#cdc6b6" stroke-width="2"/>`;
    // opened template strands (to the left)
    art += `<path d="M ${fx} 146 Q 200 120 60 96" stroke="#6b7178" stroke-width="4" fill="none"/>`;
    art += `<path d="M ${fx} 174 Q 200 200 60 224" stroke="#6b7178" stroke-width="4" fill="none"/>`;
    // helicase at fork
    art += `<ellipse cx="${fx}" cy="${fy}" rx="20" ry="26" fill="#b25ab0" stroke="#7d3a7d"/>`;
    // leading strand (continuous, top, toward fork)
    art += `<path d="M 70 108 Q 200 132 ${fx - 16} 150" stroke="#1f6b4f" stroke-width="5" fill="none"/>`;
    art += `<ellipse cx="250" cy="139" rx="16" ry="13" fill="#2f8f5f" stroke="#184f3b"/>`; // polymerase
    // lagging strand (Okazaki fragments, bottom)
    const frag = [[80, 214], [150, 202], [220, 190]];
    frag.forEach((f, i) => {
      art += `<path d="M ${f[0]} ${f[1]} q 30 -6 56 -12" stroke="#d98a3a" stroke-width="5" fill="none"/>`;
    });
    art += `<ellipse cx="250" cy="182" rx="16" ry="13" fill="#2f8f5f" stroke="#184f3b"/>`; // polymerase 2
    // markers
    art += LM(fx, fy + 24, 300, 250, 1);     // helicase
    art += LM(200, 130, 120, 60, 2);         // leading strand
    art += LM(170, 199, 110, 250, 3);        // lagging strand
    art += LM(120, 207, 40, 250, 4);         // Okazaki fragment
    art += LM(250, 139, 250, 60, 5);         // DNA polymerase
    art += LM(500, 160, 530, 110, 6);        // parental DNA
    DIAGRAMS.push({
      ch: 8, title: "DNA replication fork", sub: "Copying DNA. Leading vs lagging — label the players.",
      svg: wrap("0 0 560 270", art),
      parts: [
        { label: "Helicase", blurb: "Unzips the double helix at the fork by breaking hydrogen bonds." },
        { label: "Leading strand", blurb: "Built continuously toward the fork (one smooth piece)." },
        { label: "Lagging strand", blurb: "Built away from the fork in short pieces." },
        { label: "Okazaki fragment", blurb: "One of the short pieces of the lagging strand (later joined by ligase)." },
        { label: "DNA polymerase", blurb: "Adds new nucleotides, building the new strand 5′→3′." },
        { label: "Parental (template) strand", blurb: "The original strand being read as the pattern." }
      ]
    });
  })();

  /* ---- 8C · Duplicated chromosome ---- */
  (function () {
    let art = "";
    const cx = 160, cy = 150;
    // two sister chromatids joined at centromere
    art += `<path d="M ${cx - 20} 70 q -16 80 0 160" stroke="#1f6b4f" stroke-width="13" fill="none" stroke-linecap="round"/>`;
    art += `<path d="M ${cx + 20} 70 q 16 80 0 160" stroke="#1f6b4f" stroke-width="13" fill="none" stroke-linecap="round"/>`;
    art += `<path d="M ${cx - 12} 150 q 12 -10 24 0" stroke="#fff" stroke-width="3" fill="none"/>`;
    art += `<circle cx="${cx}" cy="${cy}" r="6" fill="#22262b"/>`;
    art += LM(cx - 22, 110, 60, 80, 1);      // sister chromatid (one)
    art += LM(cx + 6, 150, 270, 150, 2);     // centromere
    art += LM(cx, 232, 160, 280, 3);         // whole = duplicated chromosome
    DIAGRAMS.push({
      ch: 8, title: "A duplicated chromosome", sub: "After S phase. Name the parts (key for anaphase!).",
      svg: wrap("0 0 320 300", art),
      parts: [
        { label: "Sister chromatid", blurb: "One of the two identical copies made during S phase." },
        { label: "Centromere", blurb: "The pinched region where the two sister chromatids are held together." },
        { label: "Duplicated chromosome", blurb: "The whole structure = 2 sister chromatids joined at the centromere." }
      ]
    });
  })();

  /* ---- 9A · Crossing over (homologous pair / tetrad) ---- */
  (function () {
    let art = "";
    // left homolog (green, 2 chromatids), right homolog (gold, 2 chromatids)
    const bar = (x, c) => `<path d="M ${x} 60 q ${c === GREEN ? -8 : 8} 95 0 190" stroke="${c}" stroke-width="11" fill="none" stroke-linecap="round"/>`;
    art += bar(150, GREEN) + bar(176, GREEN);
    art += bar(284, GOLD) + bar(310, GOLD);
    // centromeres
    art += `<circle cx="163" cy="150" r="5" fill="#22262b"/><circle cx="297" cy="150" r="5" fill="#22262b"/>`;
    // chiasma: inner green chromatid crosses to inner gold around y=150
    art += `<path d="M 176 130 Q 230 150 284 170" stroke="#1f6b4f" stroke-width="11" fill="none" stroke-linecap="round"/>`;
    art += `<path d="M 284 130 Q 230 150 176 170" stroke="#9a6b1e" stroke-width="11" fill="none" stroke-linecap="round"/>`;
    // markers
    art += LM(150, 90, 70, 70, 1);           // homologous chromosomes
    art += LM(297, 110, 410, 90, 2);         // sister chromatids (gold homolog)
    art += LM(230, 150, 230, 290, 3);        // tetrad / bivalent
    art += LM(230, 158, 410, 200, 4);        // chiasma (crossing over)
    DIAGRAMS.push({
      ch: 9, title: "Crossing over (a tetrad)", sub: "Prophase I: homologs pair and swap pieces. Label them.",
      svg: wrap("0 0 460 310", art),
      parts: [
        { label: "Homologous chromosomes", blurb: "A matching pair — same genes, one from each parent (here: green + gold)." },
        { label: "Sister chromatids", blurb: "The two identical copies that make up ONE chromosome." },
        { label: "Tetrad (bivalent)", blurb: "The paired homologs = 4 chromatids together. Forms in prophase I." },
        { label: "Chiasma (crossing over)", blurb: "Where homologs swap segments — the source of genetic variation." }
      ]
    });
  })();

  /* ============================================================
     PHASE-ID QUIZ  (reuses the global createQuiz engine)
     Each cell scene is schematic: 2n = 2 (one green + one gold
     homolog) so the mitosis/meiosis distinctions are visible.
     ============================================================ */
  function cell(inner, w = 360, h = 300) {
    return wrap(`0 0 ${w} ${h}`,
      `<ellipse cx="${w / 2}" cy="${h / 2}" rx="${w / 2 - 14}" ry="${h / 2 - 14}" fill="#faf8f3" stroke="#d6d0c2" stroke-width="2"/>` + inner);
  }
  function spindle(w, h, vertical) {
    // poles left & right; faint fibers to the metaphase plate
    let s = `<circle cx="20" cy="${h / 2}" r="5" fill="#6b7178"/><circle cx="${w - 20}" cy="${h / 2}" r="5" fill="#6b7178"/>`;
    for (let i = -1; i <= 1; i++) {
      s += `<line x1="22" y1="${h / 2}" x2="${w / 2}" y2="${h / 2 + i * 40}" stroke="#e0d8c6" stroke-width="1.5"/>`;
      s += `<line x1="${w - 22}" y1="${h / 2}" x2="${w / 2}" y2="${h / 2 + i * 40}" stroke="#e0d8c6" stroke-width="1.5"/>`;
    }
    return s;
  }
  const W = 360, H = 300, CX = W / 2, CY = H / 2;

  const PHASE_Q = [
    {
      q: cell(
        // prophase: condensed dup chromosomes, fragmenting envelope
        `<circle cx="${CX}" cy="${CY}" r="96" fill="none" stroke="#b9b09a" stroke-width="2" stroke-dasharray="7 7"/>` +
        dupChrom(CX - 34, CY - 18, GREEN) + dupChrom(CX + 30, CY + 24, GOLD)),
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase", "S phase"],
      answer: 0,
      explain: "Chromosomes have condensed into visible duplicated chromosomes and the nuclear envelope is breaking apart, but they haven't lined up yet — that's <b>prophase</b>."
    },
    {
      q: cell(spindle(W, H) +
        dupChrom(CX, CY - 44, GREEN) + dupChrom(CX, CY + 44, GOLD)),
      options: ["Metaphase (mitosis)", "Anaphase (mitosis)", "Metaphase I", "Prophase", "Telophase"],
      answer: 0,
      explain: "Duplicated chromosomes are lined up <b>single file</b> on the metaphase plate (each chromosome alone, not paired) — <b>metaphase of mitosis</b>."
    },
    {
      q: cell(spindle(W, H) +
        singleChrom(70, CY - 30, GREEN) + singleChrom(86, CY + 18, GREEN) +
        singleChrom(W - 70, CY - 30, GOLD) + singleChrom(W - 86, CY + 18, GOLD)),
      options: ["Anaphase (mitosis)", "Metaphase (mitosis)", "Anaphase I", "Prophase", "Telophase"],
      answer: 0,
      explain: "<b>Sister chromatids have split</b> and single chromatids are moving to opposite poles — <b>anaphase of mitosis</b>. (Professor: sister chromatids separate in anaphase.)"
    },
    {
      q: cell(spindle(W, H) +
        // metaphase I: homologs PAIRED at the plate (tetrads)
        dupChrom(CX - 13, CY - 44, GREEN) + dupChrom(CX + 13, CY - 44, GOLD) +
        dupChrom(CX - 13, CY + 44, GREEN2) + dupChrom(CX + 13, CY + 44, GOLD2)),
      options: ["Metaphase I", "Metaphase (mitosis)", "Anaphase I", "Prophase", "Metaphase II"],
      answer: 0,
      explain: "Homologous chromosomes are lined up as <b>pairs (tetrads)</b> at the plate — that pairing only happens in meiosis, so this is <b>metaphase I</b>."
    },
    {
      q: cell(spindle(W, H) +
        // anaphase I: whole dup chromosomes (still 2 chromatids) go to poles
        dupChrom(78, CY - 22, GREEN) + dupChrom(94, CY + 26, GREEN2) +
        dupChrom(W - 78, CY - 22, GOLD) + dupChrom(W - 94, CY + 26, GOLD2)),
      options: ["Anaphase I", "Anaphase (mitosis)", "Anaphase II", "Metaphase I", "Telophase"],
      answer: 0,
      explain: "Whole chromosomes are moving to the poles but <b>each still has two sister chromatids</b> (still X-shaped). Homologs separated, chromatids did not — <b>anaphase I</b>."
    },
    {
      q: cell(spindle(W, H) +
        // anaphase II: sister chromatids separate (single chromatids to poles), smaller/haploid
        singleChrom(80, CY, GREEN) + singleChrom(W - 80, CY, GREEN), 360, 220),
      options: ["Anaphase II", "Anaphase I", "Anaphase (mitosis)", "Metaphase II", "Prophase II"],
      answer: 0,
      explain: "<b>Single chromatids</b> separating to the poles in a haploid cell (no homolog partner present) — <b>anaphase II</b>. (Professor: sister chromatids separate in anaphase II.)"
    },
    {
      q: cell(
        // telophase: two clusters + cleavage furrow
        `<line x1="${CX}" y1="20" x2="${CX}" y2="46" stroke="#d6d0c2" stroke-width="3"/><line x1="${CX}" y1="${H - 20}" x2="${CX}" y2="${H - 46}" stroke="#d6d0c2" stroke-width="3"/>` +
        `<ellipse cx="${CX - 64}" cy="${CY}" rx="40" ry="56" fill="none" stroke="#b9b09a" stroke-width="2"/>` +
        `<ellipse cx="${CX + 64}" cy="${CY}" rx="40" ry="56" fill="none" stroke="#b9b09a" stroke-width="2"/>` +
        singleChrom(CX - 64, CY, GREEN) + singleChrom(CX + 64, CY, GOLD)),
      options: ["Telophase", "Anaphase", "Metaphase", "Prophase", "G₁ phase"],
      answer: 0,
      explain: "Two new nuclear envelopes are reforming around the chromosomes at each pole and the cell is pinching in (cleavage furrow) — <b>telophase</b> (followed by cytokinesis)."
    }
  ];

  /* ============================================================
     RENDER
     ============================================================ */
  const host = $("#labelingApp");
  if (!host) return;

  host.innerHTML = `
    <p class="dgm-lead">Heard the final has <strong>image / labeling</strong> questions? This is built for exactly that. Drop the right label on each numbered marker, then check yourself — or run the <strong>Identify-the-Phase</strong> challenge. Everything here is keyed to the parts Dr.&nbsp;Babu stressed.</p>

    <div class="phase-launch">
      <div>
        <h3>Identify the Phase</h3>
        <p>A picture of a dividing cell appears — you pick the phase. Covers mitosis <em>and</em> the meiosis I vs II distinction (the classic trap: what separates in anaphase I vs anaphase II).</p>
      </div>
      <button class="btn-primary" id="startPhaseBtn">Start Phase ID (${PHASE_Q.length} images)</button>
    </div>
    <div id="phaseRunner" class="quiz-runner hidden" style="margin-top:18px"></div>

    <h3 class="dgm-h">Label the diagrams</h3>
    <div class="chapter-switch" id="dgmSwitch">
      <button class="chip active" data-ch="all">All</button>
      <button class="chip" data-ch="7">Ch. 7</button>
      <button class="chip" data-ch="8">Ch. 8</button>
      <button class="chip" data-ch="9">Ch. 9</button>
    </div>
    <div id="dgmList"></div>`;

  function renderDiagram(d, idx) {
    const bank = shuffle(d.parts.map((p) => p.label));
    const rows = d.parts
      .map((p, i) => {
        const opts = ['<option value="">— choose —</option>']
          .concat(bank.map((b) => `<option value="${b}">${b}</option>`))
          .join("");
        return `<div class="label-row" data-correct="${encodeURIComponent(p.label)}">
            <span class="num">${i + 1}</span>
            <select aria-label="Label ${i + 1}">${opts}</select>
            <span class="verdict"></span>
          </div>`;
      })
      .join("");
    return `<div class="diagram-card" data-idx="${idx}" data-ch="${d.ch}">
        <div class="dgm-head"><span class="q-tag">Ch. ${d.ch}</span><h3>${d.title}</h3><p>${d.sub}</p></div>
        <div class="dgm-body">
          <div class="dgm-figure">${d.svg}</div>
          <div class="dgm-labels">
            ${rows}
            <div class="dgm-actions">
              <button class="btn-primary dgm-check">Check</button>
              <button class="btn-ghost dgm-reveal">Reveal</button>
              <button class="btn-ghost dgm-reset">Reset</button>
            </div>
            <div class="dgm-score"></div>
            <div class="dgm-blurbs"></div>
          </div>
        </div>
      </div>`;
  }

  function paint(filter) {
    const list = $("#dgmList");
    const items = DIAGRAMS.map((d, i) => [d, i]).filter(([d]) => filter === "all" || String(d.ch) === filter);
    list.innerHTML = items.map(([d, i]) => renderDiagram(d, i)).join("");
    $$(".diagram-card", list).forEach((card) => wireCard(card));
  }

  function wireCard(card) {
    const idx = +card.dataset.idx;
    const d = DIAGRAMS[idx];
    const rows = $$(".label-row", card);
    const grade = (showAll) => {
      let correct = 0;
      const blurbs = [];
      rows.forEach((row, i) => {
        const want = decodeURIComponent(row.dataset.correct);
        const sel = $("select", row);
        if (showAll) sel.value = want;
        const got = sel.value;
        row.classList.remove("correct", "wrong");
        const v = $(".verdict", row);
        if (got === want) {
          row.classList.add("correct");
          v.textContent = "✓";
          correct++;
          blurbs.push(`<li><b>${want}</b> — ${d.parts[i].blurb}</li>`);
        } else {
          row.classList.add("wrong");
          v.textContent = got ? "✗" : "";
          blurbs.push(`<li><b>${want}</b> — ${d.parts[i].blurb}</li>`);
        }
      });
      const sc = $(".dgm-score", card);
      const pct = Math.round((correct / rows.length) * 100);
      sc.textContent = `${correct} / ${rows.length} correct${showAll ? " (revealed)" : ""}`;
      sc.style.color = correct === rows.length ? "var(--correct)" : pct >= 50 ? "var(--gold)" : "var(--wrong)";
      $(".dgm-blurbs", card).innerHTML = `<ul>${blurbs.join("")}</ul>`;
    };
    $(".dgm-check", card).addEventListener("click", () => grade(false));
    $(".dgm-reveal", card).addEventListener("click", () => grade(true));
    $(".dgm-reset", card).addEventListener("click", () => {
      rows.forEach((row) => {
        $("select", row).value = "";
        row.classList.remove("correct", "wrong");
        $(".verdict", row).textContent = "";
      });
      $(".dgm-score", card).textContent = "";
      $(".dgm-blurbs", card).innerHTML = "";
    });
  }

  // chapter chips
  $$("#dgmSwitch .chip").forEach((chip) =>
    chip.addEventListener("click", () => {
      $$("#dgmSwitch .chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      paint(chip.dataset.ch);
    })
  );

  // phase quiz (reuse global createQuiz)
  $("#startPhaseBtn").addEventListener("click", () => {
    $(".phase-launch").classList.add("hidden");
    createQuiz($("#phaseRunner"), PHASE_Q, {
      title: "Identify the Phase",
      onExit: () => $(".phase-launch").classList.remove("hidden")
    });
  });

  paint("all");
})();
