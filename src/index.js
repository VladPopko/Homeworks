'use strict';
// First task

function toggleClass(elem, nameClass){

    let classArray = elem.className.split(' ');
    if (classArray.find(el => el === nameClass)){
        classArray = classArray.filter(el => el !== nameClass);
    } else{
        classArray.push(nameClass);
    }
    classArray = classArray.join(' ');
    elem.className = classArray;

}

const $div = document.querySelector('div');

toggleClass($div, 'border') ;


// Second task

