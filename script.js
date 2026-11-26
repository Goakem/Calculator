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

// function updateOperation(numOne){
    /*
      What this function does is to take an operand 
      i.e. numOne and assigns it the value that is 
      being clicked from the html buttons

      step 1: On click of a button
      step 2: If this is the first click and the operator is yet to be clicked, 
      assign it to the numOne variable
      step 3: if the number is clicked and the operator has been clicked then 
      assign it the second operand variable i.e. numTwo
    */

    // /* Upon reading it a second time I believe it is to update the first variable 
    // i.e. numOne is equal to the numbers clicked from the html buttons */
    // const screen = document.querySelector(".display");
    // console.log(screen);
    // const content = document.createElement("div");
    // content.classList.add("content");
    // content.textContent = numbers;
    
    // screen.appendChild(content);


    function updateVariable(e) {
        numOne += e.target.textContent;
        console.log(numOne);
        screenContent.textContent = Number(numOne);
        screen.appendChild(screenContent);
        return Number(numOne);
    }
    // get all the button that is a number from the calculator
    const numberBtn = document.querySelectorAll('.number');
    const screen = document.querySelector('.display');
    numberBtn.forEach( (btn) => {
        btn.addEventListener('click', updateVariable)
    });
    const screenContent = document.createElement('div');
    screenContent.classList.add('.content');

    