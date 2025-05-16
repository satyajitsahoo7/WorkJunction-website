// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Initialize Swiper for Client Testimonials
const swiper = new Swiper('.client__swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false,
});

sr.reveal('.nav__header, nav ul li', { interval: 200 });
sr.reveal('.header__container h1, .header__container p, .header__btns', { delay: 400 });
sr.reveal('.steps__card', { interval: 200 });
sr.reveal('.explore__card', { interval: 150 });
sr.reveal('.job__card', { interval: 200 });
sr.reveal('.service__card', { interval: 200 });
sr.reveal('.client__testimonial', { interval: 300 });
