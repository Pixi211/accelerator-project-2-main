import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

let advantagesSwiper = null;

export function initAdvantagesSwiper() {
  function initSwiper() {
    const width = window.innerWidth;

    if (width >= 1440 && !advantagesSwiper) {
      advantagesSwiper = new Swiper('.advantages__swiper', {
        modules: [Navigation],
        navigation: {
          nextEl: '.advantages__button--next',
          prevEl: '.advantages__button--prev',
        },
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        slidesPerGroup: 2,
        simulateTouch: false,
        initialSlide: 3,
      });
    } else if (width < 1440 && advantagesSwiper) {
      advantagesSwiper.destroy(true, true);
      advantagesSwiper = null;
    }
  }

  initSwiper();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initSwiper, 250);
  });
}
