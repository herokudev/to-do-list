import './style.css';

function component2() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Add to your list...';
  element.classList.add('list-item');

  return element;
}

function component3() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Clear all completed';
  element.classList.add('list-footer');

  return element;
}

document.body.appendChild(component2());
document.body.appendChild(component3());