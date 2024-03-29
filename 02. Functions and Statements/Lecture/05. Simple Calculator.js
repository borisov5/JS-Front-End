function simpleCalculator(firstNum, secondNum, operation) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    switch (operation) {
        case 'add':
            return add(firstNum, secondNum);
        case 'subtract':
            return subtract(firstNum, secondNum);
        case 'divide':
            return divide(firstNum, secondNum);
        case 'multiply':
            return multiply(firstNum, secondNum);  
        default:
            console.log('Invalid Operation!');
            break;
    }
}

console.log(simpleCalculator(5,
    5,
    'multiply'
    ));


console.log(simpleCalculator(40,
    8,
    'divide'    
    ));


console.log(simpleCalculator(12,
    19,
    'add'    
    ));