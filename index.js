function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    const namedFunction = function(){
        console.log(`yo`)
    }
    return namedFunction;
}


let x
function otherFunction(x) {
    return function() {
        console.log('yo')
    }
}
function returnsAnAnonymousFunction() {
    return otherFunction(x);
}
