const myToDoList = [];

class AppData {
    get = () => {
      let newData = JSON.parse(localStorage.getItem('myToDoList'));
      if (newData === null) {
        newData = [];
        localStorage.setItem('myToDoList', JSON.stringify(newData));
      } else {
        newData.forEach((item) => {
          myToDoList.push(item);
        });
      }
      return myToDoList;
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