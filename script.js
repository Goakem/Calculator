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
let operand = '';

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
        numOne += e.target.textContent;
        console.log(numOne);
        screenContent.textContent = Number(numOne);
        screen.appendChild(screenContent);
        return Number(numOne);
    }
    const numberBtn = document.querySelectorAll('.number');
    const screen = document.querySelector('.display');
    const operatorBtn = document.querySelectorAll('.operator');
    numberBtn.forEach( (btn) => {
        btn.addEventListener('click', updateVariable)
    });
    const screenContent = document.createElement('div');
    screenContent.classList.add('.content');
