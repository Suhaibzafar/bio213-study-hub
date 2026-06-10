/* ============================================================
   BIO 213 — Chapters 7-9 study data
   Notes, quiz question banks, and flashcards.
   Source: Hoefnagels, Biology: Concepts & Investigations,
   Ch.7 (DNA Structure & Gene Function), Ch.8 (DNA Replication,
   Binary Fission & Mitosis), Ch.9 (Sexual Reproduction & Meiosis),
   plus the points the professor emphasized in class.
   ============================================================ */

/* ---------------------- NOTES ---------------------- */
const NOTES = {
7: `
<h2 class="note-chtitle">Chapter 7 — DNA Structure &amp; Gene Function</h2>

<div class="note-section">
<h3>7.1 DNA Is a Double Helix</h3>
<p><span class="keyterm">DNA (deoxyribonucleic acid)</span> stores the information a cell needs to build <strong>proteins</strong>. Proteins do most of the work of the cell (enzymes speed reactions, hemoglobin carries oxygen, etc.), so the instructions in DNA make life possible.</p>
<p><strong>How the structure was discovered:</strong> Watson &amp; Crick (1953) built the double-helix model using two clues — (1) <strong>Chargaff's rule</strong>: amount of A = amount of T, and amount of G = amount of C; and (2) the <strong>X-ray diffraction</strong> images of Rosalind Franklin &amp; Maurice Wilkins, which showed a regular, repeating helix.</p>
<h4>The "twisted ladder"</h4>
<ul>
<li>The two side rails (the <strong>sugar–phosphate backbones</strong>) are alternating <strong>deoxyribose</strong> sugar and <strong>phosphate</strong>, joined by covalent bonds.</li>
<li>The two strands run in <strong>opposite directions</strong> (antiparallel) — like northbound and southbound lanes.</li>
<li>The rungs are <strong>base pairs</strong>: A–T and C–G, held together by <span class="keyterm">hydrogen bonds</span>.</li>
<li>A pairs with T; G pairs with C. A &amp; G are double-ring (purines); C &amp; T are single-ring (pyrimidines). Each rung = one double-ring + one single-ring base, so every rung is the same width.</li>
<li>The strands are <strong>complementary</strong>: knowing one strand tells you the other (like a photo and its negative).</li>
</ul>
<div class="callout"><b>Professor point:</b> What holds the two strands of DNA together? <strong>Hydrogen bonds.</strong> And DNA is read <strong>5′ → 3′</strong> (start to end).</div>
<h4>Levels of organization (smallest → largest)</h4>
<ul>
<li><span class="keyterm">Nucleotide</span> — building block of DNA/RNA (sugar + phosphate + base).</li>
<li><span class="keyterm">Gene</span> — a DNA sequence that encodes one protein or RNA molecule.</li>
<li><span class="keyterm">Chromosome</span> — one long DNA molecule wrapped around proteins.</li>
<li><span class="keyterm">Genome</span> — all of the genetic material in a cell. (Humans: ~6.4 billion base pairs, 20,000–25,000 genes on 23 pairs of chromosomes; bacteria typically have one circular chromosome.)</li>
</ul>
</div>

<div class="note-section">
<h3>7.2 DNA Stores Genetic Information (Overview) — The Central Dogma</h3>
<p>The <span class="keyterm">central dogma</span> describes the flow of information:</p>
<div class="mnemonic"><b>DNA → (transcription) → RNA → (translation) → Protein</b></div>
<ul>
<li><span class="keyterm">Transcription</span> — a cell "rewrites" a gene's DNA into a complementary <strong>RNA</strong> molecule.</li>
<li><span class="keyterm">Translation</span> — the information in RNA is used to assemble a <strong>protein</strong> (like an interpreter translating one language to another).</li>
</ul>
<div class="callout"><b>Professor point:</b> DNA → RNA is <strong>transcription</strong>. RNA → protein is <strong>translation</strong>.</div>
<h4>DNA vs. RNA</h4>
<table class="note-table">
<tr><th>Feature</th><th>DNA</th><th>RNA</th></tr>
<tr><td>Sugar</td><td>Deoxyribose</td><td>Ribose</td></tr>
<tr><td>Bases</td><td>A, G, C, <strong>T</strong></td><td>A, G, C, <strong>U</strong> (uracil replaces thymine; U pairs with A)</td></tr>
<tr><td>Strands</td><td>Double-stranded</td><td>Usually single-stranded</td></tr>
<tr><td>Can catalyze reactions?</td><td>No</td><td>Yes</td></tr>
</table>
<h4>Three types of RNA (all help make proteins)</h4>
<ul>
<li><span class="keyterm">mRNA (messenger)</span> — carries the protein-coding message; divided into <strong>codons</strong> (a codon = 3 consecutive mRNA bases = one amino acid).</li>
<li><span class="keyterm">tRNA (transfer)</span> — "connector" that brings the correct amino acid to the matching codon (has an anticodon at one end, an amino acid at the other).</li>
<li><span class="keyterm">rRNA (ribosomal)</span> — combines with protein to form the <strong>ribosome</strong>, where translation happens.</li>
</ul>
<div class="callout"><b>Professor point:</b> Know the RNAs: <strong>hnRNA</strong> (heterogeneous nuclear RNA = the unprocessed pre-mRNA in the nucleus, still containing introns), <strong>mRNA, rRNA, tRNA.</strong></div>
</div>

<div class="note-section">
<h3>7.3 Transcription — Building RNA from a DNA Template</h3>
<p>Transcription makes an RNA copy of <strong>one gene</strong>. Only one of the two DNA strands — the <span class="keyterm">template strand</span> — is copied. The enzyme that builds RNA is <span class="keyterm">RNA polymerase</span>.</p>
<h4>Three stages</h4>
<ul>
<li><strong>Initiation:</strong> RNA polymerase binds the <span class="keyterm">promoter</span> (a DNA sequence that signals the gene's start and which strand is the template) and unzips the helix.</li>
<li><strong>Elongation:</strong> RNA polymerase moves along the template, adding complementary RNA nucleotides (remember: A→U in RNA).</li>
<li><strong>Termination:</strong> RNA polymerase reaches the <span class="keyterm">terminator</span> sequence, releases the RNA, and the DNA re-zips.</li>
</ul>
<h4>mRNA processing (in eukaryotes, in the nucleus)</h4>
<p>Before mRNA leaves the nucleus it is modified:</p>
<ul>
<li>A <span class="keyterm">5′ cap</span> is added to one end and a <span class="keyterm">poly-A tail</span> (100–200 adenines) to the other. These help the ribosome attach to the correct end.</li>
<li><span class="keyterm">Introns</span> (non-coding stretches) are cut out; the remaining <span class="keyterm">exons</span> are spliced together (<strong>EXons = EXpressed / EXit the nucleus</strong>).</li>
</ul>
<div class="mnemonic"><b>Professor point — RNA processing:</b> RNA gets a <b>5′ cap</b> and a <b>poly-A tail</b>; <b>introns are removed by splicing</b>, carried out by <b>spliceosomes</b>.</div>
<h4>The Genetic Code</h4>
<ul>
<li>The <span class="keyterm">genetic code</span> is the "dictionary" matching each codon to an amino acid (or a stop signal).</li>
<li><strong>AUG</strong> = start codon (also codes methionine).</li>
<li><strong>UAA, UAG, UGA</strong> = stop codons (no amino acid; signal translation to end).</li>
<li>The code is <strong>redundant</strong>: most amino acids are specified by more than one codon (this is why some mutations are "silent").</li>
</ul>
</div>

<div class="note-section">
<h3>7.4 Translation — Building the Protein</h3>
<p>Translation assembles a chain of amino acids using the mRNA message. It happens at the <strong>ribosome</strong> and needs three players: <strong>mRNA</strong> (the message), <strong>tRNA</strong> (carries amino acids; the <span class="keyterm">anticodon</span> is complementary to the codon), and the <strong>ribosome</strong> (large + small subunit; site of assembly).</p>
<h4>Three stages</h4>
<ul>
<li><strong>Initiation:</strong> small ribosomal subunit binds the mRNA cap; the first codon (usually AUG) attracts a tRNA carrying methionine; the large subunit joins.</li>
<li><strong>Elongation:</strong> tRNAs deliver amino acids one codon at a time; covalent (peptide) bonds link them; the ribosome moves down the mRNA. (~15 amino acids/second.)</li>
<li><strong>Termination:</strong> at a stop codon, no tRNA fits — a <strong>release factor</strong> protein binds, and the finished polypeptide, ribosome, and tRNA all separate.</li>
</ul>
<h4>After translation</h4>
<p>A protein only works once it <strong>folds</strong> into its correct 3-D shape (chaperone proteins help). Some are cut (e.g., proinsulin → insulin) or joined with other chains (hemoglobin = 4 chains). Misfolding causes disease (cystic fibrosis, Alzheimer, prion diseases).</p>
<div class="callout warn"><b>Why We Care — poisons that block protein production:</b> <em>Amanitin</em> (death-cap mushroom) blocks RNA polymerase (no transcription); <em>diphtheria toxin</em> blocks translation; many <em>antibiotics</em> (clindamycin, tetracyclines, etc.) bind bacterial ribosomes so the bacterium can't make proteins.</div>
</div>

<div class="note-section">
<h3>7.5 Regulating Gene Expression</h3>
<p>Making proteins is expensive (an <em>E. coli</em> cell spends ~90% of its ATP on gene expression), so cells turn genes on and off as needed. Different cell types express different gene combinations.</p>
<h4>Bacteria — operons</h4>
<p>An <span class="keyterm">operon</span> = a promoter + an <span class="keyterm">operator</span> + a group of related genes, controlled together. In the <strong>lac operon</strong>:</p>
<ul>
<li><strong>No lactose:</strong> a <span class="keyterm">repressor</span> protein binds the operator → blocks RNA polymerase → genes OFF.</li>
<li><strong>Lactose present:</strong> lactose binds the repressor, changing its shape so it falls off → genes ON → lactose-digesting enzymes made.</li>
</ul>
<h4>Eukaryotes — many control points</h4>
<ul>
<li><strong>DNA availability / epigenetics:</strong> chemical "tags" (e.g., <strong>methyl groups</strong>) and modified histone proteins fold DNA away (off) or expose it (on). <span class="keyterm">Epigenetics</span> = changes in gene expression <em>without</em> changing the DNA sequence; mostly erased at fertilization.</li>
<li><strong>Transcription factors:</strong> proteins that must bind the promoter (at the <strong>TATA box</strong>) before RNA polymerase can start.</li>
<li><strong>Alternative splicing:</strong> different combinations of exons → one gene can make many proteins.</li>
<li>Also: whether mRNA exits the nucleus, mRNA stability/degradation, and protein processing/movement.</li>
</ul>
</div>

<div class="note-section">
<h3>7.6 Mutations Change DNA</h3>
<p>A <span class="keyterm">mutation</span> is any change in a cell's DNA sequence. Mutations cause disease but also create the variation that fuels evolution.</p>
<h4>Types</h4>
<ul>
<li><span class="keyterm">Substitution</span> — one base swapped for another. May be <strong>silent</strong> (same amino acid, thanks to code redundancy), <strong>missense</strong> (different amino acid — e.g., sickle cell), or <strong>nonsense</strong> (creates a premature stop codon, shortening the protein).</li>
<li><span class="keyterm">Insertion</span> / <span class="keyterm">deletion</span> — adds or removes nucleotides.</li>
<li><span class="keyterm">Frameshift</span> — an insertion/deletion <strong>not</strong> a multiple of 3, which shifts the reading frame and usually wrecks the protein. (Adding/removing in groups of 3 does <em>not</em> shift the frame.)</li>
</ul>
<h4>Causes</h4>
<ul>
<li><strong>Spontaneous</strong> — usually DNA-replication errors.</li>
<li><strong>Mutagens</strong> — outside agents: UV light, X-rays, radioactive fallout, tobacco chemicals.</li>
</ul>
<h4>Why mutations matter</h4>
<p>They generate new <span class="keyterm">alleles</span> (gene variants) — the raw material of evolution. <strong>Homeotic genes</strong> control body-part placement (mutate them and legs grow where antennae should be). Mutations also drive antibiotic resistance and are used by breeders to make new crops.</p>
</div>

<div class="note-section">
<h3>7.7 Viruses — Genes Wrapped in Protein</h3>
<p>A <span class="keyterm">virus</span> is a small infectious agent: genetic material (DNA <em>or</em> RNA) inside a <strong>protein coat</strong>. Viruses are <strong>not cells</strong> — no nucleus, no organelles, no ribosomes, no cytoplasm, no metabolism, and they <strong>cannot reproduce on their own</strong>. Average virus ~80 nm (much smaller than a bacterium).</p>
<ul>
<li>All viruses have: <strong>genetic material</strong> + <strong>protein coat</strong>.</li>
<li>Some also have an <span class="keyterm">envelope</span> (lipid layer stolen from the host membrane) — e.g., HIV, influenza.</li>
<li><span class="keyterm">Bacteriophages</span> ("phages") = viruses that infect bacteria.</li>
</ul>
<h4>Viral replication — 5 steps</h4>
<ol>
<li><strong>Attachment</strong> — virus binds a receptor on the host cell (host specificity).</li>
<li><strong>Penetration</strong> — viral genetic material enters the cell.</li>
<li><strong>Synthesis</strong> — host cell makes viral nucleic acids and proteins (using the host's ATP, ribosomes, enzymes).</li>
<li><strong>Assembly</strong> — new virus particles are put together.</li>
<li><strong>Release</strong> — new viruses leave (bursting the cell, or budding out with envelope).</li>
</ol>
</div>

<div class="note-section">
<h3>7.8 Viruses Infect All Cell Types</h3>
<h4>Bacteriophages: two pathways</h4>
<ul>
<li><span class="keyterm">Lytic</span> — virus replicates immediately and bursts (lyses) the cell, releasing new viruses.</li>
<li><span class="keyterm">Lysogenic</span> — viral DNA replicates <em>along with</em> the host's (often inserted as a <span class="keyterm">prophage</span>); cell lives and divides. Stress can flip it to the lytic pathway later.</li>
</ul>
<h4>Animal viruses</h4>
<ul>
<li>Cause disease by killing cells <strong>and</strong> by triggering immune responses (fever, aches come from the immune response, not the virus directly).</li>
<li><span class="keyterm">Latent infection</span> — viral DNA lies dormant inside an animal cell (like lysogeny); can reactivate (e.g., herpes cold sores).</li>
<li><strong>HIV</strong> is a <span class="keyterm">retrovirus</span> (RNA genome). Its enzyme <span class="keyterm">reverse transcriptase</span> makes DNA from the viral RNA; that DNA inserts into the host's chromosome. HIV infects helper T cells → their loss causes AIDS.</li>
<li>Some latent viruses cause cancer (HPV → cervical cancer; Epstein–Barr → Burkitt lymphoma).</li>
</ul>
<p>Plants get viral diseases too (spread by insects, through plasmodesmata).</p>
</div>

<div class="note-section">
<h3>7.9 Drugs &amp; Vaccines vs. Viruses</h3>
<ul>
<li><span class="keyterm">Vaccines</span> "teach" the immune system to recognize a virus without causing disease — our most powerful tool (smallpox eradicated, polio nearly so).</li>
<li>Antiviral drugs are hard to make because viruses live inside our cells and mutate fast (flu vaccine must be remade yearly; no HIV vaccine yet).</li>
<li><strong>Antibiotics do NOT work on viruses</strong> — viruses lack the structures (cell walls, ribosomes, etc.) antibiotics target. Antibiotics only help with a <em>secondary bacterial</em> infection.</li>
</ul>
</div>

<div class="note-section">
<h3>7.10 Viroids &amp; Prions</h3>
<ul>
<li><span class="keyterm">Viroid</span> — a tiny naked circle of <strong>RNA</strong> (no protein coat) that infects plants.</li>
<li><span class="keyterm">Prion</span> — a <strong>misfolded protein</strong> ("proteinaceous infectious particle"). It forces normal prion proteins to misfold too, in a chain reaction — causing brain to become sponge-like (e.g., mad cow disease). No nucleic acid at all.</li>
</ul>
</div>
`,

8: `
<h2 class="note-chtitle">Chapter 8 — DNA Replication, Binary Fission &amp; Mitosis</h2>

<div class="note-section">
<h3>8.1 Cells Divide and Cells Die</h3>
<p>Cell division is needed for <strong>reproduction, growth, development,</strong> and <strong>tissue repair/replacement</strong>.</p>
<h4>Two kinds of reproduction</h4>
<ul>
<li><span class="keyterm">Asexual</span> — one cell copies its DNA and splits; offspring are genetically identical (except mutations). Bacteria use <strong>binary fission</strong>.</li>
<li><span class="keyterm">Sexual</span> — genetic makeup comes from two parents; offspring are genetically varied.</li>
</ul>
<h4>The sexual life cycle uses two division types</h4>
<ul>
<li><span class="keyterm">Meiosis</span> → makes genetically unique nuclei packaged into <strong>gametes</strong> (sperm, egg).</li>
<li><span class="keyterm">Fertilization</span> → sperm + egg fuse into a <strong>zygote</strong>.</li>
<li><span class="keyterm">Mitosis</span> → divides a cell's DNA into two identical nuclei; runs growth &amp; repair afterward.</li>
</ul>
<h4>Cell death</h4>
<p><span class="keyterm">Apoptosis</span> = programmed (planned) cell death. It sculpts the body — e.g., it carves the spaces between developing fingers/toes. Cell division and apoptosis stay in balance throughout life.</p>
</div>

<div class="note-section">
<h3>8.2 DNA Replication Precedes Cell Division</h3>
<p>Before any cell divides, it must <strong>copy its entire genome</strong>. Replication is <span class="keyterm">semiconservative</span>: each new double helix keeps one original ("parental") strand and one brand-new strand.</p>
<h4>The enzymes</h4>
<ul>
<li><span class="keyterm">Helicase</span> — unwinds and "unzips" the double helix, breaking the hydrogen bonds.</li>
<li><span class="keyterm">DNA polymerase</span> — adds new complementary nucleotides and <strong>proofreads</strong> (error rate ~1 in a billion after proofreading).</li>
<li><span class="keyterm">Ligase</span> — seals (covalently bonds) adjacent DNA segments together.</li>
</ul>
<p>Replication starts at many <span class="keyterm">origins of replication</span> at once and proceeds in both directions, so copying billions of bases takes only ~8–10 hours. Leftover mistakes become <strong>mutations</strong>.</p>
</div>

<div class="note-section">
<h3>8.3 Bacteria &amp; Archaea Divide by Binary Fission</h3>
<p><span class="keyterm">Binary fission</span> is asexual division of a prokaryote:</p>
<ol>
<li>The single <strong>circular chromosome</strong> replicates.</li>
<li>The two copies attach to the cell membrane.</li>
<li>The membrane grows between them, pushing them apart; new cell wall is added.</li>
<li>The cell pinches in half → two identical daughter cells.</li>
</ol>
<p>Some bacteria divide every ~20 minutes. Besides mutation, bacteria gain genetic variety by picking up DNA — through a <strong>sex pilus</strong> from another cell, or by absorbing DNA released by dead cells. (This is how antibiotic-resistance genes spread.)</p>
</div>

<div class="note-section">
<h3>8.4 Replicated Chromosomes Condense</h3>
<p>Eukaryotes have lots of DNA in multiple <strong>linear</strong> chromosomes, so they package it carefully. Each species has a characteristic chromosome number (mosquito 6, human 46, dog 78).</p>
<h4>Chromosome structure</h4>
<ul>
<li><span class="keyterm">Chromatin</span> = DNA + its associated proteins (collective term).</li>
<li><span class="keyterm">Nucleosome</span> = DNA wrapped around 8 <strong>histone</strong> proteins ("beads on a string").</li>
<li>When not dividing, chromatin is loose so genes can be read. Before division it coils tightly into a compact, visible chromosome.</li>
</ul>
<h4>A replicated chromosome (X-shape)</h4>
<ul>
<li><span class="keyterm">Sister chromatids</span> — the two identical attached copies.</li>
<li><span class="keyterm">Centromere</span> — the constricted region holding the sister chromatids together. When it splits, each chromatid becomes its own chromosome.</li>
</ul>
</div>

<div class="note-section">
<h3>8.5 Mitotic Division Generates Exact Cell Copies</h3>
<p>The <span class="keyterm">cell cycle</span> = one complete round of cell division. Its three big parts: <strong>interphase → mitosis → cytokinesis</strong>.</p>
<div class="callout"><b>Professor point:</b> The <strong>longest part of the cell cycle is INTERPHASE.</strong> Cells in <strong>G₀ never divide — but they are NOT dead</strong> (e.g., mature neurons).</div>
<h4>Interphase (the long growth/copy phase)</h4>
<ul>
<li><span class="keyterm">G₁</span> — cell grows, does its normal job, makes organelles.</li>
<li><span class="keyterm">S phase</span> — DNA is <strong>synthesized (replicated)</strong>. By the end, each chromosome = two sister chromatids. (Centrosome also duplicates in animal cells.)</li>
<li><span class="keyterm">G₂</span> — more growth; makes proteins to run mitosis.</li>
<li><span class="keyterm">G₀</span> — a resting state off the cycle; the cell is alive and working but not preparing to divide.</li>
</ul>
<h4>Mitosis — 4 stages (PMAT)</h4>
<table class="note-table">
<tr><th>Stage</th><th>What happens</th></tr>
<tr><td><strong>Prophase</strong></td><td>Chromosomes condense &amp; become visible; spindle forms; nucleolus &amp; nuclear envelope break down; spindle fibers attach.</td></tr>
<tr><td><strong>Metaphase</strong></td><td>Chromosomes line up <strong>single file</strong> along the cell's equator (middle).</td></tr>
<tr><td><strong>Anaphase</strong></td><td>Centromeres split; <strong>sister chromatids separate</strong> and are pulled to opposite poles.</td></tr>
<tr><td><strong>Telophase</strong></td><td>Chromosomes arrive at the poles &amp; decondense; nuclear envelopes &amp; nucleoli re-form; spindle disassembles. (Reverses prophase.)</td></tr>
</table>
<div class="mnemonic"><b>Order:</b> <b>I</b>nterphase → <b>P</b>rophase → <b>M</b>etaphase → <b>A</b>naphase → <b>T</b>elophase → Cytokinesis. ("<b>PMAT</b>")</div>
<div class="callout"><b>Professor point:</b> Sister chromatids separate during <strong>anaphase</strong> of mitosis (and anaphase II of meiosis).</div>
<h4>Cytokinesis — splitting the cytoplasm</h4>
<ul>
<li><strong>Animal cells:</strong> a <span class="keyterm">cleavage furrow</span> — a ring of protein pinches the cell in two.</li>
<li><strong>Plant cells:</strong> a <span class="keyterm">cell plate</span> forms down the middle and becomes a new cell wall.</li>
</ul>
<p><strong>Result:</strong> two daughter cells, each with the same chromosome number as the parent (e.g., 46 → two cells of 46).</p>
</div>

<div class="note-section">
<h3>8.6 Cancer — Uncontrolled Cell Division</h3>
<h4>Normal control</h4>
<ul>
<li>External chemical signals (e.g., <strong>growth factors</strong>) tell cells when to divide.</li>
<li><span class="keyterm">Checkpoints</span> in the cell cycle make sure each step is done correctly and screen for damaged DNA — if DNA is too damaged, the cell triggers apoptosis.</li>
</ul>
<h4>Tumors</h4>
<ul>
<li><span class="keyterm">Benign</span> — slow, stays put inside a capsule; usually harmless (warts, moles).</li>
<li><span class="keyterm">Malignant</span> — invades nearby tissue and can <span class="keyterm">metastasize</span> (spread via blood/lymph). <strong>Cancer</strong> = a disease of malignant cells.</li>
</ul>
<p>Cancer begins when a single cell accumulates mutations that break its cell-cycle controls; it passes that loss of control to its daughter cells.</p>
<h4>Treatments &amp; risk</h4>
<ul>
<li>Surgery, <strong>chemotherapy</strong>, and <strong>radiation</strong> target rapidly dividing cells — which is why they also hit hair follicles, bone marrow, and the gut lining (hair loss, weakened immunity, nausea). Newer targeted/immune therapies are more specific.</li>
<li>Risk comes from inherited mutations <strong>and</strong> environment (UV, tobacco, viruses, poor diet). "ABCD" warns of skin cancer: <strong>A</strong>symmetry, <strong>B</strong>orders irregular, <strong>C</strong>olor varies, <strong>D</strong>iameter &gt; 6 mm.</li>
</ul>
</div>
`,

9: `
<h2 class="note-chtitle">Chapter 9 — Sexual Reproduction &amp; Meiosis</h2>

<div class="note-section">
<h3>9.1 Why Sex?</h3>
<ul>
<li><span class="keyterm">Asexual reproduction</span> — one parent, copies DNA, offspring nearly identical. Cheap and fast; good in a stable, unchanging environment.</li>
<li><span class="keyterm">Sexual reproduction</span> — two parents, scrambles genes, offspring genetically varied. Costly (finding mates, making gametes) but creates <strong>genetic diversity</strong>.</li>
</ul>
<p><strong>Why sex persists:</strong> genetic variability increases the chance that <em>some</em> offspring survive when the environment changes (new parasites, temperature swings, etc.). A changing environment selects for sexual reproduction.</p>
</div>

<div class="note-section">
<h3>9.2 Diploid Cells Have Two Homologous Sets of Chromosomes</h3>
<ul>
<li><span class="keyterm">Diploid (2n)</span> — two full sets of chromosomes, one from each parent. Human body cells = 46 chromosomes (23 pairs).</li>
<li><span class="keyterm">Haploid (n)</span> — one set. Human gametes = 23 chromosomes.</li>
<li><span class="keyterm">Karyotype</span> — a size-ordered chart of all of a cell's chromosomes.</li>
</ul>
<h4>Two kinds of chromosomes</h4>
<ul>
<li><span class="keyterm">Autosomes</span> — the 22 pairs that are the same in both sexes.</li>
<li><span class="keyterm">Sex chromosomes</span> — the 23rd pair: <strong>XX = female, XY = male.</strong></li>
</ul>
<h4>Homologous pairs</h4>
<p><span class="keyterm">Homologous chromosomes</span> (homologs) are the two members of a pair: same size, same centromere position, same banding, and the <strong>same genes in the same order</strong> — but they may carry different <span class="keyterm">alleles</span> (versions) of those genes. (X and Y are an exception — not truly homologous, but they pair during meiosis.)</p>
</div>

<div class="note-section">
<h3>9.3 Meiosis Is Essential in Sexual Reproduction</h3>
<p>Problem: if sperm (46) + egg (46) fused, kids would have 92 chromosomes, doubling each generation. <strong>Solution: gametes are haploid.</strong> Meiosis halves the chromosome number so fertilization restores the diploid (2n) number.</p>
<ul>
<li><span class="keyterm">Meiosis</span> — produces genetically variable <strong>haploid</strong> nuclei; only happens in <span class="keyterm">germ cells</span> (in ovaries &amp; testes).</li>
<li><span class="keyterm">Somatic cells</span> — all the body's other (non-reproductive) cells; divide by mitosis. (Muscle cells, neurons.)</li>
<li><span class="keyterm">Zygote</span> — the diploid first cell of the new organism, formed at fertilization; then divides by mitosis.</li>
</ul>
</div>

<div class="note-section">
<h3>9.4 In Meiosis, DNA Replicates Once but the Nucleus Divides Twice</h3>
<p>One round of DNA replication (during interphase) is followed by <strong>two divisions</strong> — meiosis I and meiosis II — producing <strong>four haploid cells</strong> from one diploid cell.</p>
<h4>Meiosis I — separates HOMOLOGS ("reduction division")</h4>
<table class="note-table">
<tr><th>Stage</th><th>Key event</th></tr>
<tr><td><strong>Prophase I</strong></td><td>Chromosomes condense; homologs pair up; <strong>crossing over</strong> occurs; spindle forms; nuclear envelope breaks up.</td></tr>
<tr><td><strong>Metaphase I</strong></td><td>Homologous <strong>pairs</strong> line up <strong>double file</strong> at the equator (random orientation).</td></tr>
<tr><td><strong>Anaphase I</strong></td><td><strong>Homologous chromosomes separate</strong> to opposite poles. Sister chromatids stay together.</td></tr>
<tr><td><strong>Telophase I / cytokinesis</strong></td><td>Two haploid cells form (each chromosome still = 2 sister chromatids).</td></tr>
</table>
<h4>Meiosis II — separates SISTER CHROMATIDS (just like mitosis)</h4>
<table class="note-table">
<tr><th>Stage</th><th>Key event</th></tr>
<tr><td><strong>Prophase II</strong></td><td>Spindles form; nuclear envelopes break up. (No new DNA replication!)</td></tr>
<tr><td><strong>Metaphase II</strong></td><td>Chromosomes line up <strong>single file</strong>.</td></tr>
<tr><td><strong>Anaphase II</strong></td><td>Centromeres split; <strong>sister chromatids separate</strong> to opposite poles.</td></tr>
<tr><td><strong>Telophase II / cytokinesis</strong></td><td><strong>Four</strong> non-identical haploid daughter cells.</td></tr>
</table>
<div class="callout"><b>Professor point:</b> Sister chromatids separate in <strong>anaphase II of meiosis</strong> (and in anaphase of mitosis). In <strong>anaphase I</strong>, it's the <strong>homologs</strong> that separate, not the sister chromatids.</div>
</div>

<div class="note-section">
<h3>9.5 Meiosis Generates Enormous Variability</h3>
<p>Three mechanisms create genetic variety:</p>
<ul>
<li><span class="keyterm">Crossing over</span> (prophase I) — homologs swap matching segments. Produces <strong>recombinant</strong> chromatids (new allele combos); chromatids that don't swap stay <strong>parental</strong>.</li>
<li><span class="keyterm">Random (independent) orientation</span> (metaphase I) — each homologous pair lines up independently. For humans (23 pairs) that's <strong>2²³ ≈ 8.4 million</strong> possible gametes from one person.</li>
<li><span class="keyterm">Random fertilization</span> — any of ~8.4 million eggs can meet any of ~8.4 million sperm → <strong>over 70 trillion</strong> genetically unique offspring possible per couple (even before crossing over).</li>
</ul>
<h4>Twins</h4>
<ul>
<li><strong>Identical (monozygotic):</strong> one sperm + one egg → one zygote that splits. Genetically identical.</li>
<li><strong>Fraternal (dizygotic):</strong> two sperm fertilize two eggs → two zygotes. No more alike than ordinary siblings.</li>
</ul>
</div>

<div class="note-section">
<h3>9.6 Mitosis vs. Meiosis — A Summary</h3>
<table class="note-table">
<tr><th></th><th>Mitosis</th><th>Meiosis</th></tr>
<tr><td>Where</td><td>Somatic cells, throughout life</td><td>Germ cells only, at some life stages</td></tr>
<tr><td>Divisions</td><td>One</td><td>Two (I &amp; II)</td></tr>
<tr><td>Daughter cells</td><td>2</td><td>4</td></tr>
<tr><td>Chromosome #</td><td>Same as parent (2n→2n)</td><td>Halved (2n→n)</td></tr>
<tr><td>Genetics</td><td>Identical copies</td><td>Genetically unique</td></tr>
<tr><td>Homologs pair / crossing over?</td><td>No</td><td>Yes</td></tr>
<tr><td>Purpose</td><td>Growth, repair, asexual reproduction</td><td>Sexual reproduction (gametes)</td></tr>
</table>
</div>

<div class="note-section">
<h3>9.7 Errors in Meiosis</h3>
<h4>Polyploidy</h4>
<p><span class="keyterm">Polyploidy</span> = one or more extra full <strong>sets</strong> of chromosomes (e.g., triploidy = 3 sets, 69 in humans). Usually lethal in humans, but common and important in plants (durum wheat is tetraploid; bread wheat is hexaploid).</p>
<h4>Nondisjunction</h4>
<p><span class="keyterm">Nondisjunction</span> = chromosomes fail to separate properly (at anaphase I or anaphase II). It produces gametes with an extra or missing chromosome, so the zygote has 45 or 47 instead of 46.</p>
<ul>
<li><span class="keyterm">Trisomy</span> = one extra chromosome (47). <strong>Trisomy 21 = Down syndrome</strong> (the most common viable autosomal trisomy; risk rises sharply with maternal age). Trisomy 18 and 13 are rarely survivable.</li>
<li>Extra chromosomes are generally less harmful than missing ones — which is why surviving abnormalities are usually trisomies, not monosomies.</li>
<li><strong>Sex-chromosome conditions:</strong> XXX (Triplo-X), XXY (Klinefelter), XYY (Jacobs), XO (Turner). Note: <strong>OY never survives</strong> — with no X, too much essential genetic material is missing.</li>
</ul>
</div>
`
};

