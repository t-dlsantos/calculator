let firstNumber;
let secondNumber;
let operator;

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

function operate() {
    const firstNumber = Number(prompt('a: ', 0));
    const secondNumber = Number(prompt('b: ', 0));
    const operator = prompt('operator: ', '+');
    
    switch(operator) {
        case '+':
            add(firstNumber, secondNumber);
        case '-':
            subtract(firstNumber, secondNumber);
        case '*':
            multiply(firstNumber, secondNumber);
        case '/':
            divide(firstNumber, secondNumber);
    }
}

operate();