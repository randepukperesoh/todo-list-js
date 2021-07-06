const addMessage = document.querySelector('.inp_task');
const addButton = document.querySelector('.add');
const todo = document.querySelector('.todo');
const importanceL = document.querySelector('.inp_importance');
const todoList = [];

function displayMessages() {
  let displayMessage = '';
  todoList.forEach((item, i) => {
    displayMessage += `
<li>
    <label for='item_${i}'>${item.todo}</label>
    <label for='item_${i}'>Важность:${item.importance}</label>
</li>
`;
    todo.innerHTML = displayMessage;
  });
}
addButton.addEventListener('click', () => {
  const newTodo = {
    todo: addMessage.value,
    importance: importanceL.value,
  };
  todoList.push(newTodo);
  displayMessages();
  addMessage.value = '';
});
