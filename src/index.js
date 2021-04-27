function customBindCall(func,object,...argsOut){
    return function(...argsIn){
        const args = argsOut.concat(argsIn);
        const newFunc = func.call(object,...args);

        return newFunc;

    };
}

function customBindApply(func,object,...argsOut){
    return function(...argsIn){
        const args = argsOut.concat(argsIn);
        const newFunc = func.apply(object,args);

        return newFunc;

    };
}

function baz() {
    // check this
}

const someObject = {
    a : 10,
};

const someNumber = 20,
    someValue1 = 30,
    someValue2 = 40;

const customCall = customBindCall(baz,someObject,someNumber,someValue1,someValue2);
customCall();

const customApply = customBindApply(baz,someObject,someNumber,someValue1,someValue2);
customApply();

