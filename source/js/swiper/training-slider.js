import Swiper from 'swiper';
import {
  Navigation
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function initTrainingSwiper() {
  new Swiper('.instructors__swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
    },
    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        simulateTouch: false,
        spaceBetween: 20,
      }
    }
  });
}


