const paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  let messageParagraph = document.createElement('p');

  if(!logContainer) {
    logContainer = document.createElement('div');
    logContainer.classList.add('Logs');
    document.body.appendChild(logContainer);
  }

  for (let i = 0; i < message.length; i++) {
    message += `${messages[i]} `;
  }

  messageParagraph.innerText = message.trim();
  logContainer.appendChild(messageParagraph);
};

console.domlog = paragraphLog;