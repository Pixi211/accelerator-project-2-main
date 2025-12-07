import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


export function initAdvantagesSwiper() {
  new Swiper('.advantages__swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },
    enabled: false,

    breakpoints: {
      1440: {
        enabled: true,
        slidesPerView: 'auto',
        // slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        slidesPerGroup: 2,
        simulateTouch: false,
        initialSlide: 3,
      }
    }
  });
}
