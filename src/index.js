let step = 0;
const maxSteps = 20;

function palindrom(num){
    const reverseNum = Number(String(num).split('').reverse().join(''));
    if (num === reverseNum) {
        return {
            result : num,
            steps :  step || ++step,
        };
    }
    ++step;
    if (step === maxSteps) {
        throw Error('Lister number');
    }
    return palindrom(num + reverseNum);
}

const someNumber = 11;

palindrom(someNumber);