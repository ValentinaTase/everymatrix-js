let button = document.getElementById('clicker');
let removeEventButton = document.getElementById('removeEventButton');
let queryButton = document
const clickHandler = () => {
alert('Ai apasat butonul!');
};

button.addEventListener('click', clickHandler);
removeEventListener.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

queryButton.addEventListener('click', () => {
  age = prompt('Introdu varssta: ');
  let message = `Ai ${age} ani.`;

  messageParagraph.innerText = message;
});

