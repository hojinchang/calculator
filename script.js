const buttons = document.querySelectorAll("button");
const numberDisplay = document.querySelector(".number-display");
const operationDisplay = document.querySelector(".operation-display");
const allClear = document.getElementById("AC");


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


let displayValue = "0";
let mathStatement = "";
let operands = [];
let operator = "";
let operation = {};
buttons.forEach(button => {
    button.addEventListener("click", function(e) {

        if (e.target.id === "AC") {
            displayValue = "0";
            mathStatement = "";
            operands = [];
            operator = "";
        }

        if (e.target.className === "operand") {
            if (displayValue === "0") {
                displayValue = e.target.value;
            } else {
                displayValue += e.target.value;
            }
        }

        if (e.target.className === "operator") {
            operator = e.target.value;
            operands.push(Number(displayValue));
            mathStatement = `${operands[0]} ${operator}`;
            displayValue = "";      

            console.log(operator)
        }

        if (e.target.className === "submit") {
            operands.push(Number(displayValue));

            let result = operate(operands[0], operands[1], operator);
        
            console.log(result)

        }

        numberDisplay.textContent = displayValue;
        operationDisplay.textContent = mathStatement;

    });
})
