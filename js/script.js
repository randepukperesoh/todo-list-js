
let addMessage=document.querySelector('.inp_task'),
addButton = document.querySelector('.add'),
todo= document.querySelector('.todo'),
deadL=document.querySelector('.inp_dead')
let todoList=[];
if (localStorage.getItem('todo')){
    todoList= JSON.parse(localStorage.getItem('todo'))
    displayMessages();
}
addButton.addEventListener('click',function(){
    let newTodo={
        todo: addMessage.value,
        deadline:deadL.value,
        checked:false,
        important:false,
    }
    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo',JSON.stringify(todoList));
    addMessage.value='';
    deadL.value='';

});
  
function displayMessages(){
    let displayMessage ='';
todoList.forEach(function(item, i){
displayMessage += `
<li>
    <input type='checkbox' id='item_${i}'${item.checked ? 'checked':''}>
    <label for='item_${i}'>${item.todo}</label>
    <label for='item_${i}'> Дедлайн: ${item.deadline}</label>
    
</li>
`;
todo.innerHTML=displayMessage;
});
}
todo.addEventListener('change',function(event){
let valueLabel=todo.querySelector('[for='+(event.target.getAttribute('id'))+']').innerHTML;
todoList.forEach(function(item){
    if(item.todo===valueLabel){
        item.checked=!item.checked;
        localStorage.setItem('todo',JSON.stringify(todoList));
    }
})
console.log(deadline)
});