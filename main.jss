const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  const video = panel.querySelector('video');

  panel.addEventListener('mouseenter', () => {
    panel.classList.add('active');
    video.play();
  });

  panel.addEventListener('mouseleave', () => {
    panel.classList.remove('active');
    video.pause();
    video.currentTime = 0;
  });
});
