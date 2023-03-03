
// MOBILE MENU

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();


// Swiper

import Swiper from 'swiper/swiper-bundle';
const swiper = new Swiper('.slider-img', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  preloadImages: true,
  slidesPerView: 1.5,
  simulateTouch: true,
  touchRatio: 3,
  grabCursor: true,
  spaceBetween: 20,
  initialSlide: 0,

  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },

    1440: {
      slidesPerView: 1.5,
    },
  },
});