/* ---------------------- QUIZ QUESTION BANKS ---------------------- */
/* answer = index of correct option */
const QUIZZES = {
7: [
  {q:"What holds the two strands of a DNA molecule together?",
   options:["Hydrogen bonds between complementary bases","Covalent bonds between the sugars","Ionic bonds between phosphate groups","Peptide bonds between bases"],
   answer:0,
   explain:"The base-pair rungs (A–T, C–G) are held together by hydrogen bonds. The sugar–phosphate backbone uses covalent bonds, but the two strands are joined by hydrogen bonds."},

  {q:"If one DNA strand reads 5′-ATTGTCC-3′, the complementary strand is:",
   options:["TAACAGG","CGGAGTT","ACCTCGG","CCTGTTA"],
   answer:0,
   explain:"A pairs with T and G pairs with C. ATTGTCC → TAACAGG."},

  {q:"Transcription copies a ____ to a complementary ____ molecule.",
   options:["chromosome; DNA","gene; RNA","genome; protein","ribosome; tRNA"],
   answer:1,
   explain:"Transcription rewrites one gene's DNA sequence into a complementary RNA molecule."},

  {q:"Which DNA template strand was this mRNA transcribed from: 5′-AUACGAUUA-3′ ?",
   options:["TATGCTAAT","UAUCGUAAU","TAATCGTAT","CTCAGCTTC"],
   answer:0,
   explain:"DNA template is complementary to mRNA (and uses T, not U). A→T, U→A, C→G, G→C: AUACGAUUA → TATGCTAAT."},

  {q:"What is the job of tRNA during translation?",
   options:["It carries amino acids to the mRNA","It unzips the DNA double helix","It adds the poly-A tail to mRNA","It triggers termination of transcription"],
   answer:0,
   explain:"tRNA is the 'connector' — its anticodon matches an mRNA codon while it carries the matching amino acid to the ribosome."},

  {q:"In a eukaryotic cell, which modifications are made to mRNA before it leaves the nucleus?",
   options:["A 5′ cap and poly-A tail are added, and introns are spliced out","Thymine is replaced with uracil throughout","The ribosome is attached to both ends","Exons are removed and introns are kept"],
   answer:0,
   explain:"Processing adds a 5′ cap and poly-A tail and removes introns by splicing (spliceosomes). Exons are kept and joined; introns are discarded."},

  {q:"Which process converts the information in RNA into a protein?",
   options:["Translation","Transcription","Replication","Transformation"],
   answer:0,
   explain:"DNA→RNA is transcription; RNA→protein is translation."},

  {q:"A codon is best described as:",
   options:["Three consecutive mRNA bases that specify one amino acid (or stop)","A protein that builds RNA","The DNA strand that is transcribed","The site where translation occurs"],
   answer:0,
   explain:"A codon = three consecutive mRNA bases corresponding to one amino acid or a stop signal."},

  {q:"Which sequence is a START codon?",
   options:["AUG","UAA","UAG","UGA"],
   answer:0,
   explain:"AUG starts translation (and codes methionine). UAA, UAG, and UGA are the three stop codons."},

  {q:"A substitution mutation changes one codon so it now codes a STOP signal instead of an amino acid. This is a:",
   options:["Nonsense mutation that shortens the protein","Silent mutation with no effect","Frameshift mutation","Duplication of the whole chromosome"],
   answer:0,
   explain:"A premature stop codon (nonsense mutation) truncates the protein, often destroying its function."},

  {q:"Why is a frameshift mutation usually so damaging?",
   options:["Adding/deleting a number of bases not divisible by 3 shifts the reading frame for all following codons","It always deletes an entire chromosome","It changes ribose into deoxyribose","It removes the hydrogen bonds in DNA"],
   answer:0,
   explain:"Because codons are read in groups of three, inserting/deleting a non-multiple of 3 throws off every downstream codon."},

  {q:"In the lac operon, what happens when lactose is PRESENT?",
   options:["Lactose binds the repressor, it falls off the operator, and the genes are transcribed","The repressor binds tighter and genes stay off","RNA polymerase is destroyed","The promoter is deleted"],
   answer:0,
   explain:"Lactose binds the repressor and changes its shape so it releases the operator — RNA polymerase can now transcribe the lactose-digesting genes."},

  {q:"Which statement about viruses is TRUE?",
   options:["A virus is genetic material in a protein coat and cannot reproduce on its own","Viruses are a type of bacteria","All viruses contain both DNA and RNA","Viruses have ribosomes and make their own proteins"],
   answer:0,
   explain:"A virus is DNA or RNA inside a protein coat. It is not a cell, has no ribosomes, and must hijack a host cell to reproduce."},

  {q:"At which stage of viral replication does the genetic material enter the host cell?",
   options:["Penetration","Attachment","Assembly","Release"],
   answer:0,
   explain:"Order: attachment → penetration (genome enters) → synthesis → assembly → release."},

  {q:"In a LYSOGENIC infection, the viral DNA:",
   options:["Replicates along with the host's DNA without immediately making new viruses","Immediately bursts the cell open","Is translated directly into a protein coat outside the cell","Converts the bacterium into a virus"],
   answer:0,
   explain:"Lysogenic = the viral DNA (often a prophage) replicates with the host genome; the cell survives. Stress can later switch it to the lytic (bursting) pathway."},

  {q:"Why don't antibiotics work against viruses?",
   options:["Viruses lack the structures (cell walls, ribosomes) that antibiotics target","Viruses are too large for antibiotics to reach","Antibiotics only kill eukaryotic cells","Viruses have thicker cell walls than bacteria"],
   answer:0,
   explain:"Antibiotics attack bacterial structures like cell walls and ribosomes — viruses have none of these, so antibiotics are useless against them."},

  {q:"A prion is:",
   options:["A misfolded protein that causes other proteins to misfold","A naked circle of RNA","A virus without its envelope","A bacterial ribosome"],
   answer:0,
   explain:"A prion is an infectious misfolded protein (no nucleic acid). A viroid is the naked RNA circle."},

  {q:"Which type of RNA combines with proteins to form the ribosome?",
   options:["rRNA","mRNA","tRNA","hnRNA"],
   answer:0,
   explain:"Ribosomal RNA (rRNA) joins with proteins to build the ribosome, the site of translation."},

  {q:"HIV is a retrovirus. What does its enzyme reverse transcriptase do?",
   options:["Makes DNA from the viral RNA template","Translates RNA into protein","Splices out introns","Adds a poly-A tail"],
   answer:0,
   explain:"Reverse transcriptase transcribes the viral RNA genome into DNA, which then inserts into the host's chromosome — the reverse of the usual DNA→RNA flow."},

  {q:"A 'silent' substitution mutation has no effect on the protein because:",
   options:["More than one codon can code the same amino acid (the code is redundant)","Mutations never affect proteins","The mutation deletes the whole gene","Silent mutations only occur in introns"],
   answer:0,
   explain:"Because the genetic code is redundant, a changed codon may still specify the same amino acid — so the protein is unchanged."}
],

8: [
  {q:"DNA replication is described as 'semiconservative.' This means each new DNA molecule has:",
   options:["One original (parental) strand and one newly made strand","Two brand-new strands","Two original strands","Only RNA in one strand"],
   answer:0,
   explain:"Semiconservative: the helix unzips and each old strand serves as a template, so every new double helix keeps one original strand."},

  {q:"Which enzyme unwinds and 'unzips' the DNA double helix during replication?",
   options:["Helicase","DNA polymerase","Ligase","RNA polymerase"],
   answer:0,
   explain:"Helicase separates the two strands. DNA polymerase then builds new strands; ligase seals the segments."},

  {q:"What is the MAIN function of DNA polymerase?",
   options:["Add complementary nucleotides to build the new strand (and proofread)","Unzip the double helix","Join Okazaki/adjacent fragments together","Add the poly-A tail"],
   answer:0,
   explain:"DNA polymerase adds new nucleotides complementary to each template strand and proofreads its work."},

  {q:"During binary fission, after the circular chromosome replicates, the two copies:",
   options:["Attach to the cell membrane, which grows between them to push them apart","Are packaged into a spindle","Fuse into one larger chromosome","Are pumped out of the cell"],
   answer:0,
   explain:"In binary fission the duplicated chromosomes attach to the membrane; membrane growth separates them before the cell pinches in two. No spindle is needed."},

  {q:"Which is the LONGEST part of the cell cycle?",
   options:["Interphase","Prophase","Anaphase","Cytokinesis"],
   answer:0,
   explain:"Interphase (G1, S, G2) takes up most of the cell cycle; mitosis is comparatively brief."},

  {q:"A cell in G₀ phase is:",
   options:["Alive and functioning but not dividing","Dead","In the middle of mitosis","Replicating its DNA"],
   answer:0,
   explain:"G₀ is a non-dividing state. The cell is very much alive and doing its job (e.g., a mature neuron) — it simply isn't preparing to divide."},

  {q:"During which phase of interphase is DNA replicated?",
   options:["S phase","G1 phase","G2 phase","Prophase"],
   answer:0,
   explain:"DNA is synthesized (replicated) during S phase. G1 and G2 are growth 'gap' phases."},

  {q:"During which stage of mitosis do sister chromatids separate and move to opposite poles?",
   options:["Anaphase","Prophase","Metaphase","Telophase"],
   answer:0,
   explain:"In anaphase the centromeres split and sister chromatids are pulled apart toward opposite poles."},

  {q:"During metaphase, the chromosomes:",
   options:["Line up single file along the cell's equator","Separate to the poles","Decondense into chromatin","Attach to the cell membrane"],
   answer:0,
   explain:"Metaphase = chromosomes aligned single file at the middle (equator) of the cell."},

  {q:"What is a sister chromatid?",
   options:["One of two identical attached copies that make up a replicated chromosome","A chromosome from the other parent","A non-coding piece of RNA","A pair of homologous chromosomes"],
   answer:0,
   explain:"After replication, a chromosome is two identical sister chromatids joined at the centromere."},

  {q:"A human cell in early prophase has 46 chromosomes. After mitosis and cytokinesis, each daughter cell has how many chromosomes?",
   options:["46","23","92","138"],
   answer:0,
   explain:"Mitosis produces two identical daughter cells, each with the SAME chromosome number as the parent — 46."},

  {q:"The correct order of the cell cycle is:",
   options:["Interphase → Prophase → Metaphase → Anaphase → Telophase → Cytokinesis","Prophase → Interphase → Anaphase → Metaphase → Telophase","Metaphase → Anaphase → Prophase → Telophase","Interphase → Anaphase → Metaphase → Prophase"],
   answer:0,
   explain:"PMAT after interphase: Prophase, Metaphase, Anaphase, Telophase, then cytokinesis splits the cytoplasm."},

  {q:"In an ANIMAL cell, cytokinesis occurs by formation of a:",
   options:["Cleavage furrow (a contractile ring pinches the cell)","Cell plate","New cell wall","Prophase spindle"],
   answer:0,
   explain:"Animal cells pinch apart with a cleavage furrow; plant cells build a cell plate that becomes a new wall."},

  {q:"What is the role of the centromere during cell division?",
   options:["It holds sister chromatids together and splits during anaphase","It builds the new cell wall","It adds nucleotides to DNA","It encodes ribosomal RNA"],
   answer:0,
   explain:"The centromere joins sister chromatids; when it splits in anaphase, each chromatid becomes its own chromosome."},

  {q:"A nucleosome consists of:",
   options:["DNA wrapped around histone proteins","Two homologous chromosomes","RNA wrapped around a ribosome","A circular bacterial chromosome"],
   answer:0,
   explain:"Chromatin is organized into nucleosomes — DNA coiled around eight histone proteins, like beads on a string."},

  {q:"What is the difference between a benign and a malignant tumor?",
   options:["A malignant tumor can invade tissue and metastasize; a benign one stays put","A benign tumor always spreads; malignant ones never do","Benign tumors lack DNA","Malignant tumors are always smaller"],
   answer:0,
   explain:"Malignant tumors invade nearby tissue and spread (metastasize) through blood/lymph. Benign tumors are enclosed and stay localized."},

  {q:"Why do chemotherapy and radiation often cause hair loss and nausea?",
   options:["They target rapidly dividing cells, including hair follicles and gut lining","They specifically poison only hair and stomach cells","They stop the heart from dividing","They cause the patient's DNA to become RNA"],
   answer:0,
   explain:"These treatments hit fast-dividing cells indiscriminately — cancer cells, but also hair follicles, gut lining, and bone marrow."},

  {q:"Cell cycle checkpoints are important because they:",
   options:["Help prevent cells with damaged DNA from dividing","Make mitosis occur continuously in all cells","Speed up DNA replication errors","Remove the nucleus before division"],
   answer:0,
   explain:"Checkpoints verify each stage is complete and screen for DNA damage, triggering repair or apoptosis if needed."},

  {q:"Apoptosis is best described as:",
   options:["Programmed (planned) cell death that helps shape the body","Uncontrolled cell division","DNA replication","The fusion of two gametes"],
   answer:0,
   explain:"Apoptosis is a normal, tightly regulated cell death — for example, removing the webbing between developing fingers and toes."},

  {q:"A cell that has just completed interphase contains ___ times as much DNA as it did at the start of interphase.",
   options:["Two","Four","One half","The same"],
   answer:0,
   explain:"DNA replicates once during S phase, so the cell ends interphase with double (2×) the DNA it started with."}
],

9: [
  {q:"What is the unique feature of sexual (vs. asexual) reproduction?",
   options:["It generates new genetic combinations","The ability of a cell to divide","The production of offspring","It requires DNA replication"],
   answer:0,
   explain:"Cell division, offspring, and replication happen in both. Only sexual reproduction generates new genetic combinations from two parents."},

  {q:"A human gamete (sperm or egg) is:",
   options:["Haploid, with 23 chromosomes","Diploid, with 46 chromosomes","Haploid, with 46 chromosomes","Diploid, with 23 chromosomes"],
   answer:0,
   explain:"Gametes are haploid (n) — one set, 23 chromosomes in humans. Fertilization restores the diploid number (46)."},

  {q:"In humans, which chromosome combination is male?",
   options:["XY","XX","XO","YY"],
   answer:0,
   explain:"Females are XX, males are XY. The 22 other pairs are autosomes."},

  {q:"Homologous chromosomes:",
   options:["Carry the same genes in the same order but may have different alleles","Are exact identical copies made during replication","Always come from the same parent","Are found only in haploid cells"],
   answer:0,
   explain:"Homologs (one from each parent) match in size and gene order but can carry different alleles. Identical copies are sister chromatids."},

  {q:"Meiosis explains why:",
   options:["You inherited half of your DNA from each parent","Your somatic cells all contain identical DNA","Sister chromatids are identical","Bacteria reproduce by binary fission"],
   answer:0,
   explain:"Meiosis makes haploid gametes, so each parent contributes half (23 chromosomes) of the offspring's DNA."},

  {q:"In meiosis, how many cells are produced from one diploid cell, and how many divisions occur?",
   options:["Four haploid cells; two divisions","Two diploid cells; one division","Four diploid cells; two divisions","Two haploid cells; one division"],
   answer:0,
   explain:"DNA replicates once, then meiosis I and meiosis II each divide — one diploid cell → four haploid cells."},

  {q:"During which stage do HOMOLOGOUS chromosomes separate?",
   options:["Anaphase I","Anaphase II","Metaphase II","Prophase II"],
   answer:0,
   explain:"Meiosis I separates homologs (anaphase I). Meiosis II later separates sister chromatids (anaphase II)."},

  {q:"During which stage do SISTER CHROMATIDS separate in meiosis?",
   options:["Anaphase II","Anaphase I","Metaphase I","Telophase I"],
   answer:0,
   explain:"Sister chromatids separate in anaphase II (just like anaphase of mitosis). In anaphase I, homologs separate."},

  {q:"Crossing over occurs during which stage, and what does it do?",
   options:["Prophase I; homologs exchange segments, creating recombinant chromatids","Metaphase II; sister chromatids swap centromeres","Anaphase I; chromosomes duplicate","Telophase II; the nuclear envelope re-forms"],
   answer:0,
   explain:"In prophase I, paired homologs swap matching segments (crossing over), shuffling alleles into new (recombinant) combinations."},

  {q:"Which of the following does NOT contribute to genetic diversity?",
   options:["Cytokinesis","Crossing over","Random fertilization","Random orientation of chromosomes at metaphase I"],
   answer:0,
   explain:"Cytokinesis just divides the cytoplasm. Crossing over, independent assortment, and random fertilization all generate diversity."},

  {q:"How many chromatids are in a human cell during metaphase I?",
   options:["92","23","46","184"],
   answer:0,
   explain:"At metaphase I there are still 46 replicated chromosomes, each with 2 sister chromatids = 92 chromatids."},

  {q:"Fraternal (dizygotic) twins result when:",
   options:["Two sperm cells fertilize two separate egg cells","One sperm fertilizes one egg that then splits","Two sperm fertilize one egg","One egg splits into two before fertilization"],
   answer:0,
   explain:"Fraternal twins = two eggs fertilized by two sperm (two zygotes). Identical twins come from ONE zygote that splits."},

  {q:"Identical (monozygotic) twins are genetically identical because they:",
   options:["Come from a single zygote that split into two embryos","Come from two eggs and two sperm","Result from nondisjunction","Are produced by meiosis II only"],
   answer:0,
   explain:"One sperm + one egg → one zygote that divides and splits into two genetically identical embryos."},

  {q:"Nondisjunction is:",
   options:["The failure of chromosomes to separate properly during meiosis","Normal crossing over","The pairing of homologs in prophase I","DNA replication before meiosis"],
   answer:0,
   explain:"Nondisjunction = chromosomes (anaphase I) or sister chromatids (anaphase II) fail to separate, producing gametes with extra or missing chromosomes."},

  {q:"Down syndrome is most commonly caused by:",
   options:["Trisomy 21 (three copies of chromosome 21)","A missing chromosome 21","An extra X chromosome","Polyploidy of all chromosomes"],
   answer:0,
   explain:"Trisomy 21 — three copies of chromosome 21 — is the most common cause of Down syndrome, usually from nondisjunction."},

  {q:"Which cells in the human body can undergo meiosis?",
   options:["Germ cells in the ovaries and testes","All somatic cells","Red blood cells","Skin and muscle cells"],
   answer:0,
   explain:"Only specialized diploid germ cells (in ovaries/testes) undergo meiosis. Somatic cells divide by mitosis."},

  {q:"A zygote is:",
   options:["The diploid first cell of a new organism, formed at fertilization","A haploid sperm cell","A cell undergoing meiosis","A body (somatic) cell"],
   answer:0,
   explain:"Fertilization (sperm + egg) produces the diploid zygote, the first cell of the offspring, which then divides by mitosis."},

  {q:"For a species with 3 pairs of homologous chromosomes, random orientation at metaphase I alone can make how many genetically different gametes?",
   options:["8 (that is, 2³)","6","3","64"],
   answer:0,
   explain:"Each pair orients independently: 2ⁿ where n = number of pairs. 2³ = 8 (humans: 2²³ ≈ 8.4 million)."},

  {q:"Why is a sex-chromosome combination of OY (a Y with no X) never found in living people?",
   options:["Without an X, too much essential genetic material is missing to survive","The Y chromosome is larger than the X","Y chromosomes cannot enter a gamete","It would always cause Down syndrome"],
   answer:0,
   explain:"The X carries many essential genes. A zygote with no X (OY) lacks vital genetic information and cannot survive."},

  {q:"Polyploidy refers to:",
   options:["Having one or more extra complete SETS of chromosomes","Having one extra single chromosome","A missing sex chromosome","An error during mitosis only"],
   answer:0,
   explain:"Polyploidy = extra whole chromosome sets (e.g., triploid 3n). It's usually lethal in humans but common in plants like wheat."}
]
};

