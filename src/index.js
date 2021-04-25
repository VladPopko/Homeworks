// FIRST TASK

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


// SECOND TASK

const defaultValue = 0;
const valueToUp = 1;

function createCounter(
    defaultValueFunction = defaultValue,
    valueToUpFunction = valueToUp) {

    let value = defaultValueFunction;

    return {
        standartValue () {
            value = defaultValueFunction;
            return value;
        },
        count () {
            value += valueToUpFunction;
            return value;
        },
    };
}

const fblikes = createCounter();
fblikes.count();
fblikes.count();
fblikes.standartValue();

const instalikes = createCounter();

instalikes.count();
instalikes.count();
instalikes.standartValue();
