/**
 * Content section renderer — teaching material with typed blocks.
 */

import { getCraftDiagramHtml, initCraftDiagram } from '../graphics/craftDiagram.js';

export function renderContent(sectionData, lesson, containerEl) {
  containerEl.innerHTML = '';

  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<h2>${sectionData.title}</h2>`;
  if (sectionData.data.subtitle) {
    heading.innerHTML += `<p class="section-subtitle">${sectionData.data.subtitle}</p>`;
  }
  containerEl.appendChild(heading);

  const card = document.createElement('div');
  card.className = 'content-card';

  for (const block of sectionData.data.blocks) {
    card.appendChild(renderBlock(block));
  }

  containerEl.appendChild(card);
  return { requireInteraction: false };
}

function renderBlock(block) {
  switch (block.type) {
    case 'text': return renderText(block);
    case 'heading': return renderHeading(block);
    case 'key-term': return renderKeyTerm(block);
    case 'callout': return renderCallout(block);
    case 'comparison-table': return renderComparisonTable(block);
    case 'image': return renderImage(block);
    case 'list': return renderList(block);
    case 'craft-diagram': return renderCraftDiagramPlaceholder(block);
    default: return renderText({ content: block.content || '' });
  }
}

function renderText(block) {
  const p = document.createElement('p');
  p.innerHTML = block.content;
  return p;
}

function renderHeading(block) {
  const el = document.createElement(`h${block.level || 3}`);
  el.innerHTML = block.content;
  return el;
}

function renderKeyTerm(block) {
  const el = document.createElement('div');
  el.className = 'key-term-card';
  el.innerHTML = `
    <div class="term">${block.term}</div>
    <div class="definition">${block.definition}</div>
  `;
  return el;
}

function renderCallout(block) {
  const icons = {
    tip: '💡',
    warning: '⚠️',
    'key-term': '📖',
    activity: '✏️',
    'fun-fact': '⭐',
    example: '💬',
  };

  const el = document.createElement('div');
  el.className = `callout callout-${block.style || 'tip'}`;
  el.innerHTML = `
    <span class="callout-icon">${icons[block.style] || '💡'}</span>
    <div class="callout-content"><p>${block.content}</p></div>
  `;
  return el;
}

function renderComparisonTable(block) {
  const table = document.createElement('table');
  table.className = 'comparison-table';

  let html = '<thead><tr>';
  for (const h of block.headers) {
    html += `<th>${h}</th>`;
  }
  html += '</tr></thead><tbody>';

  for (const row of block.rows) {
    html += '<tr>';
    for (const cell of row) {
      html += `<td>${cell}</td>`;
    }
    html += '</tr>';
  }
  html += '</tbody>';

  table.innerHTML = html;
  return table;
}

function renderImage(block) {
  const wrapper = document.createElement('div');
  wrapper.style.textAlign = 'center';
  wrapper.style.margin = '20px 0';
  if (block.svg) {
    wrapper.innerHTML = block.svg;
  } else if (block.src) {
    wrapper.innerHTML = `<img src="${block.src}" alt="${block.alt || ''}" style="max-width: 100%; border-radius: 8px;">`;
  }
  if (block.caption) {
    wrapper.innerHTML += `<p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">${block.caption}</p>`;
  }
  return wrapper;
}

function renderList(block) {
  const el = document.createElement(block.ordered ? 'ol' : 'ul');
  el.style.paddingLeft = '24px';
  el.style.marginBottom = '16px';
  for (const item of block.items) {
    const li = document.createElement('li');
    li.style.marginBottom = '8px';
    li.innerHTML = item;
    el.appendChild(li);
  }
  return el;
}

function renderCraftDiagramPlaceholder(block) {
  const el = document.createElement('div');
  el.innerHTML = getCraftDiagramHtml();
  // Initialize interactivity after DOM insertion
  setTimeout(() => initCraftDiagram(el), 0);
  return el;
}
