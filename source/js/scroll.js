import { toggleMenuBurger } from "../js/menu-burger.js";
import { toggleOverlay } from "../js/modal-window.js";



const menuLinks = document.querySelectorAll('.menu__list .menu__list-item a');



function scrollToBlock(classNameBlock) {
   const scrollElement = document.querySelector(classNameBlock);
   const coordinateScroll = scrollElement.getBoundingClientRect().top + window.pageYOffset;

   window.scrollTo({
      top: coordinateScroll,
      behavior: "smooth",
   })
}



menuLinks.forEach(link => {
   link.addEventListener("click", evt => {
      evt.preventDefault();

      const classScrollBlock = evt.target.dataset.togo;

      scrollToBlock(classScrollBlock);

      if (evt.target.dataset.place === "header" && window.innerWidth < 981) {
         toggleMenuBurger();
         toggleOverlay();
      }
   })
})