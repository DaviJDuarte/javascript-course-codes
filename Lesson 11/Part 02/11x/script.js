const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div class="task-name">${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        updateLocalStorage();
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (!name) {
    alert('Please enter a name for the task!');
    return;
  }
  if (!dueDate) {
    alert('Please enter a date for the task!');
    return;
  }

  todoList.push({
    name,
    dueDate
  });

  updateLocalStorage();
  inputElement.value = '';
  renderTodoList();
}

function updateLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}