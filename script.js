function getResultAll(operation){

  var indexStart, result;

  for (var i=1; i < arguments.length; i++){

    if (typeof arguments[i] === 'number') {
     result = arguments[i];
     indexStart = i;
     break;
   } else {
     result = 'Нет числа';
   }

 }

  for (var i=indexStart+1; i < arguments.length; i++){

    if (typeof arguments[i] === 'number') {

      switch (operation) {
        case '+':
          result += arguments[i];
          break;
        case '-':
          result -= arguments[i];
          break;
        case '/':
          result /= arguments[i];
          break;
        case '*':
          result *= arguments[i];
          break;
        default:
          result = 'Неизвестная операция';
          break;
      }

    }

  }

  return result;
}

function reverseString(string){

  var newString = string[string.length-1];

  for (var i = string.length-2; i >= 0; i--){
    newString += string[i];
  }

  return newString;
}

function isCharPresent(string, char){

  var flag = false;

  for(var i = 0; i < string.length; i++){

    if (string[i] == char){
      flag = true;
      break;
    }

  }

  return flag;
}

function charIndexOf(string, char){

  var index = -1;

  for (var i = 0; i < string.length; i++){

    if (string[i] == char){
      index = i;
      break; // may comment to receive index of last
    }

  }

  return index;
}
// console.log(getResultAll('+',10,'sadsadas',5));
// console.log(getResultAll('-',10,'sadsadas',5));
// console.log(getResultAll('*',10,'sadsadas',5));
// console.log(getResultAll('/',10,'sadsadas',5));
// console.log(getResultAll('*','sdsadsadsa','sadsadas','dsfdsfsd'));
// console.log(getResultAll('+', 5, 6, 10));
// console.log(getResultAll('*', 2, 5, 30));

// console.log(reverseString('Hello'));
// console.log(reverseString('olleH'));


// console.log(isCharPresent('vvvSSSSS','S'));

console.log(charIndexOf('StrokaS', 'S'));
