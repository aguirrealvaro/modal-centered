const modal = document.querySelector('.modal-backdrop');
const modalDialog = document.querySelector('.modal-dialog');
const modalBtn = document.querySelector('.open-modal');
const closeBtn = document.querySelector('.close-modal');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal || e.target == modalDialog) {
    modal.style.display = 'none';
  }
}
