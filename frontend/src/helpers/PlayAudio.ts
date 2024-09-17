// helpers/PlayAudio.js
import passed from '../assets/sounds/passed.mp3';
import hover from '../assets/sounds/hover.mp3';
import select from '../assets/sounds/select.mp3';
import theme from '../assets/sounds/GTA4Theme.mp3';

let currentAudio: HTMLAudioElement | null = null;

export function playOrStopAudio(file: string, status: 'play' | 'stop') {
  // Ha a státusz 'play', akkor játszd le a hangot
  if (status === 'play') {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(file);
    currentAudio.play().catch(error => {
      console.error('Playback failed:', error);
    });
  }
  // Ha a státusz 'stop', akkor állítsd le a hangot
  else if (status === 'stop' && currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

export function playOrStopThemeSound(status: 'play' | 'stop') {
  playOrStopAudio(theme, status);
}

export function playOrStopSelectSound(status: 'play' | 'stop') {
  playOrStopAudio(select, status);
}

export function playOrStopHoverSound(status: 'play' | 'stop') {
  playOrStopAudio(hover, status);
}

export function playOrStopMissionPassed(status: 'play' | 'stop') {
  playOrStopAudio(passed, status);
}
