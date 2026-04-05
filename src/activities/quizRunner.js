/**
 * Quiz runner — renders multiple choice + true/false questions.
 * Registers as a renderer for "quiz" section type.
 */

import { registerRenderer } from '../content/sectionRenderer.js';
import { markSectionComplete, saveQuizScore } from '../progress/progressStore.js';
import { getMascotSvg } from '../graphics/mascot.js';

function renderQuizSection(sectionData, lesson, containerEl) {
  containerEl.innerHTML = '';

  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<h2>${sectionData.title}</h2>`;
  containerEl.appendChild(heading);

  const { questions, passingScore } = sectionData.data;
  const answers = new Array(questions.length).fill(null);

  const quizContainer = document.createElement('div');
  quizContainer.className = 'quiz-container';

  questions.forEach((q, qIdx) => {
    const questionEl = document.createElement('div');
    questionEl.className = 'quiz-question';
    questionEl.dataset.qidx = qIdx;

    const options = q.type === 'true-false'
      ? ['True', 'False']
      : q.options;

    questionEl.innerHTML = `
      <div class="question-number">Question ${qIdx + 1} of ${questions.length}</div>
      <div class="question-text">${q.question}</div>
      <div class="quiz-options">
        ${options.map((opt, oIdx) => `
          <div class="quiz-option" data-option="${oIdx}">
            <span class="option-radio"></span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" style="display:none"></div>
    `;

    // Click handlers for options
    const optionEls = questionEl.querySelectorAll('.quiz-option');
    optionEls.forEach((optEl) => {
      optEl.addEventListener('click', () => {
        if (questionEl.dataset.answered) return;
        const oIdx = parseInt(optEl.dataset.option);
        answers[qIdx] = oIdx;

        optionEls.forEach(el => el.classList.remove('selected'));
        optEl.classList.add('selected');
      });
    });

    quizContainer.appendChild(questionEl);
  });

  containerEl.appendChild(quizContainer);

  // Submit button
  const submitBtn = document.createElement('button');
  submitBtn.className = 'quiz-submit-btn';
  submitBtn.textContent = 'Check Answers';

  submitBtn.addEventListener('click', () => {
    // Check if all answered
    const unanswered = answers.findIndex(a => a === null);
    if (unanswered !== -1) {
      const qEl = quizContainer.querySelector(`[data-qidx="${unanswered}"]`);
      qEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      qEl.style.boxShadow = '0 0 0 3px var(--course-warning)';
      setTimeout(() => { qEl.style.boxShadow = ''; }, 2000);
      return;
    }

    // Score
    let correct = 0;
    questions.forEach((q, qIdx) => {
      const questionEl = quizContainer.querySelector(`[data-qidx="${qIdx}"]`);
      questionEl.dataset.answered = 'true';

      const correctIdx = q.type === 'true-false'
        ? (q.correct === true ? 0 : 1)
        : q.correct;

      const optionEls = questionEl.querySelectorAll('.quiz-option');
      const selectedIdx = answers[qIdx];

      if (selectedIdx === correctIdx) {
        correct++;
        optionEls[selectedIdx].classList.add('correct');
      } else {
        optionEls[selectedIdx].classList.add('incorrect');
        optionEls[correctIdx].classList.add('correct');
      }

      // Show feedback
      if (q.feedback) {
        const feedbackEl = questionEl.querySelector('.quiz-feedback');
        feedbackEl.className = `quiz-feedback ${selectedIdx === correctIdx ? 'correct' : 'incorrect'}`;
        feedbackEl.textContent = q.feedback;
        feedbackEl.style.display = '';
      }
    });

    // Show score
    const scorePercent = correct / questions.length;
    const passed = scorePercent >= (passingScore || 0.7);

    saveQuizScore(sectionData.id, correct, questions.length);

    submitBtn.style.display = 'none';

    const scoreEl = document.createElement('div');
    scoreEl.className = 'quiz-score';
    scoreEl.innerHTML = `
      <div class="score-value">${correct}/${questions.length}</div>
      <div class="score-label">${passed ? 'You passed!' : 'Keep trying!'}</div>
    `;
    containerEl.appendChild(scoreEl);

    // Mascot reaction
    const mascot = document.createElement('div');
    mascot.className = 'mascot-speech';
    mascot.style.marginTop = '16px';
    if (passed) {
      mascot.innerHTML = `
        <div class="mascot-img" style="width:60px;height:60px">${getMascotSvg('celebrating')}</div>
        <div class="speech-bubble">${correct === questions.length ? 'Perfect score! You really know your stuff!' : 'Nice work! You passed the quiz!'}</div>
      `;
      markSectionComplete(sectionData.id);
      window.dispatchEvent(new CustomEvent('section-completed', { detail: sectionData.id }));
    } else {
      mascot.innerHTML = `
        <div class="mascot-img" style="width:60px;height:60px">${getMascotSvg('thinking')}</div>
        <div class="speech-bubble">You need ${Math.ceil(passingScore * questions.length)} correct to pass. Review the lesson and try again!</div>
      `;
      // Add retry button
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn nav-btn-next';
      retryBtn.style.marginTop = '12px';
      retryBtn.textContent = '🔄 Retake Quiz';
      retryBtn.addEventListener('click', () => {
        renderQuizSection(sectionData, lesson, containerEl);
      });
      containerEl.appendChild(retryBtn);
    }
    containerEl.appendChild(mascot);
  });

  containerEl.appendChild(submitBtn);
  return { requireInteraction: true };
}

// Register with the section renderer
registerRenderer('quiz', renderQuizSection);
