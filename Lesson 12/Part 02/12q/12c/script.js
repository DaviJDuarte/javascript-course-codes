const startButtonElement = document.querySelector('.js-start-button');

startButtonElement.addEventListener('click', () => {
  setTimeout(() => {
    startButtonElement.innerHTML = 'Finished!';
  }, 1000);
})