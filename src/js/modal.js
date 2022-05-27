(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    openModalForMenuBtn: document.querySelector('[data-modal-menu-open]'),
    closeModalForMenuBtn: document.querySelector('[data-modal-menu-close]'),
    modal: document.querySelector('[data-modal]'),
    modalForMenu: document.querySelector('[data-modal-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalForMenuBtn.addEventListener('click', toggleModal);
  refs.closeModalForMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modalForMenu.classList.toggle('is-hidden');
  }
})();
