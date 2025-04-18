// js/consejos.js

document.addEventListener('DOMContentLoaded', function () {
  const carrusel = document.querySelector('.carrusel');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    carrusel.style.transform = 'translateX(' + (-i * 100) + '%)';
  }

  prevButton.addEventListener('click', function () {
    index = (index > 0) ? index - 1 : slides.length - 1;
    showSlide(index);
  });

  nextButton.addEventListener('click', function () {
    index = (index < slides.length - 1) ? index + 1 : 0;
    showSlide(index);
  });

  // Inicializar
  showSlide(index);
});
