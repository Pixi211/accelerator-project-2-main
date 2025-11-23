// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

//dropdown menu
const header = document.querySelector('.main-header');
const menu = header.querySelector('.main-header__nav');
const toggleBtn = header.querySelector('.main-header__toggle');


const toggleMenu = () => {
  header.classList.toggle('main-header--menu-opened');

  if (!header.classList.contains('main-header--menu-opened')) {
    menu.classList.remove('main-header__nav--opened');
    document.body.style.overflow = '';
  } else {
    menu.classList.add('main-header__nav--opened');
    document.body.style.overflow = 'hidden';
  }
};

const deleteDropDownMenu = () => {
  header.classList.remove('main-header--menu-opened');
  menu.classList.remove('main-header__nav--opened');
  document.body.style.overflow = '';
};

const onresize = () => {
  if (document.body.clientWidth >= 1440) {
    deleteDropDownMenu();
  }
};


window.addEventListener('resize', () => onresize());
toggleBtn.addEventListener('click', () => toggleMenu());
toggleBtn.addEventListener('touchstart', (evt) => {
  evt.preventDefault();
  toggleMenu();
});
