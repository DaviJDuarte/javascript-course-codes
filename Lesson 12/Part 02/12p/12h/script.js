let messages = 2;

const addButtonElement = document.getElementById('js-add');
const removeButtonElement = document.getElementById('js-remove');

addButtonElement.addEventListener('click', () => messages++);

removeButtonElement.addEventListener('click', () => messages--);

setInterval(() => {
  if (document.title === 'App') {
    document.title = `(${messages}) New Messages`;
  } else {
    document.title = 'App';
  }
}, 1000)

