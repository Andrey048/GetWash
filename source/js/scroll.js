import {BURGER_SCREEN_WIDTH, toggleActiveHeader} from "./menu-burger.js";

function setClickToScroll() {
   const headerMenuLinks = document.querySelectorAll('.menu-header__item a');
   const footerMenuLinks = document.querySelectorAll('.menu-footer__item a');
   const menuLinks = [...headerMenuLinks, ...footerMenuLinks];

   menuLinks.forEach(link => {
      link.addEventListener("click", e => {
         e.preventDefault();

         const classScrollBlock = e.target.dataset.togo;

         scrollToBlock(classScrollBlock);

         if (link.closest('#header-main-container') && innerWidth <= BURGER_SCREEN_WIDTH) {
            toggleActiveHeader();
         }
      })
   })

   function scrollToBlock(classNameBlock) {
      const toScrollElement = document.querySelector(classNameBlock);
      const coordinateScroll = toScrollElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
         top: coordinateScroll,
         behavior: "smooth",
      })
   }
}

export {setClickToScroll}