/**
 * Typewriter effect — reveals text character by character.
 */

export function typeText(element, text, speed = 25) {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = '';

    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);

    // Allow skipping by clicking the element
    element.style.cursor = 'pointer';
    const skip = () => {
      clearInterval(interval);
      element.textContent = text;
      element.removeEventListener('click', skip);
      element.style.cursor = '';
      resolve();
    };
    element.addEventListener('click', skip);
  });
}