/* ---------------------- FLASHCARDS ---------------------- */
const FLASHCARDS = [
  // Chapter 7
  {ch:7, term:"Nucleotide", def:"The building block of DNA and RNA — a sugar, a phosphate group, and a nitrogenous base."},
  {ch:7, term:"Gene", def:"A sequence of DNA nucleotides that encodes a specific protein or RNA molecule."},
  {ch:7, term:"Chromosome", def:"A single DNA molecule wrapped around proteins."},
  {ch:7, term:"Genome", def:"All of the genetic material in a cell."},
  {ch:7, term:"Hydrogen bonds", def:"The bonds that hold the two DNA strands together at the base-pair rungs (A–T, C–G)."},
  {ch:7, term:"Complementary base pairing", def:"A pairs with T (or U in RNA); G pairs with C. Each strand specifies the other."},
  {ch:7, term:"Antiparallel", def:"The two DNA strands run in opposite directions (one 5′→3′, the other 3′→5′)."},
  {ch:7, term:"Central dogma", def:"Information flow in cells: DNA → (transcription) → RNA → (translation) → Protein."},
  {ch:7, term:"Transcription", def:"Building a complementary RNA copy of a gene's DNA (DNA → RNA)."},
  {ch:7, term:"Translation", def:"Using the information in mRNA to assemble a protein at the ribosome (RNA → protein)."},
  {ch:7, term:"mRNA (messenger RNA)", def:"Carries the protein-coding message; read in three-base codons."},
  {ch:7, term:"tRNA (transfer RNA)", def:"Carries amino acids to the ribosome; its anticodon matches an mRNA codon."},
  {ch:7, term:"rRNA (ribosomal RNA)", def:"Combines with proteins to form the ribosome, the site of translation."},
  {ch:7, term:"hnRNA", def:"Heterogeneous nuclear RNA — the unprocessed pre-mRNA in the nucleus that still contains introns."},
  {ch:7, term:"Codon", def:"Three consecutive mRNA bases that specify one amino acid or a stop signal."},
  {ch:7, term:"Anticodon", def:"A three-base sequence on tRNA that is complementary to an mRNA codon."},
  {ch:7, term:"Genetic code", def:"The 'dictionary' relating each codon to an amino acid or stop signal; redundant."},
  {ch:7, term:"Start codon", def:"AUG — begins translation and codes for methionine."},
  {ch:7, term:"Stop codons", def:"UAA, UAG, UGA — signal the ribosome to end translation (no amino acid)."},
  {ch:7, term:"RNA polymerase", def:"The enzyme that builds an RNA strand during transcription."},
  {ch:7, term:"Promoter", def:"A DNA sequence that signals a gene's start and which strand is the template."},
  {ch:7, term:"Template strand", def:"The one DNA strand that is actually transcribed into RNA."},
  {ch:7, term:"5′ cap & poly-A tail", def:"Modifications added to eukaryotic mRNA that help ribosomes attach to the correct end."},
  {ch:7, term:"Introns", def:"Non-coding portions of pre-mRNA that are removed before translation."},
  {ch:7, term:"Exons", def:"The coding portions spliced together to form mature mRNA (EXpressed / EXit the nucleus)."},
  {ch:7, term:"Spliceosome", def:"The complex that removes introns and splices exons together."},
  {ch:7, term:"Operon", def:"A group of bacterial genes plus a promoter and operator, controlled together (e.g., lac operon)."},
  {ch:7, term:"Repressor", def:"A protein that binds the operator to block transcription of an operon."},
  {ch:7, term:"Epigenetics", def:"Changes in gene expression that don't change the DNA sequence (e.g., methyl tags)."},
  {ch:7, term:"Transcription factor", def:"A protein that binds DNA (at the promoter/TATA box) so RNA polymerase can start transcription."},
  {ch:7, term:"Mutation", def:"Any change in a cell's DNA sequence."},
  {ch:7, term:"Substitution mutation", def:"One base replaced by another; can be silent, missense, or nonsense."},
  {ch:7, term:"Frameshift mutation", def:"An insertion/deletion not a multiple of 3 that shifts the reading frame."},
  {ch:7, term:"Allele", def:"A variant (version) of a gene."},
  {ch:7, term:"Virus", def:"An infectious agent: genetic material (DNA or RNA) in a protein coat; not a cell, can't reproduce alone."},
  {ch:7, term:"Bacteriophage", def:"A virus that infects bacteria ('phage')."},
  {ch:7, term:"Lytic infection", def:"Virus replicates immediately and bursts (lyses) the host cell."},
  {ch:7, term:"Lysogenic infection", def:"Viral DNA replicates with the host genome (as a prophage); cell survives until triggered to go lytic."},
  {ch:7, term:"Latent infection", def:"Viral DNA lies dormant inside an animal cell and can reactivate later (e.g., herpes)."},
  {ch:7, term:"Reverse transcriptase", def:"HIV's enzyme that makes DNA from the viral RNA genome (RNA → DNA)."},
  {ch:7, term:"Viroid", def:"A naked circle of RNA (no protein coat) that infects plants."},
  {ch:7, term:"Prion", def:"An infectious misfolded protein that forces other proteins to misfold; no nucleic acid."},

  // Chapter 8
  {ch:8, term:"DNA replication", def:"Copying the entire genome before cell division; semiconservative."},
  {ch:8, term:"Semiconservative replication", def:"Each new DNA molecule keeps one original strand and one new strand."},
  {ch:8, term:"Helicase", def:"Enzyme that unwinds and unzips the DNA double helix."},
  {ch:8, term:"DNA polymerase", def:"Enzyme that adds complementary nucleotides to build new DNA and proofreads."},
  {ch:8, term:"Ligase", def:"Enzyme that seals (covalently bonds) adjacent DNA segments."},
  {ch:8, term:"Origin of replication", def:"A site where replication begins; eukaryotic chromosomes have many."},
  {ch:8, term:"Binary fission", def:"Asexual division of a prokaryote into two identical daughter cells."},
  {ch:8, term:"Chromatin", def:"DNA together with its associated proteins (collective term)."},
  {ch:8, term:"Nucleosome", def:"DNA wrapped around eight histone proteins — 'beads on a string'."},
  {ch:8, term:"Histones", def:"Proteins that DNA wraps around to package the chromosome."},
  {ch:8, term:"Sister chromatids", def:"The two identical attached copies that make up a replicated chromosome."},
  {ch:8, term:"Centromere", def:"The region holding sister chromatids together; splits during anaphase."},
  {ch:8, term:"Cell cycle", def:"One complete round of cell division: interphase → mitosis → cytokinesis."},
  {ch:8, term:"Interphase", def:"The LONGEST part of the cell cycle (G1, S, G2); the cell grows and replicates its DNA."},
  {ch:8, term:"G1 phase", def:"Growth phase; cell does its normal job and makes organelles."},
  {ch:8, term:"S phase", def:"DNA synthesis (replication) phase; chromosomes become two sister chromatids."},
  {ch:8, term:"G2 phase", def:"Second growth phase; cell makes proteins needed for mitosis."},
  {ch:8, term:"G0 phase", def:"A resting, non-dividing state. The cell is alive and functioning — NOT dead (e.g., neurons)."},
  {ch:8, term:"Mitosis", def:"Division of a eukaryotic cell's chromosomes into two identical nuclei."},
  {ch:8, term:"Prophase", def:"Chromosomes condense & become visible; spindle forms; nuclear envelope breaks down."},
  {ch:8, term:"Metaphase", def:"Chromosomes line up single file along the cell's equator."},
  {ch:8, term:"Anaphase", def:"Centromeres split; sister chromatids separate toward opposite poles."},
  {ch:8, term:"Telophase", def:"Chromosomes reach the poles & decondense; nuclear envelopes re-form."},
  {ch:8, term:"Cytokinesis", def:"Division of the cytoplasm into two daughter cells."},
  {ch:8, term:"Cleavage furrow", def:"The pinching ring that divides an animal cell during cytokinesis."},
  {ch:8, term:"Cell plate", def:"The structure that forms a new cell wall between dividing plant cells."},
  {ch:8, term:"Apoptosis", def:"Programmed (planned) cell death; sculpts structures like fingers and toes."},
  {ch:8, term:"Checkpoint", def:"A control point in the cell cycle that screens for damaged DNA before proceeding."},
  {ch:8, term:"Benign tumor", def:"A slow, encapsulated tumor that stays put and doesn't spread."},
  {ch:8, term:"Malignant tumor", def:"A tumor that invades tissue and can metastasize; the basis of cancer."},
  {ch:8, term:"Metastasis", def:"The spread of cancer cells from the original tumor through blood or lymph."},

  // Chapter 9
  {ch:9, term:"Asexual reproduction", def:"One parent copies its DNA and splits; offspring nearly identical."},
  {ch:9, term:"Sexual reproduction", def:"Two parents contribute genes; offspring are genetically varied."},
  {ch:9, term:"Diploid (2n)", def:"Two full sets of chromosomes, one from each parent (human = 46)."},
  {ch:9, term:"Haploid (n)", def:"One set of chromosomes (human gametes = 23)."},
  {ch:9, term:"Karyotype", def:"A size-ordered chart of all the chromosomes in a cell."},
  {ch:9, term:"Autosomes", def:"The 22 chromosome pairs that are the same in both sexes."},
  {ch:9, term:"Sex chromosomes", def:"The 23rd pair: XX = female, XY = male."},
  {ch:9, term:"Homologous chromosomes", def:"The two members of a pair — same genes/order, possibly different alleles."},
  {ch:9, term:"Meiosis", def:"Division producing four genetically unique haploid cells from one diploid cell."},
  {ch:9, term:"Germ cells", def:"Specialized diploid cells (in ovaries/testes) that undergo meiosis."},
  {ch:9, term:"Somatic cells", def:"All non-reproductive body cells; they divide by mitosis."},
  {ch:9, term:"Gamete", def:"A haploid sex cell (sperm or egg)."},
  {ch:9, term:"Fertilization", def:"The fusion of sperm and egg to form a diploid zygote."},
  {ch:9, term:"Zygote", def:"The diploid first cell of a new organism, formed at fertilization."},
  {ch:9, term:"Meiosis I", def:"The 'reduction division' that separates homologous chromosomes (in anaphase I)."},
  {ch:9, term:"Meiosis II", def:"Resembles mitosis; separates sister chromatids (in anaphase II)."},
  {ch:9, term:"Crossing over", def:"Exchange of segments between homologs in prophase I; makes recombinant chromatids."},
  {ch:9, term:"Recombinant chromatid", def:"A chromatid carrying a new allele combination after crossing over."},
  {ch:9, term:"Random (independent) orientation", def:"Each homologous pair lines up independently at metaphase I — 2ⁿ combinations."},
  {ch:9, term:"Random fertilization", def:"Any sperm can fertilize any egg, multiplying genetic diversity (>70 trillion combos per couple)."},
  {ch:9, term:"Monozygotic twins", def:"Identical twins — one zygote splits into two embryos."},
  {ch:9, term:"Dizygotic twins", def:"Fraternal twins — two eggs fertilized by two sperm."},
  {ch:9, term:"Polyploidy", def:"Having one or more extra complete SETS of chromosomes (e.g., triploid 3n)."},
  {ch:9, term:"Nondisjunction", def:"Failure of chromosomes/chromatids to separate in meiosis → extra or missing chromosomes."},
  {ch:9, term:"Trisomy", def:"Having three copies of one chromosome (e.g., Trisomy 21 = Down syndrome)."},
  {ch:9, term:"Down syndrome", def:"Most often caused by trisomy 21; risk increases with maternal age."}
];

