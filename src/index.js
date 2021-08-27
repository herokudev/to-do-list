import './style.css';
import statusCheck from './status';
import appdata from './appData';

const tasksList = document.querySelector('#container');
const addBtn = document.querySelector('.add-btn');
const addItem = document.querySelector('.add-list');
let myToDoList = [];

const addTaskToList = (myTask) => {
  const chkBoxId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const row = document.createElement('li');
  row.classList.add('task-item');
  row.innerHTML = `
    <div class="desc-cont">
    <input type="checkbox" id="check-${chkBoxId}" class="check-item">
    <p class="task-desc" contentEditable="true">${myTask.description}</p>
    <p class="idItem">${chkBoxId}</p>
    </div>
    <i class="fa fa-ellipsis-v delete"></i>
    <i class="fa fa-trash"></i> 
    `;
  tasksList.appendChild(row);
  appdata.updateIndex();
};

const dispalyList = () => {
  myToDoList.forEach((item) => {
    addTaskToList(item);
  });
  const chkBoxList = document.querySelectorAll('.check-item');
  chkBoxList.forEach((chkBox) => {
    chkBox.addEventListener('change', () => {
      statusCheck.update(chkBox.id, chkBox.checked);
    });
  });

};

document.addEventListener('DOMContentLoaded', () => {
  myToDoList = appdata.get();
  dispalyList();
  statusCheck.setLocal();
});

addBtn.addEventListener('click', () => {
  const taskItem = { index: 0, completed: false, description: '' };
  taskItem.index = myToDoList.length + 1;
  taskItem.description = addItem.value;
  myToDoList.push(taskItem);
  localStorage.setItem('myToDoList', JSON.stringify(myToDoList));
  addTaskToList(taskItem);
  addItem.value = '';
});

tasksList.addEventListener('click', (e) => {
  const element = e.target;
  const listElement = element.outerHTML;
  if (listElement.includes("task-item")) {
    e.preventDefault();
  } else if (listElement.includes("check-item")) {
    console.log('check box item click');

  } else if (listElement.includes("task-desc")) {
      console.log('description item click');

  } else if (listElement.includes("fa-trash")) {
      const item = element.parentElement;
      const itemDesc = item.querySelector('.task-desc');
      appdata.deleteList(itemDesc.innerHTML);  
      item.remove();
  }
  appdata.updateIndex();
});