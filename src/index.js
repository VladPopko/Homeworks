'use strict';
// First task

// function toggleClass(elem, nameClass){

//     let classArray = elem.className.split(' ');
//     if (classArray.find(el => el === nameClass)){
//         classArray = classArray.filter(el => el !== nameClass);
//     } else{
//         classArray.push(nameClass);
//     }
//     classArray = classArray.join(' ');
//     elem.className = classArray;

// }

// const $div = document.querySelector('div');

// toggleClass($div, 'border') ;


// Second task

const nullElem = 0;
const firstElem = 1;

function outputFromSearch(){
    const $searchArray = location.search.substring(firstElem).split('&');

    for (let i = 0; i < $searchArray.length; i++){
        $searchArray[i] = $searchArray[i].split('=');
        if ($searchArray[i][nullElem] === 'email'){
            $searchArray[i][firstElem] = decodeURIComponent($searchArray[i][firstElem]);
        }
    }

    const $form = document.forms['reg-form'].elements;
    for (const el of $form){
        for (let i = 0; i < $searchArray.length; i++){
            if(el.dataset.target === $searchArray[i][nullElem]){
                el.value = $searchArray[i][firstElem];
            }
        }
    }
}

outputFromSearch();