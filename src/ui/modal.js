/**
 * Generic modal overlay.
 */

export function showModal(contentHtml) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  content.innerHTML = contentHtml;
  overlay.classList.remove('hidden');
}

export function hideModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

export function setupModalClose() {
  const overlay = document.getElementById('modal-overlay');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hideModal();
  });
}
