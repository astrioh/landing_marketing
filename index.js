const openModal = () => {
  // ....
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';
};

const closeModal = () => {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
};

const requestBtns = document.querySelectorAll('.js-open-modal');
// .js-close-modal

[...requestBtns].forEach((requestBtn) => {
  requestBtn.addEventListener('click', openModal);
});
