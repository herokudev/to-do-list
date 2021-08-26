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
      console.log('Enter --> statuscheck.update')
      const indexParam = index.substring(6, index.length);
      const indexNum =  parseInt(indexParam, 10);
      console.log(indexNum);
      console.log(typeof indexNum);
      console.log(value);
      let newData = JSON.parse(localStorage.getItem('myToDoList'));
      if (newData === null) {
        newData = [];
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      } else {
        newData.forEach((item) => {
          if (item.index === indexNum) {
            item.completed = value;
          }
        });
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      }
    }
}

const statusCheck = new StatusCheck();
export { statusCheck as default };