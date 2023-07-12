let messages = 2;

const addButtonElement = document.getElementById('js-add');
const removeButtonElement = document.getElementById('js-remove');

addButtonElement.addEventListener('click', function () {
  messages++;
})

removeButtonElement.addEventListener('click', function () {
  messages--;
})

setInterval(function () {
  if (document.title === 'App') {
    document.title = `(${messages}) New Messages`;
  } else {
    document.title = 'App';
  }
}, 1000)

