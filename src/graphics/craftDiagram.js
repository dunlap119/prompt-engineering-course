/**
 * Interactive CRAFT Framework diagram.
 * Pentagon layout with hoverable/clickable segments.
 */

const elements = [
  { letter: 'C', label: 'Context', color: '#FF9800', desc: 'Give background information. What\'s the situation? What is this for?' },
  { letter: 'R', label: 'Role', color: '#E91E63', desc: 'Tell the AI who to be. A teacher? A scientist? A friend?' },
  { letter: 'A', label: 'Ask', color: '#4CAF50', desc: 'State clearly what you want. Be specific about the output.' },
  { letter: 'F', label: 'Format', color: '#2292bf', desc: 'How should the response look? A list? Paragraphs? A table?' },
  { letter: 'T', label: 'Tone', color: '#7C4DFF', desc: 'What should it sound like? Fun? Formal? Encouraging?' },
];

export function getCraftDiagramHtml() {
  return `
    <div class="craft-diagram-wrapper" style="text-align:center;margin:24px 0">
      <svg viewBox="0 0 400 380" xmlns="http://www.w3.org/2000/svg" style="max-width:400px;width:100%">
        ${elements.map((el, i) => {
          const angle = (i * 72 - 90) * Math.PI / 180;
          const cx = 200 + 130 * Math.cos(angle);
          const cy = 175 + 130 * Math.sin(angle);
          return `
            <g class="craft-element" data-idx="${i}" style="cursor:pointer">
              <circle cx="${cx}" cy="${cy}" r="50" fill="${el.color}" opacity="0.9"/>
              <text x="${cx}" y="${cy - 8}" text-anchor="middle" font-family="Inter,sans-serif" font-size="28" font-weight="800" fill="white">${el.letter}</text>
              <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="white" opacity="0.9">${el.label}</text>
            </g>
          `;
        }).join('')}
        <!-- Connecting lines -->
        ${elements.map((_, i) => {
          const a1 = (i * 72 - 90) * Math.PI / 180;
          const a2 = (((i + 1) % 5) * 72 - 90) * Math.PI / 180;
          return `<line x1="${200 + 80 * Math.cos(a1)}" y1="${175 + 80 * Math.sin(a1)}" x2="${200 + 80 * Math.cos(a2)}" y2="${175 + 80 * Math.sin(a2)}" stroke="#e2e8f0" stroke-width="2" opacity="0.5"/>`;
        }).join('')}
        <!-- Center label -->
        <text x="200" y="175" text-anchor="middle" font-family="Inter,sans-serif" font-size="16" font-weight="800" fill="#0b1520">CRAFT</text>
      </svg>
      <div class="craft-description" id="craft-desc" style="min-height:50px;padding:12px 20px;background:white;border-radius:8px;border:1px solid #e2e8f0;margin-top:8px;font-size:0.95rem;color:#4a5568;max-width:400px;margin-left:auto;margin-right:auto">
        <em>Click or hover over a letter to learn more!</em>
      </div>
    </div>
  `;
}

export function initCraftDiagram(containerEl) {
  const descEl = containerEl.querySelector('#craft-desc');
  if (!descEl) return;

  containerEl.querySelectorAll('.craft-element').forEach(el => {
    const idx = parseInt(el.dataset.idx);
    const data = elements[idx];

    el.addEventListener('mouseenter', () => {
      descEl.innerHTML = `<strong style="color:${data.color}">${data.letter} — ${data.label}:</strong> ${data.desc}`;
    });

    el.addEventListener('click', () => {
      descEl.innerHTML = `<strong style="color:${data.color}">${data.letter} — ${data.label}:</strong> ${data.desc}`;
    });
  });

  containerEl.addEventListener('mouseleave', () => {
    descEl.innerHTML = '<em>Click or hover over a letter to learn more!</em>';
  });
}
