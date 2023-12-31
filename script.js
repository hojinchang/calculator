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

function resetDisplay () {
    numberDisplay.textContent = "";
    resetNumDisplay = false;
}

function allClear() {
    numberDisplay.textContent = "0";
    operationDisplay.textContent = "";
    firstOperand = null;
    secondOperand = null;
    operator = null;
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
    if (firstOperand !== null && operator !== null) {
        secondOperand = numberDisplay.textContent;
        operation();
        firstOperand = result;
    } else {
        firstOperand = numberDisplay.textContent;
    }

    operator = e.target.value;
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
            if (secondOperand === 0) {
                alert("YOU CAN'T DIVIDE BY 0! C'MON IT'S BASIC MATH!");
                result = "Error";
                allClear();
            } else {
                result = divide(firstOperand, secondOperand);
            }
            break;
    }

    numberDisplay.textContent = String(result).substring(0, 10);
    operator = null;
    resetNumDisplay = true
}


numberDisplay.textContent = "0";
operationDisplay.textContent = "";

const maxDigits = 10;
let firstOperand = null;
let secondOperand = null;
let operator = null;
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
    if (operator !== null && firstOperand !== null) {
        secondOperand = numberDisplay.textContent;
        operationDisplay.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
        operation();
    }
})