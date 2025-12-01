import { initDropdownMenu } from './dropdown-menu.js';
import { addDuplicateTitle } from './duplicate-title.js';
import { initHeroSwiper } from './swiper/hero-slider.js';
import { initToursSwiper } from './swiper/tours-slider.js';
import { initTrainingSwiper } from './swiper/training-slider.js';

initDropdownMenu();
document.addEventListener('DOMContentLoaded', initHeroSwiper);
document.addEventListener('DOMContentLoaded', initToursSwiper);
document.addEventListener('DOMContentLoaded', initTrainingSwiper);
addDuplicateTitle();
