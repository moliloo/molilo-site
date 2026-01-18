let audio: HTMLAudioElement | null = null;

export function toggleMusic(enabled: boolean) {
  if (!audio) {
    audio = new Audio('/music/theme.mp3');
    audio.loop = true;
    audio.volume = 0.3;
  }

  enabled ? audio.play() : audio.pause();
}