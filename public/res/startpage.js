import '../../src/css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const yearElem = document.getElementById('footer_year');
  yearElem.textContent = (new Date()).getFullYear();


});
