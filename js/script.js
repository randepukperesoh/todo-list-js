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
    
    
</li>
`;
    todo.innerHTML = displayMessage;
  });
}
addButton.addEventListener('click', () => {
  const newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };
  todoList.push(newTodo);
  displayMessages();
  addMessage.value = '';
  deadL.value = '';
});
