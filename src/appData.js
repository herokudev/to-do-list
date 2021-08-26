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
}

const appdata = new AppData();
export { appdata as default };