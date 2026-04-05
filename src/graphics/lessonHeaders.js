/**
 * Lesson header SVG illustrations — colorful banners for each lesson.
 */

const headers = {
  1: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Magnifying glass over text -->
      <rect x="10" y="40" width="70" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
      <rect x="10" y="55" width="50" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
      <rect x="10" y="70" width="60" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
      <circle cx="80" cy="55" r="30" fill="none" stroke="white" stroke-width="5"/>
      <line x1="101" y1="76" x2="115" y2="95" stroke="white" stroke-width="5" stroke-linecap="round"/>
      <!-- Sparkle inside lens -->
      <text x="70" y="60" font-size="16" fill="white">✨</text>
    </svg>
  `,

  2: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- CRAFT building blocks -->
      <rect x="10" y="80" width="22" height="22" rx="4" fill="#FF9800" opacity="0.9"/>
      <text x="14" y="96" font-family="Inter,sans-serif" font-size="14" font-weight="800" fill="white">C</text>
      <rect x="34" y="80" width="22" height="22" rx="4" fill="#E91E63" opacity="0.9"/>
      <text x="38" y="96" font-family="Inter,sans-serif" font-size="14" font-weight="800" fill="white">R</text>
      <rect x="22" y="56" width="22" height="22" rx="4" fill="#4CAF50" opacity="0.9"/>
      <text x="26" y="72" font-family="Inter,sans-serif" font-size="14" font-weight="800" fill="white">A</text>
      <rect x="46" y="56" width="22" height="22" rx="4" fill="#2292bf" opacity="0.9"/>
      <text x="50" y="72" font-family="Inter,sans-serif" font-size="14" font-weight="800" fill="white">F</text>
      <rect x="34" y="32" width="22" height="22" rx="4" fill="#7C4DFF" opacity="0.9"/>
      <text x="39" y="48" font-family="Inter,sans-serif" font-size="14" font-weight="800" fill="white">T</text>
      <!-- Star on top -->
      <text x="30" y="26" font-size="18">⭐</text>
    </svg>
  `,

  3: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Before/after transformation -->
      <rect x="5" y="35" width="40" height="50" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <text x="12" y="55" font-size="8" fill="rgba(255,255,255,0.7)" font-family="Inter,sans-serif">Bad</text>
      <rect x="12" y="60" width="26" height="3" rx="1" fill="rgba(255,255,255,0.3)"/>
      <rect x="12" y="66" width="20" height="3" rx="1" fill="rgba(255,255,255,0.3)"/>
      <text x="18" y="80" font-size="14">😟</text>
      <!-- Arrow -->
      <path d="M50,60 L70,60" stroke="white" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
      <defs><marker id="arrowhead3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="white"/></marker></defs>
      <!-- After card -->
      <rect x="75" y="35" width="40" height="50" rx="8" fill="rgba(255,255,255,0.25)" stroke="white" stroke-width="2"/>
      <text x="80" y="55" font-size="8" fill="white" font-family="Inter,sans-serif" font-weight="600">Great!</text>
      <rect x="82" y="60" width="26" height="3" rx="1" fill="rgba(255,255,255,0.6)"/>
      <rect x="82" y="66" width="20" height="3" rx="1" fill="rgba(255,255,255,0.6)"/>
      <text x="88" y="80" font-size="14">🤩</text>
    </svg>
  `,

  4: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Toolbox -->
      <rect x="20" y="50" width="80" height="50" rx="8" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="2"/>
      <rect x="40" y="44" width="40" height="10" rx="4" fill="rgba(255,255,255,0.3)"/>
      <!-- Tools inside -->
      <text x="30" y="78" font-size="18">🎭</text>
      <text x="52" y="78" font-size="18">🔗</text>
      <text x="74" y="78" font-size="18">📋</text>
      <!-- Sparkles -->
      <text x="15" y="40" font-size="12">✨</text>
      <text x="90" y="42" font-size="10">💫</text>
    </svg>
  `,

  5: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Shield / detective badge -->
      <path d="M60,20 L90,35 L90,65 Q90,90 60,105 Q30,90 30,65 L30,35 Z" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="2.5"/>
      <!-- Eye in shield -->
      <circle cx="60" cy="58" r="16" fill="none" stroke="white" stroke-width="2.5"/>
      <circle cx="60" cy="58" r="7" fill="white"/>
      <circle cx="60" cy="58" r="3" fill="#0b1520"/>
      <!-- Alert indicator -->
      <text x="72" y="42" font-size="16">⚠️</text>
    </svg>
  `,

  6: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Trophy -->
      <rect x="42" y="75" width="36" height="12" rx="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="48" y="65" width="24" height="14" rx="2" fill="rgba(255,255,255,0.3)"/>
      <path d="M35,30 L35,55 Q35,70 60,70 Q85,70 85,55 L85,30 Z" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="2.5"/>
      <!-- Handles -->
      <path d="M35,38 Q20,38 20,50 Q20,60 35,58" fill="none" stroke="white" stroke-width="2.5"/>
      <path d="M85,38 Q100,38 100,50 Q100,60 85,58" fill="none" stroke="white" stroke-width="2.5"/>
      <!-- Star on trophy -->
      <text x="50" y="52" font-size="20">⭐</text>
      <!-- Confetti -->
      <text x="10" y="25" font-size="12">🎉</text>
      <text x="90" y="20" font-size="12">🎊</text>
      <text x="50" y="18" font-size="10">✨</text>
    </svg>
  `,
};

export function getLessonHeaderSvg(lessonNum) {
  return headers[lessonNum] || headers[1];
}
