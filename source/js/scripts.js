import "../js/slider-swiper.js";

import "../js/menu-burger.js";
import "../js/modal-window.js";
import "../js/scroll.js";
import "../js/form.js";



// ###### Скрипт инициализации свайпера ######

const swiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

// ###### / Скрипт инициализации свайпера ######
