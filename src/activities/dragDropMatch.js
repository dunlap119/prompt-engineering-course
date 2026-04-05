/**
 * Drag-and-drop matching activity.
 * Students match items to their targets (e.g., CRAFT letters to descriptions).
 */

export function renderDragDropMatch(containerEl, data, onComplete) {
  containerEl.innerHTML = '';

  const pairs = data.pairs;
  const shuffledItems = [...pairs].sort(() => Math.random() - 0.5);
  const matched = new Set();

  const wrapper = document.createElement('div');
  wrapper.className = 'drag-drop-container';

  // Items column
  const itemsCol = document.createElement('div');
  itemsCol.className = 'drag-items';
  itemsCol.innerHTML = '<h4>Drag These</h4>';

  for (const pair of shuffledItems) {
    const item = document.createElement('div');
    item.className = 'drag-item';
    item.draggable = true;
    item.textContent = pair.item;
    item.dataset.item = pair.item;

    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', pair.item);
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
    });

    // Tap-to-select for mobile
    item.addEventListener('click', () => {
      if (item.classList.contains('matched')) return;
      document.querySelectorAll('.drag-item.selected').forEach(el => el.classList.remove('selected'));
      item.classList.add('selected');
    });

    itemsCol.appendChild(item);
  }

  // Targets column
  const targetsCol = document.createElement('div');
  targetsCol.className = 'drop-targets';
  targetsCol.innerHTML = '<h4>Match To</h4>';

  // Shuffle targets too
  const shuffledTargets = [...pairs].sort(() => Math.random() - 0.5);

  for (const pair of shuffledTargets) {
    const zone = document.createElement('div');
    zone.className = 'drop-zone';
    zone.textContent = pair.target;
    zone.dataset.correctItem = pair.item;

    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const droppedItem = e.dataTransfer.getData('text/plain');
      checkMatch(droppedItem, zone);
    });

    // Tap-to-place for mobile
    zone.addEventListener('click', () => {
      const selectedItem = document.querySelector('.drag-item.selected');
      if (selectedItem) {
        checkMatch(selectedItem.dataset.item, zone);
        selectedItem.classList.remove('selected');
      }
    });

    targetsCol.appendChild(zone);
  }

  wrapper.appendChild(itemsCol);
  wrapper.appendChild(targetsCol);
  containerEl.appendChild(wrapper);

  function checkMatch(itemValue, zone) {
    if (zone.dataset.correctItem === itemValue) {
      // Correct match
      zone.classList.add('correct');
      matched.add(itemValue);

      // Mark the item as matched
      const itemEl = itemsCol.querySelector(`[data-item="${itemValue}"]`);
      if (itemEl) {
        itemEl.classList.add('matched');
        itemEl.draggable = false;
      }

      zone.innerHTML = `<strong>${itemValue}</strong> → ${zone.textContent}`;

      if (matched.size === pairs.length && onComplete) {
        onComplete();
      }
    } else {
      zone.classList.add('incorrect');
      setTimeout(() => zone.classList.remove('incorrect'), 600);
    }
  }
}
