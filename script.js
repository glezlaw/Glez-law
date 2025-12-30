document.addEventListener('DOMContentLoaded', () => {
  // Sutil fade-in para elementos
  const elements = document.querySelectorAll('h1, p, ul, img, button, form');
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease-in-out';
      el.style.opacity = 1;
    }, index * 200);
  });
});
