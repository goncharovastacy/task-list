const addButton = document.getElementById('addButton');
const input = document.getElementById('input');
const tasks = document.getElementById('tasks');
const clearButton = document.getElementById('clearButton');

clearButton.setAttribute('disabled', true);
function addTask () {
    if (input.value !== '') {
tasks.innerHTML = tasks.innerHTML + `<div  class="tasks__task"><p>${input.value}</p><input type="checkbox" name="" ></div>`;
document.getElementById('tasks__text').hidden = true;
input.value = '';
clearButton.removeAttribute('disabled');
    }
    else {alert('Введите задачу')};
}

function clearTasks () {
    const allTasks = document.querySelectorAll('.tasks__task');
    for(let i = 0; i < allTasks.length; i++){
        allTasks[i].outerHTML = '';
    }
    document.getElementById('tasks__text').hidden = false;
    clearButton.setAttribute('disabled', true);
}

addButton.addEventListener('click', addTask);
clearButton.addEventListener('click', clearTasks);