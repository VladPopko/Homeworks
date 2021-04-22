const methodsForList = {
    addNewTask(name,text,flag) {

      const index = toDoList.map (el => el['name'])
      .indexOf(name);

        if (index === -1){
          toDoList.push({'name':name,'text':text,'flag':flag});
        }
      },
    deleteTask(name) {

      const index = toDoList.map (el => el['name'])
      .indexOf(name);

      toDoList.splice(index, 1);
    },
    editTask(name,text,flag) {

      const newArray = toDoList.map (el => el)
      .filter (el => el['name'] === name);

      newArray.map(el => el['text'] = text, el['flag'] = flag);
    },
    viewList(name,text,flag) {

      const newArray = toDoList.map(el => el)
      .filter(el => el['flag'] === 'true');

      const values = {
        all : toDoList.length,
        completed : newArray.length,
        uncompleted : toDoList.length - newArray.length,

      }
    },

}

const toDoList = [
  {
    name : 'Первое дело',
    text : 'Создано для теста',
    flag : false,
  },
];

// methodsForList.addNewTask('Первое дело','Создано для теста','false');
// methodsForList.addNewTask('Имя','Текст','true');
// methodsForList.addNewTask('Имя','Текст','true');

// methodsForList.addNewTask('Имя','Текст','true');
// methodsForList.addNewTask('Имя2','Текст','true');
// methodsForList.addNewTask('Имя3','Текст','true');
// methodsForList.deleteTask('Первое дело');
// methodsForList.deleteTask('Имя2','Текст','true');


// methodsForList.editTask('Первое дело','Создано для проверки изменения','true');

// methodsForList.viewList();
