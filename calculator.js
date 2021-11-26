//add, subtract, multiply, divide, 0-9 digits, equals, clear, display, 
//function 'operate()' activated when = sign pressed and performs selected operation on 2 numbers 
//calculate operation if = sign is pressed or if operator sign is pressed after 2nd number entered
//give special response if user tries to divide by zero

let num1 = '';
let num2 = '';
let operator = '';
let buttonPressed;
let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => 
    button.addEventListener('click', (e) => {
        buttonPressed = e.target.innerText;
        if(isNaN(buttonPressed)) {
            operate(buttonPressed);
        } else {
            storeNum(buttonPressed);
        }
}));

//append number pressed to either first or second operand
function storeNum(buttonPressed) {
    if (operator === '') {
    num1 = num1.toString() + buttonPressed;
    updateDisplay(Math.round(num1*100)/100);
    } else {
    num2 = num2.toString() + buttonPressed; 
    updateDisplay(Math.round(num2*100)/100);
    }
}

function operate(buttonPressed) {
    if (buttonPressed === 'CE'){
        num1 = '';
        num2 = '';
        operator = '';
        updateDisplay(num1);
        return;
    } 

    if (num1 === '') {
        return;
    }

    if (num2 === '') {
        if (buttonPressed != '=') {
            operator = buttonPressed;
        }
        return;
    }

    if (num2 != '') {
        if (operator === '+') {
            num1 = add(num1, num2);
        }
        if (operator === '-') {
            num1 = subtract(num1, num2);
        }
        if (operator === 'X') {
            num1 = multiply(num1, num2);
        }
        if (operator === '/') {
            num1 = divide(num1, num2);
        }

        if (buttonPressed === '=') {
            operator = '';
        } else {
            operator = buttonPressed;
        }
        updateDisplay(Math.round(num1*100)/100);
        num2 = '';
    }
}

function updateDisplay(number) {
    display.innerHTML = number;
}

const add = function(num1, num2) {
  return parseInt(num1) + parseInt(num2);	
};

const subtract = function(num1, num2) {
    return parseInt(num1) - parseInt(num2);
};

const divide = function(num1, num2) {
    if (num2 === 0) {
        return 'NOPE!';
    }
    return parseInt(num1) / parseInt(num2);
};

const multiply = function(num1, num2) {
    return parseInt(num1) * parseInt(num2);
};

