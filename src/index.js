'use strict';
// First task


// const $wrapper = document.querySelector('.wrapper');
// let counter = 0;
// const zero = 0;
// const someNumber = 1;
// function generateList(array, $place,startValue){

//     $place.append(document.createElement('ul'));
//     const $ulList = document.querySelectorAll('ul');
//     counter++;
//     for (let i = counter-someNumber; i < $ulList.length; i++){
//         for (let j = 0; j < array.length; j++){
//             if(!(Array.isArray(array[j]))){
//                 $ulList[i].innerHTML += `<li>${array[j]}</li>`;
//             } else{
//                 $ulList[i].innerHTML += '<li></li>';
//             }
//             const $li = document.querySelectorAll('li');
//             if (Array.isArray(array[j])){
//                 generateList(array[j] , $li[startValue],startValue+someNumber);
//             }
//             startValue++;
//         }
//     }
// }

// // const magicNumbers = [1,2, [1.1,1.2,[1.1,[3.2]],1.3] ,3];


// // generateList(magicNumbers , $wrapper, zero);

// Second task

const $wrapper = document.querySelector('.wrapper');

const number = 10;
let counter = 1;
$wrapper.innerHTML = '<table><tbody></tbody></table>';
const $tbody = document.querySelector('tbody');
const $table = document.querySelector('table');

$table.style.textAlign = 'center';

for (let i = 1; i <= number; i++){
    $tbody.innerHTML += '<tr></tr>';
}
const $tr = document.querySelectorAll('tr');

for (let i = 0; i < number; i++){
    for (let j = 0;j < number; j++){
        $tr[i].innerHTML += `<td style="border: 1px solid black;">${counter++}</td>`;
    }
}