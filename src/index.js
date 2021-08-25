import './style.css';

const tasksList = document.querySelector('#container');

const addTaskToList = (myTask) => {
  const row = document.createElement('li');
  row.classList.add('task-item');
  row.innerHTML = `
    <div class="desc-cont">
    <input type="checkbox" class="check-item">
    <p class="task-desc" contentEditable="true">${myTask.description}</p>
    </div>
    <i class="fa fa-ellipsis-v move-handle"></i>
    <i class="fa fa-trash delete"></i> 
    `;
  tasksList.appendChild(row);
};

const dispalyList = () => {
  const myToDoList = [];
  const taskItem1 = { index: 1, completed: false, description: 'Project milestone1' };
  const taskItem2 = { index: 2, completed: false, description: 'Project milestone2' };
  const taskItem3 = { index: 3, completed: false, description: 'Project milestone3' };
  myToDoList.push(taskItem1);
  myToDoList.push(taskItem2);
  myToDoList.push(taskItem3);

  myToDoList.forEach((item) => {
    addTaskToList(item);
  });
};

dispalyList();