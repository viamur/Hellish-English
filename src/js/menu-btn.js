(() => {
  const openBtnRef = document.querySelector("[data-menu-open]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const logo = document.querySelector("[data-logo]");
  const body = document.querySelector("body");

  openBtnRef.addEventListener("click", toggle);

  function toggle() {
    const expanded =
      openBtnRef.getAttribute("aria-expanded") === "true" || false;

    openBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    logo.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
  }
})();

