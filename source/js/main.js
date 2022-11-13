import { setClickBurger } from "./menu-burger.js";
// import "../js/modal-window.js";
// import "../js/scroll.js";
// import "../js/form.js";




setClickBurger();

const BURGER_SCREEN_WIDTH = 981;
const headerBtn = document.querySelector('#header-link');
const menuBody = document.querySelector('#menu-body');
const headerBody = document.querySelector('#header-body');

const burgerMediaQuery = matchMedia(`(max-width: ${BURGER_SCREEN_WIDTH}px)`);

if (burgerMediaQuery.matches) {
   menuBody.append(headerBtn);
}

burgerMediaQuery.addEventListener('change', () => {
   if (innerWidth < BURGER_SCREEN_WIDTH) {
      menuBody.append(headerBtn);
   } else {
      headerBody.append(headerBtn);
   }
})



const swiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});