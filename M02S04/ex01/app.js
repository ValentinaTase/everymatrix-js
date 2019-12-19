let boxElement = document.querySelector('.box');
let applyButton = document.querySelector('#applyButton');
let cssClassName = 'animate-class';

window.setTimeout(() => {
  boxElement.classList.add('cssClassName');

  window.setTimeout(() => {
    boxElement.classList.remove('cssClassName');
  }, 2000);
}, 2000);

applyButton.addEventListener('click', () => {
  boxElement.classList.toggle(cssClassName);
});