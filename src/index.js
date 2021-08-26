import './style.css';
import statusCheck from './status';
import appdata from './appData';

const tasksList = document.querySelector('#container');
const addBtn = document.querySelector('.add-btn');
const addItem = document.querySelector('.add-list');
let myToDoList = [];

const addTaskToList = (myTask) => {
  const row = document.createElement('li');
  row.classList.add('task-item');
  row.innerHTML = `
    <div class="desc-cont">
    <input type="checkbox" class="check-item">
    <p class="task-desc" contentEditable="true">${myTask.description}</p>
    <p class="idItem">${myTask.index}</p>
    </div>
    <i class="fa fa-ellipsis-v move-handle"></i>
    <i class="fa fa-trash delete"></i> 
    `;
  tasksList.appendChild(row);
};

const dispalyList = () => {
  myToDoList.forEach((item) => {
    addTaskToList(item);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  myToDoList = appdata.get();
  dispalyList();
  statusCheck.setLocal();
});

addBtn.addEventListener('click', () => {
  const taskItem = { index: 0, completed: false, description: '' };
  taskItem.index = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  taskItem.description = addItem.value;
  myToDoList.push(taskItem);
  localStorage.setItem('myToDoList', JSON.stringify(myToDoList));
});

tasksList.addEventListener('click', (e) => {
  const element = e.target;
  const itemIndex = element.parentElement.querySelector('.idItem');
  const itemStatus = element.parentElement.querySelector('.check-item');
  statusCheck.update(itemIndex.innerHTML, itemStatus.checked);
});