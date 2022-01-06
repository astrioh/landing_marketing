const openModal = (e) => {
  const modal = document.querySelector('.modal');
  modal.style.display = 'flex';
};

const closeModal = () => {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
};

const sendRequest = (e) => {
  closeModal();
  alert('Ваша заявка успешно отправлена');
};

const requestBtns = document.querySelectorAll('.js-open-modal');
[...requestBtns].forEach((requestBtn) => {
  requestBtn.addEventListener('click', openModal);
});

const closeBtns = document.querySelectorAll('.js-close-modal');
[...closeBtns].forEach((closeBtn) => {
  closeBtn.addEventListener('click', closeModal);
});

const sendRequestBtns = document.querySelectorAll('.js-send-request');
[...sendRequestBtns].forEach((sendBtn) => {
  sendBtn.addEventListener('click', sendRequest);
});
