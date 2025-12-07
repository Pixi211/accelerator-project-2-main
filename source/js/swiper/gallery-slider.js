
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export function initGallerySwiper() {
  new Swiper('.gallery__swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 5,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 5,
        slidesPerView: 3,
      },
      1440: {
        enabled: false,
      },
    }
  });
}
