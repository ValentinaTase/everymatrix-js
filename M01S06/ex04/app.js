(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');
    const showMessage = (message) => {
      let p = document.createElement('p');
      p.innerText = message;
      p.classList.add('message');

      document.body.appendChild(p);

      setTimeout(() => {
        p.remove();
      }, 1000);
    };

    stage.addEventListener('mouseover', () => {
      showMessage('Mouseul este pe scena')

    });
    stage.addEventListener('mouseout', () => {
      showMessage('Mouseul nu este pe scena')

    });

  });
})();