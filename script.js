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

let numOne = 0;
let operand;
let numTwo;

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
    numberBtn.forEach( (btn) => {
        btn.addEventListener('click', updateVariable)
    });
    const screenContent = document.createElement('div');
    screenContent.classList.add('.content');

    