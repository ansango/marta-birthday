export const resetAudio = (id: string) => {
  const audio = document.getElementById(id) as HTMLAudioElement;
  audio.pause();
  audio.currentTime = 0;
};

export const playAudio = (id: string) => {
  const audio = document.getElementById(id) as HTMLAudioElement;
  audio.play();
};
