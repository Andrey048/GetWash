export function setClickBurger() {
   const burgerButton = document.querySelector('#burger-button');
   const headerElement = document.querySelector('#header-main-container');
   const menuElement = document.querySelector('#menu-container');

   const headerActiveClass = 'header--js-active';
   const menuActiveClass = 'menu-header--js-active';
   const body = document.body;

   headerElement.classList.remove('header--no-js');
   headerElement.classList.add('header--js');
   menuElement.classList.remove('menu-header--no-js');
   menuElement.classList.add('menu-header--js');

   headerElement.addEventListener('click', (e) => {
      if (e.target === burgerButton || e.target === menuElement) {
         onClickHeader();
      }
   })

   function onClickHeader() {
      if (isHeaderActive()) {
         headerElement.classList.remove(headerActiveClass);
         menuElement.classList.remove(menuActiveClass);
         body.classList.remove('modal-open');
      } else {
         headerElement.classList.add(headerActiveClass);
         menuElement.classList.add(menuActiveClass);
         body.classList.add('modal-open');
      }
   }

   function isHeaderActive() {
      return headerElement.classList.contains(headerActiveClass);
   }
}