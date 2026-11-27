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

let numOne = '';
let numTwo = '';
let operator = '';

function operate(numOne, numTwo, operator) {
    if (func === '+') {
        return add(numOne, numTwo);
    } else if (func === '-') {
        return subtract(numOne, numTwo);
    } else if(func === '*'){
        return multiply(numOne, numTwo);
    } else if(func === '/'){
        return divide(numOne, numTwo);
    }
}

    function updateVariable(e) {
        // numOne += e.target.textContent;
        // console.log(numOne);
        // screenContent.textContent = Number(numOne);
        // screen.appendChild(screenContent);
        // console.log(e);
        // return Number(numOne);
        /*If the click is before the click of any operator, then it should be registered as numOne
        else if the click is a digital button and an operator button has been clicked then numTwo 
        should be updated */
        if (operator === '' ) {
            numOne += e.target.textContent;
            screenContent.textContent = numOne;
            console.log("This is numOne", numOne);
            return numOne;
        } else {
            numTwo += e.target.textContent;
            screenContent.textContent = numTwo;
            console.log("This is numTwo", numTwo);
            return numTwo;
        }
    }
    const numberBtn = document.querySelectorAll('.number');
    const screen = document.querySelector('.display');
    const operatorBtn = document.querySelectorAll('.operator');
    const equalSign = document.querySelector('.equator');
    const screenContent = document.createElement('div');
    screenContent.classList.add('.content');
    screen.appendChild(screenContent);

    numberBtn.forEach( (btn) => {
        btn.addEventListener('click', updateVariable)
    });
    operatorBtn.forEach( (btn) => {
        btn.addEventListener('click', function (e) {
            operator = e.target.textContent;
            console.log(operator);
            return operator;
        });
    })