const startButtonElement = document.querySelector('.js-start-button');

startButtonElement.addEventListener('click', function () {
  setTimeout(function () {
    startButtonElement.innerHTML = 'Finished!';
  }, 1000);
  this.innerHTML = 'Loading...';
})