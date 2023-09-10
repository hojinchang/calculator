const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const numberDisplay = document.querySelector(".number-display");
const operationDisplay = document.querySelector(".operation-display");
const allClearButton = document.getElementById("AC");
const deleteButton = document.getElementById("delete");
const percentButton = document.getElementById("percent");
const decimalButton = document.getElementById("decimal");
const polarityButton = document.getElementById("polarity");


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

function operate(a, b, operator) {
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "x":
            result = multiply(a, b);
            break;
        case "÷":
            result = divide(a, b);
            break;
    }

    return result;
}

function allClear() {
    displayValue = "0";
    mathStatement = "";
    operands = [];
    operator = "";
    operatorFlag = false;
    submitFlag = false;

    return displayValue, mathStatement, operands, operator, operatorFlag, submitFlag;
}

function resetDisplay () {
    numberDisplay.textContent = "";
    resetNumDisplay = false;
}

function allClear() {
    numberDisplay.textContent = "0";
    operationDisplay.textContent = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    resetNumDisplay = false;
}

function deleteDigit() {
    numberDisplay.textContent = numberDisplay.textContent.slice(0, -1);
}

function getPercent() {
    numberDisplay.textContent = Number(numberDisplay.textContent) / 100;
}

function appendDecimal() {
    numberDisplay.textContent += ".";
}

function changePolarity() {
    numberDisplay.textContent = Number(numberDisplay.textContent) * -1;
}

function appendNumber(number) {
    if (numberDisplay.textContent === "0" || resetNumDisplay) {
        resetDisplay()
    }
    numberDisplay.textContent += number;
};

function selectOperator(e) {
    operator = e.target.value;
    firstOperand = numberDisplay.textContent;
    operationDisplay.textContent = `${firstOperand} ${operator}`;
    resetNumDisplay = true;
}


numberDisplay.textContent = "0";
operationDisplay.textContent = "";

let firstOperand;
let secondOperand;
let operator = "";
let resetNumDisplay = false;

allClearButton.addEventListener("click", () => allClear());
deleteButton.addEventListener("click", () => deleteDigit());
percentButton.addEventListener("click", () => getPercent());
decimalButton.addEventListener("click", () => appendDecimal());
polarityButton.addEventListener("click", () => changePolarity());

operandButtons.forEach(button => {
    button.addEventListener("click", e => appendNumber(e.target.value))
});

operatorButtons.forEach(button => {
    button.addEventListener("click", e => selectOperator(e))
});