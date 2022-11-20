const headerElement = document.querySelector('#header-main-container');
const menuElement = document.querySelector('#menu-container');

const headerActiveClass = 'header--js-active';
const menuActiveClass = 'menu-header--js-active';
const body = document.body;

const BURGER_SCREEN_WIDTH = 981;

function setClickBurger() {
   const burgerButton = document.querySelector('#burger-button');

   headerElement.classList.remove('header--no-js');
   headerElement.classList.add('header--js');
   menuElement.classList.remove('menu-header--no-js');
   menuElement.classList.add('menu-header--js');

   headerElement.addEventListener('click', (e) => {
      if (e.target === burgerButton || e.target === menuElement) {
         toggleActiveHeader();
      }
   })
}
function toggleActiveHeader() {
   if (isHeaderActive()) {
      headerElement.classList.remove(headerActiveClass);
      menuElement.classList.remove(menuActiveClass);
      body.classList.remove('modal-open');
   } else {
      headerElement.classList.add(headerActiveClass);
      menuElement.classList.add(menuActiveClass);
      body.classList.add('modal-open');
   }

   function isHeaderActive() {
      return headerElement.classList.contains(headerActiveClass);
   }
}
function setBurgerMediaListener () {
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
}

export {BURGER_SCREEN_WIDTH, setClickBurger, toggleActiveHeader, setBurgerMediaListener};