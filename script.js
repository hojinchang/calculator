const buttons = document.querySelectorAll("button");
const numberDisplay = document.querySelector(".number-display");
const operationDisplay = document.querySelector(".operation-display");
const allClearButton = document.getElementById("AC");
const deleteButton = document.getElementById("id");
const percentButton = document.getElementById("percent");
const decimalButton = document.getElementById("decimal");


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


let displayValue = "0";
let mathStatement = "";
let operands = [];
let operator = "";
let operatorFlag = false;
let submitFlag = false;
buttons.forEach(button => {
    button.addEventListener("click", function(e) {

        if (e.target.id === "AC") {
            displayValue, mathStatement, operands, operator, operatorFlag, submitFlag = allClear();
        }

        if (e.target.id === "delete" && displayValue !== "0" && !operatorFlag) {
            displayValue = displayValue.slice(0, -1);
        }

        if (e.target.id === "percent") {
            displayValue = getPercent(Number(displayValue));
        }

        if (e.target.id === "decimal") {
            displayValue = displayValue + ".";
        }

        if (e.target.className === "operand") {
            if (displayValue === "0" || operatorFlag) {
                displayValue = e.target.value;
                operatorFlag = false;
            } else {
                displayValue += e.target.value;
            }
        }

        if (e.target.className === "operator") {
            operator = e.target.value;
            operands.push(Number(displayValue));
            mathStatement = `${operands[0]} ${operator}`;
            operatorFlag = true;
        }

        if (e.target.className === "submit") {
            operands.push(Number(displayValue));

            displayValue = operate(operands[0], operands[1], operator);
            mathStatement = `${operands[0]} ${operator} ${operands[1]} =`;

            operands = [];
            submitFlag = true;
        }

        numberDisplay.textContent = displayValue;
        operationDisplay.textContent = mathStatement;

        if (submitFlag) {
            displayValue, mathStatement, operands, operator, operatorFlag, submitFlag = allClear();
            submitFlag = false;
        }

    });
})
