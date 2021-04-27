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

function baz(val,val2,val3) {
    console.log(this);
    console.log(this.a + val);
    console.log(this.a + val + val2);
    console.log(this.a + val + val2 + val3);
}

const someObject = {
    a : 10,
}

let someNumber = 20,
    someValue1 = 30,
    someValue2 = 40;

const customApply = customBindApply(baz,someObject,someNumber,someValue1,someValue2);

const customCall = customBindCall(baz,someObject,someNumber,someValue1,someValue2);