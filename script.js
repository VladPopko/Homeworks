function camelize(str){

  var strNew = '',
      array = str.split('-');

  for (var i = 0; i < array.length; i++){

    for (var j = 0; j < array[i].length; j++){

      if (i!=0 && j == 0){
        strNew += array[i][0].toUpperCase();
        continue;
      }

      strNew += array[i][j];

    }
  }

  return strNew;

}

function camelizeArray(array){

  var arrayNew = [];

  for (i = 0; i < array.length; i++){

    arrayNew[i] = camelize(array[i]);

  }

  return arrayNew;

}

function customMapCallback(elem) {
  return elem * 2;
}

function customMap(array,callback) {

  var arrayNew = [];

  for (var i = 0; i < array.length; i++){
    arrayNew[i] = callback(array[i]);
  }

  return arrayNew;
}

function customFilterCallback(elem) {
  return elem == 'q';
}

function customFilter(array,callback) {

  var arrayNew = [],
      arrayNewIndex = 0;

  for (var i = 0; i < array.length; i++){
    if (callback(array[i])){
      arrayNew[arrayNewIndex] = array[i];
      arrayNewIndex++;
    }
  }

  return arrayNew;
}

var stringsInCamel = ['borderTopLeftWidth', 'fontSize', 'backgroundColor'];
var numbers = [2,4,6,8,10];
var string = ['qwe','q','s','z','q'];


// for (string of stringsInCamel){
//   console.log(camelize(string));
// }

// console.log(camelizeArray(stringsInCamel));

// console.log(customMap(numbers,customMapCallback));

console.log(customFilter(string,customFilterCallback));
