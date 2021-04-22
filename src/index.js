function sumFunction (){

    let valueForSum = 0;

    return function(value){

        const result = +value + valueForSum;
        valueForSum += +value;

        return result;

    };
}

const sum = sumFunction();
sum('3');
sum('5');
sum('20');

function createCounter(counter = '0' , value = '1') {
    const defaultValue = counter;
    let calc = 0;
    this.standartValue = function() {
        calc += +counter + +defaultValue;
        return calc;
    };

    this.count = function(){
        calc += +counter + +value;
        return calc;
    };
}
const fblikes = new createCounter('5' , '2');

fblikes.count();
fblikes.count();
fblikes.standartValue();

const instalikes = new createCounter();

instalikes.count();
instalikes.count();
instalikes.standartValue();