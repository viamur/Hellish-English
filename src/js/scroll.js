const links = document.querySelectorAll('.js-scroll');
const mobileMenuRef = document.querySelector("[data-menu]");
const body = document.querySelector("body");
const logo = document.querySelector("[data-logo]");
const burger = document.querySelector('.burger');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });

  body.classList.remove("no-scroll");
  mobileMenuRef.classList.remove("is-open");
  logo.classList.toggle("is-open");
  burger.classList.toggle('burger--active');
}
