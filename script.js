const buttons = document.querySelectorAll("button");
const numberDisplay = document.querySelector(".number-display");


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
        case "add":
            result = add(a, b);
            break;
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
            break;
    }

    return result;
}


let displayValue = "0";
buttons.forEach(button => {
    button.addEventListener("click", function(e) {

        if (e.target.className === "operand") {
            if (displayValue[0] === "0") {
                displayValue = "";
            }

            displayValue += e.target.value;
            numberDisplay.textContent = displayValue;
        }

    });
})
