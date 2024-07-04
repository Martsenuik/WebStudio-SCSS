(() => {
  const refs = {
    openModalBtn: document.querySelector(".open-mobile-modal"),
    closeModalBtn: document.querySelector(".close-mobile-modal"),
    modal: document.querySelector("[data-mobile-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();