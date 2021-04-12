var student = {
  first_name : "Oleg",
  second_name : "Mongol",
  age : 30,
  career : "unknown",
};

function cloneObj(obj) {

  var obj_clone = {};

  for (var key in obj){
    obj_clone[key] = obj[key];
  }

  return obj_clone;
}

function getValues(obj, separator){

  var str = '';

  for (var key in obj){
    if (str){
      str += separator;
    }
    str += obj[key];
  }
  return str;
}

function getKeys(obj, separator){

  var str = '';

  for (var key in obj){
    if (str){
      str += separator;
    }
    str += key;
  }
  return str;

    return str;
}

function getEntries(obj){

  var str = '';

  for (var key in obj){
    if (str){
      str += '\n';
    }
    str += key + ' : ' + obj[key];
  }

  return str;
}


var student1 = cloneObj(student);
// alert(getEntries(student1));

alert(getValues(student,'+'));
alert(getKeys(student,'+'));
alert(getEntries(student));
