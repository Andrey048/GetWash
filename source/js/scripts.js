import "../js/slider-swiper.min.js";

import "../js/menu-burger.min.js";
import "../js/modal-window.min.js";
import "../js/scroll.min.js";
import "../js/form.min.js";



// ###### Скрипт инициализации свайпера ######

const swiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

// ###### / Скрипт инициализации свайпера ######
