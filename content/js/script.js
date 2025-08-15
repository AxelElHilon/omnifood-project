// script.js

const btnMobileNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
const heroSection = document.querySelector('.section-hero');

// Estado interno para saber si el menú está abierto manualmente
let menuOpen = false;

// Toggle del menú móvil
btnMobileNav.addEventListener('click', function () {
  menuOpen = !menuOpen;
  header.classList.toggle('nav-open', menuOpen);
});

// Observador para manejar el estado sticky sin afectar el toggle
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      // Solo añadir sticky, no cerrar/abrir el menú manual
      header.classList.add('sticky-scroll');
    } else {
      header.classList.remove('sticky-scroll');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

observer.observe(heroSection);
