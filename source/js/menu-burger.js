import { toggleOverlay } from "../js/modal-window.js";



const burgerButton = document.querySelector('.burger-icon');



export function toggleMenuBurger(viewAndCloseMode = true) {
   const menuBlock = document.querySelector('.menu-header');

   menuBlock.classList.toggle("menu-header--active");
   menuBlock.removeAttribute("hidden");
}



burgerButton.addEventListener('click', evt => {
   evt.preventDefault();

   toggleMenuBurger();
   toggleOverlay();
})