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

var stringsInCamel = ['borderTopLeftWidth', 'fontSize', 'backgroundColor'];

// for (string of stringsInCamel){
//   console.log(camelize(string));
// }

console.log(camelizeArray(stringsInCamel));
