/**
 * Fill-in-the-blank activity.
 * Students complete a prompt template by filling in blanks.
 */

export function renderFillInBlank(containerEl, data, onComplete) {
  containerEl.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'fill-blank-container';

  if (data.instruction) {
    const instr = document.createElement('p');
    instr.style.marginBottom = '16px';
    instr.style.color = 'var(--text-secondary)';
    instr.innerHTML = data.instruction;
    wrapper.appendChild(instr);
  }

  // Parse template and create inputs for blanks
  const templateEl = document.createElement('div');
  templateEl.className = 'fill-blank-template';

  const parts = data.template.split(/\[BLANK\]/);
  const inputs = [];

  parts.forEach((part, i) => {
    const span = document.createElement('span');
    span.innerHTML = part;
    templateEl.appendChild(span);

    if (i < parts.length - 1 && data.blanks[i]) {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'blank-input';
      input.placeholder = data.blanks[i].hint || '...';
      input.dataset.blankIdx = i;
      inputs.push(input);
      templateEl.appendChild(input);
    }
  });

  wrapper.appendChild(templateEl);

  // Check button
  const checkBtn = document.createElement('button');
  checkBtn.className = 'quiz-submit-btn';
  checkBtn.style.marginTop = '20px';
  checkBtn.textContent = 'Check Answers';

  const feedbackEl = document.createElement('div');
  feedbackEl.style.marginTop = '12px';

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;

    inputs.forEach((input, i) => {
      const blank = data.blanks[i];
      const value = input.value.trim().toLowerCase();
      const isCorrect = blank.accepts.some(a => value.includes(a.toLowerCase()));

      input.classList.toggle('correct', isCorrect);
      input.classList.toggle('incorrect', !isCorrect);

      if (!isCorrect) allCorrect = false;
    });

    if (allCorrect) {
      feedbackEl.className = 'feedback-message great';
      feedbackEl.textContent = 'All blanks filled correctly! Great job!';
      if (onComplete) onComplete();
    } else {
      feedbackEl.className = 'feedback-message poor';
      feedbackEl.textContent = 'Some answers need work. Check the highlighted blanks and try again!';
    }
    feedbackEl.style.display = '';
  });

  wrapper.appendChild(checkBtn);
  wrapper.appendChild(feedbackEl);
  containerEl.appendChild(wrapper);
}
