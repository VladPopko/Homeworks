let methodsForList = {
      addNewTask : function(name,text,flag) {

        let exist = 0;

        for (el of toDoList){
            if (el['name'] === name){
              exist = 1;
          }
        }
        if (exist === 0){
          toDoList.push({'name':name,'text':text,'flag':flag});
        }
      },
  deleteTask : function(name) {

    let index = 0;

    for (el of toDoList){
        if (el['name'] === name){
          break;
      }
      index++;
    }
    if (index < toDoList.length){
      toDoList.splice(index, 1);
    }
  },
  editTask : function() {
        console.log('asdas');
      },
  viewList : function() {
        console.log('asdas');
      },

}

let toDoList = [
  {
    name : 'Первое дело',
    text : 'Создано для теста',
    flag : false,
  },
];

// methodsForList.addNewTask('Первое дело','Создано для теста','false');
// methodsForList.addNewTask('Имя','Текст','true');
// methodsForList.addNewTask('Имя','Текст','true');
// console.log(toDoList);

methodsForList.addNewTask('Имя','Текст','true');
methodsForList.deleteTask('Имя');
methodsForList.deleteTask('Первое дело');
console.log(toDoList);
