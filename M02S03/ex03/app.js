let stage = document.querySelector('.stage');
let message = document.querySelector('.message');
let countElement = document.querySelector('.count');
let count = 0;

stage.addEventListener('mouseover', () => {
message.innerText = 'Mouseul este pe scena';
count = count + 1; 
});

stage.addEventListener('mouseout', () => {
  message.innerText = 'Mouseul nu este pe scena';
  countElement.innerText = `Mouseul a fost pe scena de ${count} ori.`;
});
