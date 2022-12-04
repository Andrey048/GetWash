const modalWindowElement = document.querySelector('.modal-window');
const buttonModal = document.querySelector('.partner__btn');
const modalCloseButton = document.querySelector(".modal-window__close");



function setClickModal() {
   buttonModal.addEventListener("click", evt => {
      evt.preventDefault();
      modalWindowElement.classList.toggle("modal-window--show");
      document.body.classList.toggle('lock');
   })
   modalCloseButton.addEventListener("click", evt => {
      evt.preventDefault();
      modalWindowElement.classList.toggle("modal-window--show");
      document.body.classList.toggle('lock');
   })
}

export {setClickModal};