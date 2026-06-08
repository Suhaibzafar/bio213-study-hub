/* ============================================================
   BIO 213 Study Hub — application logic
   ============================================================ */

/* ---------- helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const LETTERS = ["A", "B", "C", "D", "E", "F"];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Build a question instance with shuffled options, tracking the new correct index */
function prepareQuestion(q) {
  const opts = q.options.map((text, idx) => ({ text, correct: idx === q.answer }));
  const shuffled = shuffle(opts);
  return {
    q: q.q,
    options: shuffled,
    answer: shuffled.findIndex(o => o.correct),
    explain: q.explain
  };
}

/* ---------- view navigation ---------- */
function showView(name) {
  $$(".view").forEach(v => v.classList.remove("active"));
  $$(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  const view = $("#view-" + name);
  if (view) view.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$$(".tab-btn").forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.view)));
$$("[data-go]").forEach(el => el.addEventListener("click", () => showView(el.dataset.go)));

/* ---------- NOTES ---------- */
function renderNotes(ch) {
  $("#notesContent").innerHTML = NOTES[ch];
  $$("#notesChapterSwitch .chip").forEach(c => c.classList.toggle("active", c.dataset.ch === String(ch)));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
$$("#notesChapterSwitch .chip").forEach(chip =>
  chip.addEventListener("click", () => renderNotes(chip.dataset.ch))
);
renderNotes(7);

/* ============================================================
   QUIZ ENGINE (reused for chapter quizzes and the mock exam)
   ============================================================ */
function createQuiz(container, questions, opts = {}) {
  const title = opts.title || "Quiz";
  const onExit = opts.onExit || (() => {});

  const state = {
    questions: questions.map(prepareQuestion),
    current: 0,
    answers: new Array(questions.length).fill(null), // chosen index per question
    locked: new Array(questions.length).fill(false)
  };

  container.classList.remove("hidden");

  function render() {
    const i = state.current;
    const q = state.questions[i];
    const total = state.questions.length;
    const answered = state.answers[i];
    const isLocked = state.locked[i];

    container.innerHTML = `
      <div class="quiz-topbar">
        <h3>${title}</h3>
        <div class="progress-wrap"><div class="progress-bar" style="width:${((i) / total) * 100}%"></div></div>
        <span class="q-counter">Question ${i + 1} of ${total}</span>
      </div>
      <p class="question-text">${q.q}</p>
      <div class="options" id="optList"></div>
      <div class="explain" id="explainBox"></div>
      <div class="quiz-nav">
        <button class="btn-ghost" id="prevBtn">← Back</button>
        <div style="display:flex;gap:10px">
          <button class="btn-ghost" id="exitBtn">Exit</button>
          <button class="btn-primary" id="nextBtn" disabled>${i === total - 1 ? "Finish ✓" : "Next →"}</button>
        </div>
      </div>
    `;

    const optList = $("#optList", container);
    q.options.forEach((opt, idx) => {
      const div = document.createElement("button");
      div.className = "option";
      div.innerHTML = `<span class="letter">${LETTERS[idx]}</span><span>${opt.text}</span>`;
      if (isLocked) {
        div.classList.add("locked");
        if (idx === q.answer) div.classList.add("correct");
        if (idx === answered && answered !== q.answer) div.classList.add("wrong");
      }
      div.addEventListener("click", () => choose(idx));
      optList.appendChild(div);
    });

    if (isLocked) showExplain();

    $("#prevBtn", container).disabled = i === 0;
    $("#prevBtn", container).addEventListener("click", () => { if (i > 0) { state.current--; render(); } });
    $("#nextBtn", container).disabled = !isLocked;
    $("#nextBtn", container).addEventListener("click", () => {
      if (i === total - 1) finish();
      else { state.current++; render(); }
    });
    $("#exitBtn", container).addEventListener("click", () => {
      if (confirm("Exit this quiz? Your progress will be lost.")) { container.classList.add("hidden"); container.innerHTML = ""; onExit(); }
    });
  }

  function choose(idx) {
    const i = state.current;
    if (state.locked[i]) return;
    state.answers[i] = idx;
    state.locked[i] = true;
    render();
  }

  function showExplain() {
    const i = state.current;
    const q = state.questions[i];
    const correct = state.answers[i] === q.answer;
    const box = $("#explainBox", container);
    box.classList.add("show");
    if (!correct) box.classList.add("bad");
    box.innerHTML = `<b>${correct ? "✓ Correct!" : "✗ Not quite."}</b> ${q.explain}`;
  }

  function finish() {
    const total = state.questions.length;
    let score = 0;
    state.questions.forEach((q, i) => { if (state.answers[i] === q.answer) score++; });
    const pct = Math.round((score / total) * 100);
    const cls = pct >= 80 ? "good" : pct >= 60 ? "mid" : "low";
    const msg = pct >= 80 ? "Excellent — you're exam-ready on this material."
              : pct >= 60 ? "Solid start. Review the misses below and try again."
              : "Keep going — reread the notes for these topics, then retake.";

    let reviewHTML = "";
    state.questions.forEach((q, i) => {
      const yourIdx = state.answers[i];
      const correct = yourIdx === q.answer;
      reviewHTML += `
        <div class="review-item ${correct ? "r-correct" : "r-wrong"}">
          <div class="rq">${i + 1}. ${q.q}</div>
          ${!correct && yourIdx !== null ? `<div class="ra you-wrong">Your answer: ${q.options[yourIdx].text}</div>` : ""}
          <div class="ra right">Correct: ${q.options[q.answer].text}</div>
          <div class="rexp">${q.explain}</div>
        </div>`;
    });

    container.innerHTML = `
      <div class="results">
        <div class="results-head">
          <h3>${title} — Results</h3>
          <div class="score-ring ${cls}">${score} / ${total} &nbsp;(${pct}%)</div>
          <p>${msg}</p>
          <div class="quiz-nav" style="justify-content:center">
            <button class="btn-primary" id="retakeBtn">Retake</button>
            <button class="btn-ghost" id="doneBtn">Done</button>
          </div>
        </div>
        <div class="review-list">
          <h3>Full review</h3>
          ${reviewHTML}
        </div>
      </div>`;
    $("#retakeBtn", container).addEventListener("click", () => {
      container.innerHTML = "";
      createQuiz(container, questions, opts);
    });
    $("#doneBtn", container).addEventListener("click", () => {
      container.classList.add("hidden"); container.innerHTML = ""; onExit();
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render();
}

/* ---------- CHAPTER QUIZZES ---------- */
$$(".quiz-card").forEach(card => {
  card.addEventListener("click", () => {
    const ch = card.dataset.quiz;
    const bank = shuffle(QUIZZES[ch]); // randomize question order
    $("#quizPicker").classList.add("hidden");
    createQuiz($("#quizRunner"), bank, {
      title: `Chapter ${ch} Quiz`,
      onExit: () => $("#quizPicker").classList.remove("hidden")
    });
  });
});

/* ---------- MOCK FINAL EXAM ---------- */
$("#startExamBtn").addEventListener("click", () => {
  const all = [...QUIZZES[7], ...QUIZZES[8], ...QUIZZES[9]];
  const pick = shuffle(all).slice(0, 40);
  $("#examIntro").classList.add("hidden");
  createQuiz($("#examRunner"), pick, {
    title: "Mock Final (Ch. 7–9)",
    onExit: () => $("#examIntro").classList.remove("hidden")
  });
});

/* ============================================================
   FLASHCARDS
   ============================================================ */
const flash = {
  deck: [],
  index: 0
};

function buildDeck(which) {
  const source = which === "all" ? FLASHCARDS : FLASHCARDS.filter(c => c.ch === Number(which));
  flash.deck = shuffle(source);
  flash.index = 0;
  renderFlash();
}

function renderFlash() {
  const area = $("#flashArea");
  if (!flash.deck.length) { area.innerHTML = "<p>No cards.</p>"; return; }
  const card = flash.deck[flash.index];
  area.innerHTML = `
    <div class="flash-counter">Card ${flash.index + 1} of ${flash.deck.length}</div>
    <div class="flashcard" id="theCard">
      <div class="flash-inner">
        <div class="flash-face flash-front">
          <span class="flash-tag">Ch. ${card.ch}</span>
          <div class="term">${card.term}</div>
          <div class="hint">click to flip</div>
        </div>
        <div class="flash-face flash-back">
          <span class="flash-tag">Ch. ${card.ch}</span>
          <div class="def">${card.def}</div>
        </div>
      </div>
    </div>
    <div class="flash-controls">
      <button class="btn-ghost" id="prevCard">← Previous</button>
      <button class="btn-ghost" id="flipCard">Flip</button>
      <button class="btn-ghost" id="shuffleCards">Shuffle</button>
      <button class="btn-primary" id="nextCard">Next →</button>
    </div>
  `;
  const cardEl = $("#theCard", area);
  cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));
  $("#flipCard", area).addEventListener("click", e => { e.stopPropagation(); cardEl.classList.toggle("flipped"); });
  $("#prevCard", area).addEventListener("click", () => { flash.index = (flash.index - 1 + flash.deck.length) % flash.deck.length; renderFlash(); });
  $("#nextCard", area).addEventListener("click", () => { flash.index = (flash.index + 1) % flash.deck.length; renderFlash(); });
  $("#shuffleCards", area).addEventListener("click", () => { flash.deck = shuffle(flash.deck); flash.index = 0; renderFlash(); });
}

$$("#flashChapterSwitch .chip").forEach(chip =>
  chip.addEventListener("click", () => {
    $$("#flashChapterSwitch .chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    buildDeck(chip.dataset.deck);
  })
);

/* keyboard support for flashcards */
document.addEventListener("keydown", e => {
  if (!$("#view-flashcards").classList.contains("active")) return;
  const cardEl = $("#theCard");
  if (e.key === "ArrowRight") $("#nextCard")?.click();
  else if (e.key === "ArrowLeft") $("#prevCard")?.click();
  else if (e.key === " " || e.key === "Enter") { e.preventDefault(); cardEl?.classList.toggle("flipped"); }
});

/* init flashcards */
buildDeck("all");
