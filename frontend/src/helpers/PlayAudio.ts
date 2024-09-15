import passed from '../assets/sounds/passed.mp3';
import hover from '../assets/sounds/hover.mp3';
import select from '../assets/sounds/select.mp3';
import theme from '../assets/sounds/GTA4Theme.mp3';

export function missionPassed() {
  const audio = new Audio(passed);
  audio.play().catch(error => {
    console.error('Playback failed:', error);
  });
}

export function playSelectSound() {
  const audio = new Audio(select);
  audio.play().catch(error => {
    console.error('Playback failed:', error);
  });
}

export function playHoverSound() {
  const audio = new Audio(hover);
  audio.play().catch(error => {
    console.error('Playback failed:', error);
  });
}

export function playThemeSound() {
  const audio = new Audio(theme);
  audio.play().catch(error => {
    console.error('Playback failed:', error);
  });
}
