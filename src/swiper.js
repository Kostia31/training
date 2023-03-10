import Swiper from 'swiper/bundle';

const swiper = new Swiper('.slider-img', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },    

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  loop: true,
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