/* ============================================================
   LAST YEAR'S ACTUAL FINAL — BIO 213, Dr. Babu, Version Y (100 pts)
   Transcribed from exam photos. Questions 22-27 were not in the
   photos (a page gap), so they are omitted. Answer keys + reasons
   are worked out from the textbook (not an official key).
   `scope:true` = the topic is within THIS year's Ch. 7-9 final.
   ============================================================ */
const OLD_EXAM = [
  {n:1, scope:true, tag:"Ch.7 · Mutations", q:"What type of mutation causes codons to be read out of sequence?",
   options:["Frameshift mutation","Point mutation","Insertion mutation","Deletion mutation","None of these"], answer:0,
   explain:"A frameshift (an insertion/deletion not a multiple of 3) shifts the reading frame, so every codon downstream is read out of sequence."},
  {n:2, scope:true, tag:"Ch.7 · DNA structure", q:"The basic unit of a DNA molecule is the:",
   options:["Sugar–phosphate backbone","Amino acid","Nucleotide","Nitrogenous base","Ribose sugar"], answer:2,
   explain:"The nucleotide (sugar + phosphate + nitrogenous base) is the building block (monomer) of DNA."},
  {n:3, scope:true, tag:"Ch.8 · Chromosomes", q:"Sister chromatids are:",
   options:["Genetically different.","Genetically identical.","Attached to each other at the centromere.","Genetically identical AND attached to each other at the centromere.","Genetically different and attached at the centromere."], answer:3,
   explain:"Sister chromatids are identical copies (made in S phase) joined at the centromere — so both 'identical' and 'attached at the centromere' must be true."},
  {n:4, scope:true, tag:"Ch.9 · Homologs", q:"Homologous chromosomes contain the same ____ but may contain different ____.",
   options:["genes, alleles","alleles, genes","genes, sister chromatids","sister chromatids, genes","alleles, sister chromatids"], answer:0,
   explain:"Homologs carry the same genes in the same order, but may carry different alleles (versions) of those genes."},
  {n:5, scope:true, tag:"Ch.7 · Gene expression", q:"Human DNA encodes:",
   options:["Proteins.","tRNA.","Regulatory sequences that control gene expression.","rRNA.","All answers are correct."], answer:4,
   explain:"DNA encodes proteins, all the RNAs (mRNA, tRNA, rRNA), and regulatory sequences — so all are correct."},
  {n:6, scope:true, tag:"Ch.7 · Complementary DNA", q:"If a gene has the DNA sequence AATCGACTACCGTA, then a complementary DNA probe has what sequence?",
   options:["TTAGCTGATGGCAT","AAUCGACUACCGUA","AATCGACTACCGTA","UUAGCUGACGGCAU","None of these are correct"], answer:0,
   explain:"A DNA probe is complementary AND made of DNA (so T, not U). Complement of AATCGACTACCGTA is TTAGCTGATGGCAT."},
  {n:7, scope:true, tag:"Ch.9 · Meiosis stages", q:"In meiosis, chromosomes containing sister chromatids (not homologous pairs) align along the center of the cell during:",
   options:["Metaphase I","Metaphase II","Interphase II","Prophase II","Prophase I"], answer:1,
   explain:"In metaphase II, individual chromosomes (each still 2 sister chromatids) line up single file — like mitosis. In metaphase I it's homologous PAIRS that line up."},
  {n:8, scope:true, tag:"Ch.8 · Replication enzymes", q:"The activity of which enzyme or protein would be needed LATEST in DNA synthesis?",
   options:["DNA ligase","Gyrase","DNA polymerase","Helicase","Primase"], answer:0,
   explain:"Order: gyrase/helicase unwind → primase lays primer → DNA polymerase extends → ligase seals the fragments LAST."},
  {n:9, scope:true, tag:"Ch.7 · Proteins", q:"Peptide bonds form between:",
   options:["Two R groups","Two carboxyl groups","Purines and pyrimidines","Two nucleotides","One amino group and one carboxyl group"], answer:4,
   explain:"A peptide bond links the amino group of one amino acid to the carboxyl group of the next."},
  {n:10, scope:true, tag:"Ch.7 · Translation", q:"The tRNA molecule has been called an adaptor molecule because:",
   options:["It binds to both DNA and RNA.","All tRNA molecules have been modified from mRNA.","It recognizes both RNA and an amino acid.","It binds to both amino acids and DNA.","It adapts to changes in the mRNA codons."], answer:2,
   explain:"tRNA 'adapts' between two languages: its anticodon reads the mRNA codon (RNA) while its other end carries the matching amino acid."},
  {n:11, scope:true, tag:"Ch.7 · Translation", q:"The complete list of components needed for initiation and elongation of translation includes:",
   options:["tRNA, mRNA, and amino acids","tRNA, DNA, and ribosomes","The large ribosomal subunit, tRNA, and mRNA","Both ribosomal subunits, tRNA with attached amino acids, and mRNA","Small ribosomal subunit and mRNA"], answer:3,
   explain:"Translation needs BOTH ribosomal subunits, mRNA, and tRNAs carrying their amino acids. DNA is not involved in translation."},
  {n:12, scope:true, tag:"Ch.7 · DNA structure", q:"In the Watson–Crick model of DNA, the polynucleotide chains are:",
   options:["Of unequal length","Both oriented in the same direction","Oriented in opposite directions","Arranged with the bases on the outside","Built with the nucleotides as the peripheral backbone"], answer:2,
   explain:"The two strands are antiparallel — they run in opposite directions (5′→3′ and 3′→5′)."},
  {n:13, scope:true, tag:"Ch.8 · Mitosis", q:"Mitotic cell division creates identical copies by replicating a cell's DNA ____ and then dividing ____.",
   options:["once, twice","once, once","twice, twice","twice, once","None of the answers are correct"], answer:1,
   explain:"Mitosis = replicate DNA once, divide once → two identical cells. (Meiosis is replicate once, divide twice.)"},
  {n:14, scope:true, tag:"Ch.8 · Mitosis", q:"The phase of mitosis in which the nuclear envelope begins to reform around the chromosomes is:",
   options:["Metaphase","Anaphase","Telophase","Prophase","Interphase"], answer:2,
   explain:"Telophase reverses prophase: chromosomes decondense and a new nuclear envelope re-forms at each pole."},
  {n:15, scope:false, tag:"Ch.5 · Photosynthesis (out of scope)", q:"What energy-rich organic compound is produced as a result of the Calvin cycle?",
   options:["Glucose","NADPH","CO₂","ATP","H₂O"], answer:0,
   explain:"The Calvin cycle builds sugar (glucose). NOTE: this is a Chapter 5 topic — not on this year's Ch. 7–9 final."},
  {n:16, scope:false, tag:"Ch.5 · Photosynthesis (out of scope)", q:"Light is required for the light-dependent reactions because:",
   options:["It energizes electrons in the reaction center","It is the source of electrons","It splits the water molecule","It splits ATP to power the light-independent reactions","None of the above"], answer:0,
   explain:"Light excites (energizes) electrons in the reaction-center chlorophyll. NOTE: Chapter 5 — out of this year's scope."},
  {n:17, scope:true, tag:"Ch.7 · Nucleotides", q:"A nucleotide contains which of the following?",
   options:["Fatty acid, glycerol, and phosphate","Amino acid and saccharide","Sugar, nitrogenous base, and phosphate","Amino acid and nitrogenous bases","Saturated and unsaturated fatty acids"], answer:2,
   explain:"A nucleotide = a sugar + a nitrogenous base + a phosphate group."},
  {n:18, scope:false, tag:"Ch.3/6 · Cells (out of scope)", q:"In animal cells, the primary organelle that generates molecules of ATP is the:",
   options:["Lysosome","Ribosome","Golgi body","Mitochondrion","None of these"], answer:3,
   explain:"The mitochondrion is the site of cellular respiration / ATP production. NOTE: background topic, not core Ch. 7–9."},
  {n:19, scope:true, tag:"Ch.7 · Proteins", q:"The primary building block (monomer) of proteins is:",
   options:["Four interconnected rings","A nucleotide","A fatty acid","An amino acid","A glucose molecule"], answer:3,
   explain:"Proteins are polymers of amino acids."},
  {n:20, scope:false, tag:"Ch.4 · Energy (out of scope)", q:"Enzymes speed up chemical reactions by:",
   options:["Lowering the amount of reactants needed","Supplying energy to the reaction","Maintaining temperature","Lowering the energy required to start a reaction (activation energy)","Raising the temperature of the surroundings"], answer:3,
   explain:"Enzymes lower the activation energy. NOTE: Chapter 4 — background, not core Ch. 7–9."},
  {n:21, scope:false, tag:"Ch.4/6 · Energy (out of scope)", q:"When a cell 'burns' food, which of the following are examples of POTENTIAL (stored) energy?",
   options:["Electrons moving through the ETC, proton gradient","Electrons moving through the ETC, and protons moving through ATP synthase","Electrons in chemical bonds, proton gradient, ATP","Protons moving through ATP synthase, ATP","All answers are correct"], answer:2,
   explain:"Potential energy is stored: electrons in chemical bonds, the proton gradient, and ATP. Anything 'moving' is kinetic. NOTE: Chapter 4/6 — out of scope."},
  /* Questions 22–27 were not in the photos. */
  {n:28, scope:true, tag:"Ch.7 · Proteins", q:"In addition to a unique side chain, every amino acid shares which of the following?",
   options:["An amino group & a peptide bond","A carboxyl group & a peptide bond","An amino group & a carboxyl group","The presence of two R groups","All of these"], answer:2,
   explain:"Every amino acid has a central carbon bonded to an amino group, a carboxyl group, an H, and a unique R (side) group. Peptide bonds form later, during translation."},
  {n:29, scope:true, tag:"Ch.7 · Mutations", q:"While many things may result from a mutation, a mutation itself actually results from which of the following?",
   options:["A change to chromosome arrangement","A change to protein structure","A change in the nucleotide sequence","A change in the amino acids","A change in phenotype"], answer:2,
   explain:"A mutation IS a change in the DNA (nucleotide) sequence. The other options are downstream consequences of that change."},
  {n:30, scope:true, tag:"Ch.7 · Genetic code", q:"If the genetic code is triplets, how many different amino acids are coded by an RNA made of just repeating UA's (UAUAUAUA…)?",
   options:["One","Two","Three","Four","Five"], answer:1,
   explain:"Read in triplets, UAUAUA… alternates two codons: UAU (Tyr) and AUA (Ile) → 2 amino acids."},
  {n:31, scope:true, tag:"Ch.7 · Translation", q:"Which one of the following is NOT a component of the translation initiation complex?",
   options:["Small ribosomal subunit","mRNA","RNA polymerase enzyme","tRNA","None of these are components"], answer:2,
   explain:"RNA polymerase carries out transcription, not translation. Initiation involves the ribosomal subunits, mRNA, and an initiator tRNA."},
  {n:32, scope:true, tag:"Ch.8/9 · Spindle", q:"A cell that could not form spindle fibers could not perform:",
   options:["Mitosis or meiosis","Mitosis","Meiosis","DNA replication","Protein synthesis"], answer:0,
   explain:"The spindle moves chromosomes in BOTH mitosis and meiosis, so neither could occur. Replication and protein synthesis don't need a spindle."},
  {n:33, scope:true, tag:"Ch.8 · Mitosis", q:"Which of the following is the FIRST event that occurs in prophase of mitosis?",
   options:["The chromosomes are duplicated.","The chromosomes begin to condense.","The nuclear envelope starts to break up.","The mitotic spindle begins to form.","The cleavage furrow forms and deepens."], answer:1,
   explain:"Within prophase, chromosomes first condense. (Duplication already happened earlier, in S phase of interphase.)"},
  {n:34, scope:true, tag:"Ch.8 · Cell cycle", q:"A cell in the G₀ state is a cell:",
   options:["That will shortly enter G₁","That has just finished mitosis but not cytokinesis","That has ceased growing and dividing","Undergoing cytokinesis","Just after cytokinesis"], answer:2,
   explain:"G₀ is a non-dividing resting state — the cell is alive and functioning but has stopped the cell cycle. (Matches the professor's point: G₀ cells never divide but are not dead.)"},
  {n:35, scope:true, tag:"Ch.8 · Cell cycle", q:"For cells grown in the laboratory, the largest part of the cell cycle is:",
   options:["Interphase","Mitosis","Cytokinesis","They are all about equal","There is no rule"], answer:0,
   explain:"Interphase (G1, S, G2) is by far the longest part of the cell cycle — exactly the professor's point."},
  {n:36, scope:true, tag:"Ch.9 · Crossing over", q:"Pieces of what are exchanged during homologous crossing-over?",
   options:["Whole sister chromatids of different chromosomes","Different maternal and paternal chromosomes (e.g., chromosome 2 and 22)","A chromatid of the maternal chromosome and a chromatid of the paternal chromosome","Centromeres","X and Y chromosome"], answer:2,
   explain:"Crossing over swaps segments between a chromatid of the maternal homolog and a chromatid of the paternal homolog."},
  {n:37, scope:true, tag:"Ch.9 · Homologs", q:"Homologous chromosomes have:",
   options:["Different genes, but can have the same alleles.","Different genes and alleles.","The same genes but can have different alleles.","The same genes and alleles.","None of these are correct."], answer:2,
   explain:"Homologs have the same genes in the same order, but can carry different alleles of those genes."},
  {n:38, scope:true, tag:"Ch.8 · Cell cycle", q:"In the cell cycle, the G1 phase represents:",
   options:["The time of DNA synthesis","Splitting of the chromosomes into chromatids","The stage just prior to mitosis","A period of growth","The stage just prior to meiosis"], answer:3,
   explain:"G1 is a growth 'gap' phase. (DNA synthesis is S phase; G2 is the stage just before mitosis.)"},
  {n:39, scope:true, tag:"Ch.9 · Meiosis", q:"The process of meiosis results in:",
   options:["The production of four identical cells","No change in chromosome number from parental cells","A doubling of the chromosome number","A reduction in chromosome number","Two interphase cells"], answer:3,
   explain:"Meiosis halves the chromosome number (2n → n), producing four genetically DIFFERENT haploid cells."},
  {n:40, scope:true, tag:"Ch.9 · Diploid", q:"Diploid means having:",
   options:["Two complete sets of chromosomes.","Two chromosomes in each somatic cell.","One complete set of chromosomes.","Two chromosomes in each gamete.","Three complete sets of chromosomes."], answer:0,
   explain:"Diploid (2n) = two complete sets of chromosomes, one from each parent."},
  {n:41, scope:true, tag:"Ch.8 · Chromosomes", q:"A cell condenses its DNA into ____ in preparation for mitosis.",
   options:["Centrioles","Chromatin","Nucleosomes","Chromosomes","Centromere"], answer:3,
   explain:"Loosely packed chromatin condenses into compact, visible chromosomes before division."},
  {n:42, scope:true, tag:"Ch.9 · Meiosis", q:"After meiosis in humans, a diploid germ cell produces cells with half the chromosome number, generating ____ haploid nuclei.",
   options:["23","46","2","4","3"], answer:3,
   explain:"One diploid cell → four haploid nuclei (two divisions, one replication)."},
  {n:43, scope:true, tag:"Ch.7 · Mutations", q:"What type of mutation is one in which the length of a gene is ALWAYS decreased?",
   options:["Insertion mutation","Frameshift mutation","Deletion mutation","Point mutation","None of these"], answer:2,
   explain:"A deletion always removes nucleotides, so the gene always gets shorter. (Insertions lengthen it; point/substitution keeps length the same.)"},
  {n:44, scope:true, tag:"Ch.7 · DNA structure", q:"If one side of a DNA molecule is 5′-GTTCAC-3′, the opposite strand reads (left-to-right):",
   options:["3′-GTTCAC-5′","3′-GUUGAG-5′","3′-CAAGUG-5′","3′-CAAGTG-5′","5′-GTTCAC-3′"], answer:3,
   explain:"The complement of GTTCAC is CAAGTG, and the strand is antiparallel → 3′-CAAGTG-5′. (It's DNA, so T not U.)"},
  {n:45, scope:true, tag:"Ch.9 · Crossing over", q:"The process by which homologous chromosomes exchange genetic material:",
   options:["Is random fertilization.","Occurs only in animals.","Is independent assortment.","Is crossing over.","Occurs only in bacteria."], answer:3,
   explain:"Crossing over (in prophase I) is the physical exchange of segments between homologs."},
  {n:46, scope:true, tag:"Ch.9 · Recombination", q:"Recombinant chromosomes have a mix of paternal and maternal alleles due to:",
   options:["Linkage.","Crossing over.","Independent assortment.","Random fertilization.","Mutation."], answer:1,
   explain:"Crossing over physically combines maternal and paternal alleles onto the same chromatid → 'recombinant.'"},
  {n:47, scope:true, tag:"Ch.9 · Alleles", q:"Alternate forms of the same gene are called:",
   options:["Traits.","Alleles.","Chromosomes.","Centromeres.","Chromatids."], answer:1,
   explain:"An allele is a variant (version) of a gene."},
  {n:48, scope:true, tag:"Ch.9 · Chromosomes", q:"A single chromosome has:",
   options:["A single gene with a single allele.","Multiple genes each with multiple alleles.","Multiple genes each with a single allele.","A single gene with multiple alleles.","None of these"], answer:2,
   explain:"A chromosome carries many genes, but only one allele of each gene (its homolog carries the other allele)."},
  {n:49, scope:true, tag:"Ch.9 · Meiosis counting", q:"During meiosis in a 2n organism with just 6 chromosomes, how many chromatids are present at the BEGINNING of meiosis II?",
   options:["2","4","6","8","12"], answer:2,
   explain:"2n=6 replicates to 12 chromatids. Meiosis I separates homologs → each cell now has 3 chromosomes × 2 chromatids = 6 chromatids entering meiosis II."},
  {n:50, scope:true, tag:"Ch.9 · Meiosis stages", q:"In meiosis, the centromeres divide at:",
   options:["Telophase","Metaphase I","Metaphase II","Anaphase I","Anaphase II"], answer:4,
   explain:"Centromeres split (sister chromatids separate) at anaphase II — exactly the professor's point. In anaphase I, homologs separate but centromeres stay intact."}
];

