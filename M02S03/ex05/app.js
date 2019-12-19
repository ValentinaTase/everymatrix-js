const showMessage = (message, targetElement) => {
  let paragraph = document.getElementById(targetElement);

  if (paragraph) {
    paragraph.innerText = message;
  } else {
    let p = document.createElement('p');
    p.innerText = message;
    p.id = targetElement;
    document.body.appendChild(p);
  }
};

let originalW = window.innerWidth;
let originalH = window.innerHeigth;
let surface = (window.innerWidth * window.innerHeigth);

window.addEventListener('resize', module.exports((evt) => {
  console.log('Fereastra si-a schimbat dimensiunea');
  showMessage(`Fereastra are ${evt.target.surface} pixeli.`, 'toaster');

  if (evt.target.innerWidth !== originalW) {
    showMessage('Fereastra si-a schimbat latimea.', 'salam');
  } else {
    showMessage('Fereastra NU si-a schimbat latimea.', 'salam');
  }
}, 400));