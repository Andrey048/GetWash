import {setClickBurger, setBurgerMediaListener} from "./menu-burger.js";
import {setClickModal} from "./modal-window.js";
import {setClickToScroll} from "./scroll.js";
// import "../js/form.js";



setClickBurger();
setBurgerMediaListener();
setClickToScroll();
setClickModal();

const swiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});