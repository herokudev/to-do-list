const myToDoList = [];

class appData {
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
 
const appdata = new appData();
export { appdata as default };