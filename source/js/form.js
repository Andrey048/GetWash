import { toggleOpenModal, toggleOverlay } from "./modal-window.min.js"



const formBlock = document.querySelector('.modal-window__body form');
const inputs = formBlock.querySelectorAll('.modal-text-fields__field input')


formBlock.addEventListener("submit", (evt) => {
   evt.preventDefault();

   alert("Данные успешно отправлены!");

   toggleOpenModal();
   toggleOverlay();

   inputs.forEach(input => {
      input.value = "";
   })
})
