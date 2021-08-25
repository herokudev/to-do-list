import _ from 'lodash';
import './style.css';

/*function component1() {
  const element = document.createElement('div');
  const icon = document.createElement('i');

  // Lodash, now imported by this script
  element.innerHTML = "Today's To Do";
  element.classList.add('list-header');

  return element;
}*/

function component2() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = "Add to your list...";
  element.classList.add('list-item');

  return element;
}

function component3() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = "Clear all completed";
  element.classList.add('list-footer');

  return element;
}

//document.body.appendChild(component1());
document.body.appendChild(component2());
document.body.appendChild(component3());