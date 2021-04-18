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
    editTask : function(name,text,flag) {

      let index = 0;

      for (el of toDoList){
          if (el['name'] === name){
            break;
        }
        index++;
      }
      if (index < toDoList.length){
        toDoList[index]['name'] = name;
        toDoList[index]['text'] = text;
        toDoList[index]['flag'] = flag;
      }
    },
    viewList : function(name,text,flag) {

      let valueTrue = 0,
          valueFalse = 0;

      for (el of toDoList){
        console.log(typeof el['flag']);
          if (el['flag'] == 'true'){
            valueTrue++;
        } else valueFalse++;
      }

      let values = {
        all : valueTrue+valueFalse,
        completed : valueTrue,
        uncompleted : valueFalse,

      }
      console.log(values);
    },

}

let toDoList = [
  {
    name : 'Первое дело',
    text : 'Создано для теста',
    flag : false,
  },
];

methodsForList.addNewTask('Первое дело','Создано для теста','false');
methodsForList.addNewTask('Имя','Текст','true');
methodsForList.addNewTask('Имя','Текст','true');
console.log(toDoList);

// methodsForList.addNewTask('Имя','Текст','true');
// methodsForList.deleteTask('Имя');
// methodsForList.deleteTask('Первое дело');
// console.log(toDoList);


// methodsForList.editTask('Первое дело','Создано для проверки изменения','true');
// console.log(toDoList);

methodsForList.viewList();
