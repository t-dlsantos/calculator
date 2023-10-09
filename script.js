let firstNumber = '';
let secondNumber = '';
let operator = '';
let displayValue = '';

const currentOperation = document.querySelector('.current-operation');
const lastOperation = document.querySelector('.last-operation');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('.equals');

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
    if (b === 0) {
        return 'Error: Division by zero';
    } 
    return a / b;
}

function operate(firstNumber, secondNumber, operator) {
    console.log(firstNumber, secondNumber, operator);
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case 'x':
            return multiply(firstNumber, secondNumber);
        case '÷':
            return divide(firstNumber, secondNumber);
        default:
            return 'Invalid Operator';
    }
}

function updateDisplay(e) {
    const dataNumber = e.target.getAttribute('data-number');
    displayValue += dataNumber;
    currentOperation.textContent = displayValue;
}

function getOperator(e) {
    if(firstNumber === '') {
        firstNumber = displayValue;
        displayValue = '';
    }
    operator = e.target.getAttribute('data-operator');
    lastOperation.textContent = `${firstNumber} ${operator}`;
}

function evaluateEquation() {
    if(operator && secondNumber === '') {
        secondNumber = displayValue;
        const result = operate(Number(firstNumber), Number(secondNumber), operator);
        currentOperation.textContent = result;
        firstNumber = result;
        secondNumber = '';
        operator = '';
        lastOperation.textContent = '';
        displayValue = '';
    }
}

numberButtons.forEach(button => button.addEventListener('click', updateDisplay));
operatorButtons.forEach(operator => operator.addEventListener('click', getOperator));
equals.addEventListener('click', evaluateEquation);
