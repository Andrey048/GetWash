const buttonModal=document.querySelector(".partner__btn"),modalCloseButton=document.querySelector(".modal-window__close");function centerOpenModalBody(){const e=document.querySelector(".modal-window__body"),o=(window.innerHeight-e.offsetHeight)/2;e.style.top=o<0?"0px":`${o}px`}export function toggleOpenModal(){document.querySelector(".modal-window").classList.toggle("_hidden")}export function toggleOverlay(e=!0){const o=document.querySelector(".overlay"),t=document.body;o.classList.toggle("_hidden"),t.style.paddingRight=`${window.innerWidth-t.clientWidth}px`,t.classList.toggle("modal-open")}buttonModal.addEventListener("click",e=>{e.preventDefault(),toggleOpenModal(),centerOpenModalBody()}),modalCloseButton.addEventListener("click",e=>{e.preventDefault(),toggleOpenModal()});