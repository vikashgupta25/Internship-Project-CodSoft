let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    if (currentNumber.includes('.') && number === '0') return;
    currentNumber += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    updateDisplay();
}

function calculatePercentage() {
    if (currentNumber === '') return;
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateDisplay();
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentNumber || '0';
}