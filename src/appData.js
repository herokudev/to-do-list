class AppData {
    get = () => {
      let newData = JSON.parse(localStorage.getItem('myToDoList'));
      if (newData === null) {
        newData = [];
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      }
      return newData;
    }

    updateIndex = () => {
      let newData = JSON.parse(localStorage.getItem('myToDoList'));
      if (newData === null) {
        newData = [];
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      } else {
        let listIndex = 1;
        newData.forEach((item) => {
          item.index = listIndex;
          listIndex += 1;
        });
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      }
    }

    editDescrip = (rowId, itemDesc) => {
      rowId = `check-${rowId}`;
      let itemIndex = 1;
      let matchIndex = 0;
      const chkBoxList = document.querySelectorAll('.check-item');
      if (chkBoxList.length > 0) {
        chkBoxList.forEach((chkBox) => {
          if (rowId === chkBox.id) {
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
            item.description = itemDesc;
          }
        });
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      }
    }

    deleteList = (value) => {
      let newData = JSON.parse(localStorage.getItem('myToDoList'));
      if (newData === null) {
        newData = [];
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      } else {
        let listIndex = 0;
        newData.forEach((item) => {
          if (item.description === value) {
            newData.splice(listIndex, 1);
          }
          listIndex += 1;
        });
      }
      localStorage.setItem('myToDoList', JSON.stringify(newData));
    }
}

const appdata = new AppData();
export { appdata as default };