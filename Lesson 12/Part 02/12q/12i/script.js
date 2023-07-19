let messages = 2;
let isRunning;
changeTitle();

const addButtonElement = document.getElementById('js-add');
const removeButtonElement = document.getElementById('js-remove');

addButtonElement.addEventListener('click', () => {
  messages++;
  changeTitle();
});

removeButtonElement.addEventListener('click', () => {
  if (messages - 1 < 0)
    return
  messages--;
  changeTitle();
});

function changeTitle() {
  clearInterval(isRunning);
  if (messages === 0) {
    document.title = 'App'
  } else {
    isRunning = setInterval(() => {
      if (document.title === 'App') {
        document.title = `(${messages}) New Messages`;
      } else {
        document.title = 'App';
      }
    }, 1000)
  }
}



