function padString(target, char, length, fromStart=false){
  var message = target;
  for (var i = target.length;i < length; i++){
    if (fromStart){
      message = char + message;
    } else {
      message = message + char ;
    }
  }

  return message;
}
console.log(padString('world', '*', 10));
