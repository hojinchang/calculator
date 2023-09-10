const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const numberDisplay = document.querySelector(".number-display");
const operationDisplay = document.querySelector(".operation-display");
const allClearButton = document.getElementById("AC");
const deleteButton = document.getElementById("id");
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

function getPercent(value) {
    return value/100;
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
    operands = [];
    operator = "";
    resetNumDisplay = false;
}

function appendNumber(number) {
    if (numberDisplay.textContent === "0" || resetNumDisplay) {
        resetDisplay()
    }
    numberDisplay.textContent += number;
};



numberDisplay.textContent = "0";
operationDisplay.textContent = "";

let operands = [];
let operator = "";
let resetNumDisplay = false;

operandButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        appendNumber(e.target.value)
    })
});

operatorButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        operator = e.target.value;
        operands.push(numberDisplay.textContent);
        operationDisplay.textContent = `${operands[0]} ${operator}`;
        resetNumDisplay = true;
    })
});


allClearButton.addEventListener("click", () => allClear());
