function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let numOne;
let operand;
let numTwo;

function operate(numOne, numTwo, func) {
    let operation;
    if (func === add) {
        operation = add(numOne, numTwo);
    } else if (func === subtract) {
        operation = subtract(numOne, numTwo);
    } else if(func === multiply){
        operation = multiply(numOne, numTwo);
    } else{
        operation = divide(numOne, numTwo);
    }
    return operation;
}

function updateOperation(numOne, numTwo, operator){

}