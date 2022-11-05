const buttonModal = document.querySelector('.partner__btn');
const modalCloseButton = document.querySelector(".modal-window__close");



function centerOpenModalBody() {
   const modalWindowBlockBody = document.querySelector('.modal-window__body');
   const coordinateTop = (window.innerHeight - modalWindowBlockBody.offsetHeight) / 2;

   if (coordinateTop < 0) {
      modalWindowBlockBody.style.top = "0px";
   } else {
      modalWindowBlockBody.style.top = `${coordinateTop}px`;
   }
}
export function toggleOpenModal() {
   const modalWindowBlock = document.querySelector('.modal-window');

   modalWindowBlock.classList.toggle("_hidden");
}
export function toggleOverlay(viewAndCloseMode = true) {
   const overlayBlock = document.querySelector('.overlay');
   const body = document.body;

   overlayBlock.classList.toggle("_hidden");
   body.style.paddingRight = `${window.innerWidth - body.clientWidth}px`;
   body.classList.toggle("modal-open");
}



buttonModal.addEventListener("click", evt => {
   evt.preventDefault();

   toggleOpenModal();
   centerOpenModalBody();
   // toggleOverlay();
})

modalCloseButton.addEventListener("click", evt => {
   evt.preventDefault();

   toggleOpenModal();
   // toggleOverlay();
})