import { toggleOpenModal, toggleOverlay } from "../js/modal-window.js"



const formBlock = document.querySelector('.modal-window__body form');
const inputs = formBlock.querySelectorAll('.modal-text-fields__field input')


formBlock.addEventListener("submit", (evt) => {
   evt.preventDefault();

   toggleOpenModal();
   toggleOverlay();

   inputs.forEach(input => {
      input.value = "";
   })

   function infoMessage() {
      alert("Данные успешно отправлены!");
   }

   setTimeout(infoMessage, 300);
})
