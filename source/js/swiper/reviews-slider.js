import Swiper from 'swiper';
import {
  Navigation
} from 'swiper/modules';
import 'swiper/css';

export function initReviewsSwiper() {
  new Swiper('.reviews__swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 1.265,
        spaceBetween: 75,
      },
      1440: {
        slidesPerView: 1.756,
        simulateTouch: false,
        spaceBetween: 240,
      }
    }
  });
}


