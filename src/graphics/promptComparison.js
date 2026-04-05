/**
 * Before/After prompt comparison card component.
 */

export function getComparisonCardHtml(badPrompt, goodPrompt) {
  return `
    <div style="display:flex;gap:16px;margin:20px 0;flex-wrap:wrap">
      <div style="flex:1;min-width:200px;background:#fff8f0;border:2px solid #ffcc80;border-radius:12px;padding:16px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <span style="font-size:1.5rem">😟</span>
          <strong style="color:#e65100;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.03em">Vague Prompt</strong>
        </div>
        <div style="font-family:'Courier New',monospace;font-size:0.9rem;color:#bf360c">"${badPrompt}"</div>
      </div>
      <div style="display:flex;align-items:center;font-size:1.5rem;color:#a0aec0">→</div>
      <div style="flex:1;min-width:200px;background:#f0faf0;border:2px solid #a5d6a7;border-radius:12px;padding:16px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <span style="font-size:1.5rem">🤩</span>
          <strong style="color:#2e7d32;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.03em">Great Prompt</strong>
        </div>
        <div style="font-family:'Courier New',monospace;font-size:0.9rem;color:#1b5e20">"${goodPrompt}"</div>
      </div>
    </div>
  `;
}
