function sumFunction (){

    let valueForSum = 0;

    return function(value){

        const result = value + valueForSum;
        valueForSum += value;

        return result;

    };
}

const sum = sumFunction();
const sumNumber = 3;

sum(sumNumber);

const counterNumber = 0;
const valueNumber = 1;

function createCounter(counter = counterNumber , value = valueNumber) {
    let calc = counter;
    this.standartValue = function() {
        calc = counter;
        return calc;
    };

    this.count = function(){
        calc += value;
        return calc;
    };
}
const fblikes = new createCounter();

fblikes.count();
fblikes.count();
fblikes.standartValue();

const instalikes = new createCounter();

instalikes.count();
instalikes.count();
instalikes.standartValue();
