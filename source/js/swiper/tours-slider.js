import Swiper from 'swiper';
import {
  Navigation
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initToursSwiper = new Swiper('.tours__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      simulateTouch: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      simulateTouch: false,
      spaceBetween: 30,
    }
  }
});

export { initToursSwiper };

