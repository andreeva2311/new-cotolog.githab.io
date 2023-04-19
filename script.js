const signInButtonElement = document.querySelector('.button');
const modalElement = document.querySelector('.modal_overlay');
const closeModalElement = document.querySelector('.modal_overlay');
const burgerButtonElement = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.navigation');

function openModal() {
    modalElement.classList.add('modal_active');
}

function closeModal() {
    modalElement.classList.remove('modal_active');
}

function handleCloseModalByEscape(event) {
    if (event.key === 'Escape') {
   closeModal();
  }
}
function handleCloseByOverlay(event) {
    if (event.target === modalElement) {
        closeModal();
    }
}

function toggleBurgerMenu() {
    burgerMenu.classList.toggle('navigation_visible');
    burgerButtonElement.classList.toggle('burger-button_opened');
}

 

signInButtonElement.addEventListener('click', openModal);
document.addEventListener('keydown', handleCloseModalByEscape);
modalElement.addEventListener('click', handleCloseByOverlay);
closeModalElement.addEventListener('click', closeModal);
burgerButtonElement.addEventListener('click', toggleBurgerMenu);
