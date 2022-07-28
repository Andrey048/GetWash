import { toggleOverlay } from "./modal-window.min.js";



const burgerButton = document.querySelector('.burger-icon');



export function toggleMenuBurger(viewAndCloseMode = true) {
   const menuBlock = document.querySelector('.menu');

   menuBlock.classList.toggle("menu--active");
}



burgerButton.addEventListener('click', evt => {
   evt.preventDefault();

   toggleMenuBurger();
   toggleOverlay();
})