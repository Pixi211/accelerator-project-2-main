import { initDropdownMenu } from './dropdown-menu.js';
import { addDuplicateTitle } from './duplicate-title.js';
import { initHeroSwiper } from './swiper/hero-slider.js';
import { initToursSwiper } from './swiper/tours-slider.js';
import { initTrainingSwiper } from './swiper/training-slider.js';
import { initReviewsSwiper } from './swiper/reviews-slider.js';
import { initAdvantagesSwiper } from './swiper/advantages-slider.js';
import { initGallerySwiper } from './swiper/gallery-slider.js';
import {setupFormValidation} from './validate-form.js';
import {initializeForm} from './initialize-form.js';


initDropdownMenu();
document.addEventListener('DOMContentLoaded', initHeroSwiper);
document.addEventListener('DOMContentLoaded', initToursSwiper);
document.addEventListener('DOMContentLoaded', initTrainingSwiper);
document.addEventListener('DOMContentLoaded', initReviewsSwiper);
document.addEventListener('DOMContentLoaded', initAdvantagesSwiper);
document.addEventListener('DOMContentLoaded', initGallerySwiper);
addDuplicateTitle();


document.addEventListener('DOMContentLoaded', () => {
  initializeForm();
  setupFormValidation();
});
