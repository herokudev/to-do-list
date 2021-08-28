import './style.css';
import statusCheck from './status';
import appdata from './appData';

const tasksList = document.querySelector('#container');
const addBtn = document.querySelector('.add-btn');
const addItem = document.querySelector('.add-list');
const clearBtn = document.querySelector('.clear-btn');

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
  let myToDoList = [];
  myToDoList = appdata.get();
  myToDoList.forEach((item) => {
    addTaskToList(item);
  });
  const chkBoxList = document.querySelectorAll('.check-item');
  chkBoxList.forEach((chkBox) => {
    chkBox.addEventListener('change', () => {
      statusCheck.update(chkBox.id, chkBox.checked);
    });
  });
  const itemsList = document.querySelectorAll('.task-desc');
  itemsList.forEach((itemDesc) => {
    const elem = itemDesc.parentElement;
    itemDesc.addEventListener('keyup', () => {
      const rowId = elem.querySelector('.idItem');
      appdata.editDescrip(rowId.innerHTML, itemDesc.innerHTML);
    });
  });
};

const addPending = (pList) => {
  const newData = [];
  localStorage.setItem('myToDoList', JSON.stringify(newData));
  const myToDoList = [];
  pList.forEach((item) => {
    const taskItem = { index: 0, completed: false, description: '' };
    taskItem.index = myToDoList.length + 1;
    taskItem.description = item.description;
    myToDoList.push(taskItem);
    addTaskToList(taskItem);
  });
  localStorage.setItem('myToDoList', JSON.stringify(myToDoList));
};

document.addEventListener('DOMContentLoaded', () => {
  dispalyList();
  statusCheck.setLocal();
});

addBtn.addEventListener('click', () => {
  let myToDoList = [];
  myToDoList = appdata.get();
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
  if (listElement.includes('task-item')) {
    e.preventDefault();
  } else if (listElement.includes('fa-trash')) {
    const item = element.parentElement;
    const itemDesc = item.querySelector('.task-desc');
    appdata.deleteList(itemDesc.innerHTML);
    item.remove();
  }
  appdata.updateIndex();
});

clearBtn.addEventListener('click', () => {
  const mainList = document.querySelectorAll('.task-item');
  mainList.forEach((item) => {
    item.remove();
  });
  const newData = appdata.get();
  const itemsList = newData.filter((item) => item.completed === false);
  addPending(itemsList);
});