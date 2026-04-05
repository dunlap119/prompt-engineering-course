/**
 * Progress bar component — reusable for sidebar and inline use.
 */

export function createProgressBar(current, total) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  const el = document.createElement('div');
  el.className = 'progress-bar';
  el.innerHTML = `<div class="progress-fill" style="width: ${pct}%"></div>`;
  return el;
}
