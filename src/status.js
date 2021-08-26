class StatusCheck {
    setLocal = () => {
      const markedCheckbox = document.querySelectorAll('.check-item');
      let newData = JSON.parse(localStorage.getItem('myToDoList'));
      if (newData === null) {
        newData = [];
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      } else {
        let chkIndex = 0;
        newData.forEach((item) => {
          markedCheckbox[chkIndex].checked = item.completed;
          chkIndex += 1;
        });
      }
    }

    update = (index, value) => {
      let newData = JSON.parse(localStorage.getItem('myToDoList'));
      if (newData === null) {
        newData = [];
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      } else {
        let chkIndex = 0;
        newData.forEach((item) => {
          if (item.index == index) {
            item.completed = value;
          }              
          chkIndex += 1;
        });
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      }
    }
}

const statusCheck = new StatusCheck();
export { statusCheck as default };