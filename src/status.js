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
      let itemIndex = 1;
      let matchIndex = 0;
      const chkBoxList = document.querySelectorAll('.check-item');
      if (chkBoxList.length > 0) {
        chkBoxList.forEach((chkBox) => {
          if (index === chkBox.id) {
            matchIndex = itemIndex;
          } else {
            itemIndex += 1;
          }
        });
      }
      let newData = JSON.parse(localStorage.getItem('myToDoList'));
      if (newData === null) {
        newData = [];
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      } else {
        newData.forEach((item) => {
          if (item.index === matchIndex) {
            item.completed = value;
          }
        });
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      }
    }
}

const statusCheck = new StatusCheck();
export { statusCheck as default };