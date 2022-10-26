const modal = document.querySelector('.modal');

function openModal() {
  modal.classList.add('active');
}
function closeModal() {
  modal.classList.remove('active');
}

const modalBtn = document.querySelector('.modal-notice');
modalBtn.addEventListener('click', openModal);