/* ------------------------------------------------------------
   Extra high-yield Ch. 7-9 questions to round out the Predicted
   Final — topics the professor stressed that the old exam
   under-tested (RNA processing, transcription/translation naming,
   operons, viruses, nondisjunction, cancer checkpoints).
   ------------------------------------------------------------ */
const PREDICTED_EXTRA = [
  {q:"What holds the two strands of a DNA double helix together?",
   options:["Hydrogen bonds between complementary bases","Covalent bonds between the sugars","Peptide bonds between bases","Ionic bonds between phosphates"], answer:0,
   explain:"The A–T and C–G base pairs are joined by hydrogen bonds (the professor's first key point)."},
  {q:"The process that builds an RNA copy of a gene is called ____, and the process that builds a protein from that RNA is called ____.",
   options:["transcription; translation","translation; transcription","replication; translation","translation; replication"], answer:0,
   explain:"DNA → RNA = transcription; RNA → protein = translation."},
  {q:"Before a eukaryotic mRNA leaves the nucleus, it is processed. Which set of modifications is correct?",
   options:["A 5′ cap and poly-A tail are added, and introns are spliced out","A poly-A tail is added and exons are removed","Thymine replaces uracil throughout","The two ribosomal subunits are attached"], answer:0,
   explain:"Processing adds a 5′ cap and a poly-A tail and removes introns by splicing (done by spliceosomes); exons are kept."},
  {q:"Which structure removes introns from pre-mRNA (hnRNA)?",
   options:["The spliceosome","The ribosome","RNA polymerase","The centromere"], answer:0,
   explain:"Spliceosomes excise introns and join the exons together."},
  {q:"In the bacterial lac operon, when lactose is PRESENT:",
   options:["Lactose binds the repressor, it releases the operator, and the genes are transcribed","The repressor binds the operator more tightly and the genes stay off","RNA polymerase is destroyed","The promoter is deleted"], answer:0,
   explain:"Lactose binds and changes the repressor's shape so it falls off the operator, allowing transcription of the lactose-digesting genes."},
  {q:"A bacteriophage whose DNA integrates into the host chromosome and replicates with it WITHOUT immediately making new viruses is in a:",
   options:["Lysogenic infection","Lytic infection","Latent plant infection","Prion state"], answer:0,
   explain:"In a lysogenic infection the viral DNA (a prophage) replicates along with the host; stress can later switch it to the lytic (bursting) pathway."},
  {q:"Why are antibiotics useless against viral infections?",
   options:["Viruses lack the structures (cell walls, ribosomes) that antibiotics target","Viruses are too small for antibiotics","Antibiotics only work on eukaryotic cells","Viruses have thicker walls than bacteria"], answer:0,
   explain:"Antibiotics attack bacterial structures viruses don't have, so they can't affect viruses."},
  {q:"Nondisjunction during meiosis can produce a gamete with an extra chromosome. Fertilization then yields a zygote with three copies of that chromosome, called a:",
   options:["Trisomy","Monosomy","Haploid","Polyploid set"], answer:0,
   explain:"Trisomy = three copies of one chromosome (e.g., trisomy 21 = Down syndrome)."},
  {q:"Cell-cycle checkpoints are important mainly because they:",
   options:["Help stop cells with damaged DNA from dividing","Make mitosis run continuously in every cell","Speed up DNA replication","Remove the nucleus before division"], answer:0,
   explain:"Checkpoints verify each stage and screen for DNA damage, triggering repair or apoptosis — failure of this control underlies cancer."},
  {q:"For a species with 4 pairs of homologous chromosomes, how many genetically different gametes can random orientation at metaphase I alone produce?",
   options:["16 (2⁴)","8","4","24"], answer:0,
   explain:"Each pair orients independently: 2ⁿ. For 4 pairs, 2⁴ = 16. (Humans, 23 pairs → 2²³ ≈ 8.4 million.)"},
  {q:"A start codon (AUG) signals the start of translation and codes for which amino acid?",
   options:["Methionine","Tryptophan","Lysine","Glycine"], answer:0,
   explain:"AUG is the start codon and codes for methionine. UAA, UAG, and UGA are the stop codons."},
  {q:"An infectious agent that is simply a misfolded protein, with no nucleic acid, is a:",
   options:["Prion","Viroid","Retrovirus","Bacteriophage"], answer:0,
   explain:"A prion is an infectious misfolded protein. A viroid is naked RNA; both are simpler than viruses."},
  {q:"In which direction is a DNA strand read, from start to end?",
   options:["5′ to 3′","3′ to 5′","Either direction, it doesn't matter","Center outward"], answer:0,
   explain:"DNA (and RNA) strands are read 5′ → 3′ (the professor's point). The two strands are antiparallel, so the partner runs 3′ → 5′."},
  {q:"During which stage of MITOSIS do sister chromatids separate and move to opposite poles?",
   options:["Anaphase","Metaphase","Prophase","Telophase"], answer:0,
   explain:"Sister chromatids separate in anaphase of mitosis (and in anaphase II of meiosis) — exactly the professor's point."},
  {q:"DNA replication is described as 'semiconservative' because each new double helix:",
   options:["Keeps one original strand and one newly made strand","Is made of two brand-new strands","Keeps both original strands together","Contains one strand of RNA"], answer:0,
   explain:"Each old strand serves as a template, so every new molecule conserves one original strand and one new one."},
  {q:"Which type of RNA combines with proteins to form the ribosome itself?",
   options:["rRNA","mRNA","tRNA","hnRNA"], answer:0,
   explain:"Ribosomal RNA (rRNA) joins with proteins to build the ribosome, the site of translation. mRNA carries the message; tRNA brings amino acids."},
  {q:"A human somatic cell with 46 chromosomes divides by mitosis. Each daughter cell has how many chromosomes?",
   options:["46","23","92","2"], answer:0,
   explain:"Mitosis produces two identical daughter cells, each with the SAME chromosome number as the parent — 46."},
  {q:"In a eukaryotic cell, where do transcription and translation occur, respectively?",
   options:["Transcription in the nucleus; translation at a ribosome","Both in the nucleus","Both at the ribosome","Transcription at the ribosome; translation in the nucleus"], answer:0,
   explain:"Transcription happens in the nucleus (where the DNA is); the processed mRNA then exits to a ribosome for translation."},
  {q:"Which type of tumor lacks a capsule, invades nearby tissue, and can spread (metastasize) through blood or lymph?",
   options:["Malignant tumor","Benign tumor","Apoptotic tumor","Latent tumor"], answer:0,
   explain:"Malignant tumors invade and metastasize — the basis of cancer. Benign tumors are encapsulated and stay put."},
  {q:"Programmed, planned cell death — for example, the death of cells between developing fingers — is called:",
   options:["Apoptosis","Mitosis","Metastasis","Binary fission"], answer:0,
   explain:"Apoptosis is normal, tightly regulated cell death that sculpts the body during development."},
  {q:"In plant cells, cytokinesis is completed by formation of a ____, whereas animal cells use a ____.",
   options:["cell plate; cleavage furrow","cleavage furrow; cell plate","spindle; centromere","prophase; telophase"], answer:0,
   explain:"Plant cells build a cell plate (new wall) down the middle; animal cells pinch apart with a cleavage furrow."},
  {q:"Random fertilization adds to genetic diversity because:",
   options:["Any of a person's ~8 million possible gametes can combine with any of a partner's ~8 million","Each gamete is genetically identical to the parent","It doubles the chromosome number each generation","Only one type of sperm can fertilize an egg"], answer:0,
   explain:"Because any egg can meet any sperm, one couple can produce over 70 trillion genetically unique offspring — and that's before crossing over."}
];

