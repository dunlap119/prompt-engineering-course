/**
 * "Loopy" — course mascot robot with Create a Loop arrow motif.
 * Returns inline SVG strings for different poses.
 */

const POSES = {
  greeting: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <rect x="30" y="45" width="60" height="50" rx="12" fill="#2292bf"/>
      <!-- Head -->
      <rect x="25" y="10" width="70" height="45" rx="14" fill="#2292bf"/>
      <!-- Eyes -->
      <circle cx="45" cy="30" r="8" fill="white"/>
      <circle cx="75" cy="30" r="8" fill="white"/>
      <circle cx="47" cy="30" r="4" fill="#0b1520"/>
      <circle cx="77" cy="30" r="4" fill="#0b1520"/>
      <!-- Smile -->
      <path d="M42,40 Q60,52 78,40" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Antenna -->
      <line x1="60" y1="10" x2="60" y2="2" stroke="#7C4DFF" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="1" r="4" fill="#7C4DFF"/>
      <!-- Waving arm -->
      <path d="M90,55 Q105,40 100,25" stroke="#2292bf" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="100" cy="23" r="6" fill="#FF9800"/>
      <!-- Left arm -->
      <path d="M30,60 Q15,65 20,80" stroke="#2292bf" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="20" cy="82" r="6" fill="#FF9800"/>
      <!-- Loop symbol on chest -->
      <circle cx="60" cy="70" r="8" fill="none" stroke="white" stroke-width="3"/>
      <path d="M65,75 L70,70 L65,65" fill="white"/>
      <!-- Feet -->
      <rect x="35" y="95" width="18" height="10" rx="5" fill="#1a7fa6"/>
      <rect x="67" y="95" width="18" height="10" rx="5" fill="#1a7fa6"/>
    </svg>
  `,

  thinking: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="45" width="60" height="50" rx="12" fill="#2292bf"/>
      <rect x="25" y="10" width="70" height="45" rx="14" fill="#2292bf"/>
      <!-- Thinking eyes (looking up) -->
      <circle cx="45" cy="30" r="8" fill="white"/>
      <circle cx="75" cy="30" r="8" fill="white"/>
      <circle cx="44" cy="27" r="4" fill="#0b1520"/>
      <circle cx="74" cy="27" r="4" fill="#0b1520"/>
      <!-- Hmm mouth -->
      <line x1="48" y1="42" x2="72" y2="42" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Antenna -->
      <line x1="60" y1="10" x2="60" y2="2" stroke="#FF9800" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="1" r="4" fill="#FF9800"/>
      <!-- Chin-scratch arm -->
      <path d="M90,60 Q100,50 92,42" stroke="#2292bf" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="91" cy="40" r="6" fill="#FF9800"/>
      <!-- Other arm down -->
      <path d="M30,60 Q20,70 25,85" stroke="#2292bf" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="25" cy="87" r="6" fill="#FF9800"/>
      <!-- Thought bubbles -->
      <circle cx="105" cy="20" r="4" fill="#e2e8f0"/>
      <circle cx="112" cy="10" r="6" fill="#e2e8f0"/>
      <!-- Loop on chest -->
      <circle cx="60" cy="70" r="8" fill="none" stroke="white" stroke-width="3"/>
      <path d="M65,75 L70,70 L65,65" fill="white"/>
      <rect x="35" y="95" width="18" height="10" rx="5" fill="#1a7fa6"/>
      <rect x="67" y="95" width="18" height="10" rx="5" fill="#1a7fa6"/>
    </svg>
  `,

  celebrating: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="45" width="60" height="50" rx="12" fill="#2292bf"/>
      <rect x="25" y="10" width="70" height="45" rx="14" fill="#2292bf"/>
      <!-- Happy eyes (closed arcs) -->
      <path d="M38,28 Q45,22 52,28" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M68,28 Q75,22 82,28" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Big smile -->
      <path d="M40,38 Q60,54 80,38" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Antenna (glowing) -->
      <line x1="60" y1="10" x2="60" y2="2" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="1" r="5" fill="#4CAF50"/>
      <!-- Both arms raised -->
      <path d="M90,55 Q110,35 105,15" stroke="#2292bf" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="105" cy="13" r="6" fill="#FF9800"/>
      <path d="M30,55 Q10,35 15,15" stroke="#2292bf" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="15" cy="13" r="6" fill="#FF9800"/>
      <!-- Confetti sparkles -->
      <text x="8" y="10" font-size="10">✨</text>
      <text x="100" y="8" font-size="10">🎉</text>
      <text x="55" y="5" font-size="8">⭐</text>
      <!-- Loop on chest -->
      <circle cx="60" cy="70" r="8" fill="none" stroke="white" stroke-width="3"/>
      <path d="M65,75 L70,70 L65,65" fill="white"/>
      <rect x="35" y="95" width="18" height="10" rx="5" fill="#1a7fa6"/>
      <rect x="67" y="95" width="18" height="10" rx="5" fill="#1a7fa6"/>
    </svg>
  `,

  pointing: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="45" width="60" height="50" rx="12" fill="#2292bf"/>
      <rect x="25" y="10" width="70" height="45" rx="14" fill="#2292bf"/>
      <!-- Normal eyes -->
      <circle cx="45" cy="30" r="8" fill="white"/>
      <circle cx="75" cy="30" r="8" fill="white"/>
      <circle cx="47" cy="31" r="4" fill="#0b1520"/>
      <circle cx="77" cy="31" r="4" fill="#0b1520"/>
      <!-- Slight smile -->
      <path d="M45,42 Q60,48 75,42" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Antenna -->
      <line x1="60" y1="10" x2="60" y2="2" stroke="#7C4DFF" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="1" r="4" fill="#7C4DFF"/>
      <!-- Pointing arm -->
      <path d="M90,60 L115,50" stroke="#2292bf" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="117" cy="49" r="6" fill="#FF9800"/>
      <!-- Other arm on hip -->
      <path d="M30,60 Q18,70 30,82" stroke="#2292bf" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="31" cy="84" r="6" fill="#FF9800"/>
      <!-- Loop on chest -->
      <circle cx="60" cy="70" r="8" fill="none" stroke="white" stroke-width="3"/>
      <path d="M65,75 L70,70 L65,65" fill="white"/>
      <rect x="35" y="95" width="18" height="10" rx="5" fill="#1a7fa6"/>
      <rect x="67" y="95" width="18" height="10" rx="5" fill="#1a7fa6"/>
    </svg>
  `,
};

export function getMascotSvg(pose = 'greeting') {
  return POSES[pose] || POSES.greeting;
}
