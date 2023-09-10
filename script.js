const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const numberDisplay = document.querySelector(".number-display");
const operationDisplay = document.querySelector(".operation-display");
const allClearButton = document.getElementById("AC");
const deleteButton = document.getElementById("delete");
const percentButton = document.getElementById("percent");
const decimalButton = document.getElementById("decimal");
const polarityButton = document.getElementById("polarity");
const submitButton = document.querySelector(".submit");


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
    if (!numberDisplay.textContent.includes(".")) {
        numberDisplay.textContent += ".";
    }
}

function changePolarity() {
    numberDisplay.textContent = Number(numberDisplay.textContent) * -1;
}

function appendNumber(number) {
    if (numberDisplay.textContent === "0" || resetNumDisplay) {
        resetDisplay()
    }

    if (numberDisplay.textContent.length < maxDigits) {
        numberDisplay.textContent += number;
    }
};

function selectOperator(e) {
    operator = e.target.value;
    firstOperand = numberDisplay.textContent;
    operationDisplay.textContent = `${firstOperand} ${operator}`;
    resetNumDisplay = true;
}

function operation() {
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);

    switch (operator) {
        case "+":
            result = add(firstOperand, secondOperand);
            break;
        case "-":
            result = subtract(firstOperand, secondOperand);
            break;
        case "×":
            result = multiply(firstOperand, secondOperand);
            break;
        case "÷":
            result = divide(firstOperand, secondOperand);
            break;
    }

    numberDisplay.textContent = String(result).substring(0, 10);
    resetNumDisplay = true
}


numberDisplay.textContent = "0";
operationDisplay.textContent = "";

const maxDigits = 10;
let firstOperand;
let secondOperand;
let operator = "";
let resetNumDisplay = false;
let result;

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

submitButton.addEventListener("click", () => {
    secondOperand = numberDisplay.textContent;
    operationDisplay.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
    operation();
})