/* ============================================================
   PREDICTED FINAL 2 — a second, fully unique 50-question set
   written in the same style as Dr. Babu's old final (5 options,
   counting/sequence/"which is NOT"/phase-naming questions),
   covering the same Ch. 7-9 weighting. None of these duplicate
   the Old Final or Predicted Final pools.
   ============================================================ */
const PREDICTED2 = [
  // ---- Chapter 7: DNA, transcription, translation, mutations, gene expression, viruses ----
  {tag:"Ch.7 · DNA structure", q:"According to Chargaff's rule, if a DNA molecule is 20% adenine, what percentage is guanine?",
   options:["20%","30%","40%","60%","80%"], answer:1,
   explain:"A = T, so 20% A means 20% T (40% total). The remaining 60% is split evenly between G and C, so guanine = 30%."},
  {tag:"Ch.7 · DNA structure", q:"Which pair of bases is held together by THREE hydrogen bonds in DNA?",
   options:["Adenine and thymine","Guanine and cytosine","Adenine and guanine","Thymine and cytosine","Uracil and adenine"], answer:1,
   explain:"G–C pairs share three hydrogen bonds; A–T pairs share two. (Uracil appears in RNA, not DNA.)"},
  {tag:"Ch.7 · Central dogma", q:"Which sequence correctly represents the flow of genetic information described by the central dogma?",
   options:["Protein → RNA → DNA","DNA → RNA → protein","RNA → DNA → protein","DNA → protein → RNA","RNA → protein → DNA"], answer:1,
   explain:"DNA is transcribed to RNA, which is translated to protein: DNA → RNA → protein."},
  {tag:"Ch.7 · Transcription", q:"The enzyme that adds RNA nucleotides during transcription is:",
   options:["DNA polymerase","Helicase","RNA polymerase","Ligase","Reverse transcriptase"], answer:2,
   explain:"RNA polymerase builds the RNA strand by reading the DNA template."},
  {tag:"Ch.7 · Transcription", q:"If a DNA template strand reads 3′-TACGGCATT-5′, the mRNA transcribed from it is:",
   options:["5′-AUGCCGUAA-3′","5′-ATGCCGTAA-3′","5′-UACGGCAUU-3′","5′-AUGGGCAUU-3′","3′-AUGCCGUAA-5′"], answer:0,
   explain:"mRNA is complementary and antiparallel, with U replacing T: template 3′-TACGGCATT-5′ → mRNA 5′-AUGCCGUAA-3′."},
  {tag:"Ch.7 · Translation", q:"How many amino acids are in the polypeptide built from the mRNA AUG–CCG–UAA?",
   options:["One","Two","Three","Four","Zero"], answer:1,
   explain:"AUG = methionine, CCG = proline, UAA = STOP. The stop codon adds no amino acid, so the chain is 2 amino acids long."},
  {tag:"Ch.7 · Translation", q:"A tRNA must carry the anticodon ____ in order to read the mRNA codon 5′-GCA-3′.",
   options:["5′-CGU-3′","5′-UGC-3′","5′-GCA-3′","5′-CGT-3′","5′-ACG-3′"], answer:1,
   explain:"The anticodon is complementary and antiparallel to the codon. Codon 5′-GCA-3′ pairs with anticodon 3′-CGU-5′, which written 5′→3′ is UGC."},
  {tag:"Ch.7 · Translation", q:"Translation of a typical mRNA always begins at which codon?",
   options:["UAA","UGA","AUG","GGG","UAG"], answer:2,
   explain:"AUG is the start codon (it also codes methionine). UAA, UGA, and UAG are stop codons."},
  {tag:"Ch.7 · RNA processing", q:"During mRNA processing, the segments that are removed and NOT translated are the:",
   options:["Exons","Introns","Codons","Anticodons","Promoters"], answer:1,
   explain:"Introns are spliced out; exons are kept and joined (EXons are EXpressed / EXit the nucleus)."},
  {tag:"Ch.7 · RNA processing", q:"A 5′ cap and a poly-A tail are added to which molecule, and where?",
   options:["mRNA, in the nucleus","tRNA, in the cytoplasm","DNA, in the nucleus","rRNA, at the ribosome","Protein, in the Golgi"], answer:0,
   explain:"In the nucleus, eukaryotic mRNA gets a 5′ cap and poly-A tail before exiting to be translated."},
  {tag:"Ch.7 · Mutations", q:"A substitution mutation that changes a codon but still specifies the SAME amino acid is called a:",
   options:["Frameshift mutation","Nonsense mutation","Silent mutation","Insertion mutation","Deletion mutation"], answer:2,
   explain:"Because the genetic code is redundant, some base changes still code the same amino acid — a silent mutation."},
  {tag:"Ch.7 · Mutations", q:"A single nucleotide is inserted into the middle of a gene. This is most likely to:",
   options:["Have no effect at all","Shift the reading frame and alter every downstream codon","Add exactly one amino acid","Delete the promoter","Convert the DNA into RNA"], answer:1,
   explain:"An insertion that is not a multiple of three causes a frameshift, scrambling all codons after it."},
  {tag:"Ch.7 · Mutations", q:"Sickle-cell disease is caused by which kind of mutation in the hemoglobin gene?",
   options:["A single base substitution","A whole-chromosome deletion","Polyploidy","Nondisjunction","An extra set of genes"], answer:0,
   explain:"Sickle cell results from a single base substitution that changes one amino acid in hemoglobin."},
  {tag:"Ch.7 · Mutations", q:"An external agent such as UV light, X-rays, or tobacco smoke that causes mutations is called a:",
   options:["Mutagen","Codon","Histone","Plasmid","Ribozyme"], answer:0,
   explain:"A mutagen is any outside agent that induces mutations in DNA."},
  {tag:"Ch.7 · Gene regulation", q:"In a bacterial operon, the repressor protein blocks transcription by binding to the:",
   options:["Promoter","Operator","Ribosome","Terminator","Poly-A tail"], answer:1,
   explain:"The repressor binds the operator (located between the promoter and the genes), preventing RNA polymerase from transcribing."},
  {tag:"Ch.7 · Gene regulation", q:"Changes in gene expression that do NOT alter the underlying DNA sequence (for example, methyl tags) are studied in the field of:",
   options:["Epigenetics","Genomics","Translation","Replication","Karyotyping"], answer:0,
   explain:"Epigenetics covers heritable changes in gene activity without changes to the DNA sequence itself."},
  {tag:"Ch.7 · Viruses", q:"Which of the following is NOT a part of a basic virus?",
   options:["Genetic material (DNA or RNA)","A protein coat","A ribosome","(some viruses) an envelope","A specific shape"], answer:2,
   explain:"Viruses have no ribosomes — they hijack the host cell's ribosomes to make proteins."},
  {tag:"Ch.7 · Viruses", q:"In a lytic infection, the virus:",
   options:["Inserts its DNA quietly into the host chromosome for generations","Immediately makes new viruses and bursts (lyses) the host cell","Remains dormant for years","Converts the host cell into a bacterium","Is destroyed by antibiotics"], answer:1,
   explain:"The lytic pathway replicates immediately and ruptures the cell to release new viruses."},
  {tag:"Ch.7 · Viruses", q:"HIV is a retrovirus. The enzyme reverse transcriptase allows it to:",
   options:["Make DNA from its RNA genome","Translate RNA into protein","Add a poly-A tail to mRNA","Split the host cell in two","Remove introns from mRNA"], answer:0,
   explain:"Reverse transcriptase copies the viral RNA into DNA, which then integrates into the host chromosome."},

  // ---- Chapter 8: replication, binary fission, mitosis, cancer ----
  {tag:"Ch.8 · Replication", q:"During DNA replication, which enzyme unwinds and 'unzips' the double helix by breaking hydrogen bonds?",
   options:["Ligase","Helicase","DNA polymerase","RNA polymerase","Primase"], answer:1,
   explain:"Helicase separates the two strands so each can serve as a template."},
  {tag:"Ch.8 · Replication", q:"Which enzyme both builds new DNA strands and proofreads them for errors?",
   options:["Helicase","Ligase","DNA polymerase","Gyrase","Reverse transcriptase"], answer:2,
   explain:"DNA polymerase adds complementary nucleotides and proofreads, giving an extremely low error rate."},
  {tag:"Ch.8 · Replication", q:"DNA replication is called 'semiconservative' because each new double helix contains:",
   options:["Two brand-new strands","Two original strands","One original strand and one new strand","Only RNA","Three strands"], answer:2,
   explain:"Each new molecule conserves one strand from the original and pairs it with one newly built strand."},
  {tag:"Ch.8 · Binary fission", q:"Bacteria and archaea reproduce asexually by:",
   options:["Mitosis","Meiosis","Binary fission","Fertilization","Crossing over"], answer:2,
   explain:"Prokaryotes copy their single circular chromosome and split into two identical cells by binary fission."},
  {tag:"Ch.8 · Chromosomes", q:"DNA wrapped around a group of eight histone proteins forms a structure called a:",
   options:["Nucleosome","Centromere","Centriole","Spindle fiber","Ribosome"], answer:0,
   explain:"Nucleosomes (DNA + histones, like beads on a string) are the basic packaging unit of chromatin."},
  {tag:"Ch.8 · Cell cycle", q:"In which phase of interphase is the cell's DNA actually copied?",
   options:["G1 phase","S phase","G2 phase","M phase","G0 phase"], answer:1,
   explain:"DNA is synthesized (replicated) during the S (synthesis) phase. G1 and G2 are growth phases."},
  {tag:"Ch.8 · Mitosis", q:"A cell in G1 has 14 chromosomes. After S phase, how many chromatids does it contain?",
   options:["7","14","28","42","56"], answer:2,
   explain:"S phase replicates each chromosome into two sister chromatids: 14 chromosomes × 2 = 28 chromatids."},
  {tag:"Ch.8 · Mitosis", q:"Which lists the stages of mitosis in the correct order?",
   options:["Metaphase, prophase, telophase, anaphase","Prophase, metaphase, anaphase, telophase","Prophase, anaphase, metaphase, telophase","Telophase, anaphase, metaphase, prophase","Anaphase, prophase, telophase, metaphase"], answer:1,
   explain:"PMAT: prophase → metaphase → anaphase → telophase."},
  {tag:"Ch.8 · Mitosis", q:"Chromosomes line up single file along the equator (center) of the cell during:",
   options:["Prophase","Metaphase","Anaphase","Telophase","Interphase"], answer:1,
   explain:"Metaphase = chromosomes aligned at the middle of the cell, ensuring each daughter gets one copy."},
  {tag:"Ch.8 · Mitosis", q:"A wound-healing skin cell divides by mitosis. Compared with the parent cell, each daughter cell is:",
   options:["Genetically identical with the same chromosome number","Genetically unique with half the chromosome number","Haploid","Genetically identical but with double the chromosomes","A gamete"], answer:0,
   explain:"Mitosis produces two genetically identical daughter cells with the same chromosome number as the parent."},
  {tag:"Ch.8 · Cytokinesis", q:"In an animal cell, the cytoplasm is divided when a ring of protein pinches inward, forming a:",
   options:["Cell plate","Cleavage furrow","New cell wall","Spindle","Centromere"], answer:1,
   explain:"Animal cells form a cleavage furrow; plant cells instead build a cell plate that becomes a new wall."},
  {tag:"Ch.8 · Cancer", q:"A tumor whose cells break away and travel through the blood or lymph to seed new tumors elsewhere is described as:",
   options:["Benign","Encapsulated","Malignant (metastatic)","Apoptotic","Dormant"], answer:2,
   explain:"Malignant tumors invade and metastasize, spreading cancer to other parts of the body."},
  {tag:"Ch.8 · Cancer", q:"Cancer ultimately results from mutations in the genes that normally control:",
   options:["Eye color","The cell cycle (cell division)","Blood type","Hair texture","Digestion"], answer:1,
   explain:"When the genes regulating cell division and checkpoints mutate, cells divide uncontrollably — cancer."},
  {tag:"Ch.8 · Cell cycle", q:"A cell-cycle checkpoint detects badly damaged DNA. If the damage cannot be repaired, the cell may be triggered to undergo:",
   options:["Apoptosis (programmed cell death)","Binary fission","Crossing over","Fertilization","Transcription"], answer:0,
   explain:"Checkpoints can trigger apoptosis to eliminate cells with irreparable DNA damage, preventing cancer."},

  // ---- Chapter 9: meiosis, sexual reproduction, errors ----
  {tag:"Ch.9 · Ploidy", q:"A normal human gamete (sperm or egg) contains how many chromosomes?",
   options:["23","46","92","22","44"], answer:0,
   explain:"Gametes are haploid: 23 chromosomes. Fertilization restores the diploid number of 46."},
  {tag:"Ch.9 · Fertilization", q:"Fertilization of an egg by a sperm restores the ____ chromosome number in the zygote.",
   options:["haploid","diploid","triploid","tetraploid","monoploid"], answer:1,
   explain:"Two haploid gametes (n) fuse to form a diploid (2n) zygote."},
  {tag:"Ch.9 · Meiosis", q:"Crossing over between homologous chromosomes takes place during:",
   options:["Prophase I","Metaphase II","Anaphase II","Interphase","Telophase I"], answer:0,
   explain:"Homologs pair and exchange segments (crossing over) during prophase I of meiosis."},
  {tag:"Ch.9 · Meiosis", q:"Homologous chromosomes are separated from each other during which stage?",
   options:["Anaphase I","Anaphase II","Metaphase II","Prophase II","Telophase II"], answer:0,
   explain:"Meiosis I separates homologs (anaphase I). Sister chromatids are not separated until anaphase II."},
  {tag:"Ch.9 · Meiosis", q:"The final products of meiosis are:",
   options:["Two identical diploid cells","Four identical haploid cells","Four genetically different haploid cells","Two genetically different diploid cells","One large egg only"], answer:2,
   explain:"Meiosis yields four genetically unique haploid cells from one diploid cell."},
  {tag:"Ch.9 · Meiosis counting", q:"An organism has a diploid number of 2n = 8. How many chromosomes are in each cell immediately after meiosis I is complete?",
   options:["2","4","8","16","1"], answer:1,
   explain:"Meiosis I is the reduction division: 2n = 8 becomes n = 4 chromosomes per cell (each still has two sister chromatids)."},
  {tag:"Ch.9 · Variation", q:"The random way each homologous pair lines up at metaphase I, producing different gamete combinations, is called:",
   options:["Independent assortment","Crossing over","Nondisjunction","Replication","Apoptosis"], answer:0,
   explain:"Independent (random) assortment at metaphase I gives 2ⁿ possible chromosome combinations (≈8.4 million in humans)."},
  {tag:"Ch.9 · Homologs", q:"Two chromosomes that are the same length, have the same centromere position, and carry the same genes in the same order are called:",
   options:["Sister chromatids","Homologous chromosomes","Centrioles","Recombinants","Autosome-sex pairs"], answer:1,
   explain:"Homologous chromosomes match in structure and gene order (but may carry different alleles). Sister chromatids are identical copies of ONE chromosome."},
  {tag:"Ch.9 · Errors", q:"The failure of chromosomes to separate properly during meiosis is called:",
   options:["Nondisjunction","Crossing over","Independent assortment","Cytokinesis","Translation"], answer:0,
   explain:"Nondisjunction (at anaphase I or II) yields gametes with an extra or missing chromosome."},
  {tag:"Ch.9 · Errors", q:"A child born with three copies of chromosome 21 has:",
   options:["Turner syndrome","Klinefelter syndrome","Down syndrome (trisomy 21)","Triploidy","No abnormality"], answer:2,
   explain:"Trisomy 21 — three copies of chromosome 21 — causes Down syndrome."},
  {tag:"Ch.9 · Errors", q:"A zygote that ends up with three complete sets of chromosomes (3n) is an example of:",
   options:["Monosomy","Polyploidy (triploidy)","A normal diploid","Haploidy","A point mutation"], answer:1,
   explain:"Having one or more extra full chromosome SETS is polyploidy; 3n specifically is triploidy."},
  {tag:"Ch.9 · Sex chromosomes", q:"In humans, an individual who is XY is:",
   options:["Female","Male","Has Turner syndrome","Triploid","A gamete"], answer:1,
   explain:"XX = female, XY = male. The X and Y are the sex chromosomes; the other 22 pairs are autosomes."},
  {tag:"Ch.9 · Twins", q:"Identical (monozygotic) twins arise when:",
   options:["Two eggs are fertilized by two sperm","One fertilized egg (zygote) splits into two embryos","Two sperm fertilize one egg","Nondisjunction occurs in the father","An egg develops without fertilization"], answer:1,
   explain:"Monozygotic twins come from ONE zygote that splits, so they are genetically identical. Fraternal twins come from two separate zygotes."},
  {tag:"Ch.9 · Mitosis vs meiosis", q:"Which process does NOT contribute to genetic variation among offspring?",
   options:["Crossing over","Independent assortment","Random fertilization","Mitosis","Mutation"], answer:3,
   explain:"Mitosis makes identical copies, so it does not generate variation. The other three (plus mutation) all increase diversity."},
  {tag:"Ch.9 · Cell division", q:"A cell that cannot build a spindle apparatus would be unable to carry out:",
   options:["Only mitosis","Only meiosis","Both mitosis and meiosis","DNA replication","Transcription"], answer:2,
   explain:"The spindle moves chromosomes in both mitosis and meiosis, so neither could be completed without it."},
  {tag:"Ch.9 · Germ vs somatic", q:"In the human body, meiosis occurs only in:",
   options:["Skin cells","Muscle cells","Germ cells of the ovaries and testes","Red blood cells","Nerve cells"], answer:2,
   explain:"Only specialized germ cells in the ovaries and testes undergo meiosis; all other (somatic) cells divide by mitosis."},
  {tag:"Ch.7 · Genetic code", q:"The genetic code is described as 'redundant' (degenerate) because:",
   options:["Most amino acids are specified by more than one codon","Each codon codes for several different amino acids","DNA and RNA use the same bases","Every gene is copied twice","Codons are read two bases at a time"], answer:0,
   explain:"There are 64 codons but only 20 amino acids, so most amino acids are encoded by more than one codon — this redundancy is why some substitutions are silent."}
];
