//import '../../src/css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const yearElem = document.getElementById('footer_year');
  yearElem.textContent = (new Date()).getFullYear();

  const burger = document.querySelector('.header__mob-menu');

  if(!burger) {
    return;
  }
  const menu = document.querySelector('.header__list');

  burger.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('active');
  });
});
