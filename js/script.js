const addMessage = document.querySelector('.inp_task');
const addButton = document.querySelector('.add');
const todo = document.querySelector('.todo');
const deadL = document.querySelector('.inp_dead');
let todoList = [];

function displayMessages() {
  let displayMessage = '';
  todoList.forEach((item, i) => {
    displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}'${item.checked ? 'checked' : ''}>
    <label for='item_${i}'>${item.todo}</label>
    <label for='item_${i}'> Дедлайн: ${item.deadline}</label>   
   </li>
`;
    todo.innerHTML = displayMessage;
  });
}
if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}
addButton.addEventListener('click', () => {
  const newTodo = {
    todo: addMessage.value,
    deadline: deadL.value,
    checked: false,
    important: false,
  };
  todoList.push(newTodo);
  displayMessages();
  localStorage.setItem('todo', JSON.stringify(todoList));
  addMessage.value = ' ';
  deadL.value = '';
});
todo.addEventListener('change', (event) => {
  const valueLabel = todo.querySelector(`[for=${event.target.getAttribute('id')}]`).innerHTML;
  todoList.forEach((item) => {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  });
});
