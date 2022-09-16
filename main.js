let operator = '';
let previousNum = ' ';
let currentNum = ' ';



const operationButtons = document.querySelectorAll('.operator')
const numberButtons = document.querySelectorAll('.number')
const equalButton = document.querySelector('.equal-sign')
const clearButton = document.querySelector('.all-clear')
const previousCalc = document.querySelector('.previous-calc')
const currentCalc = document.querySelector('.current-calc')



const a = 7
const b = 11
//operator = "+"
// For testing

operationButtons.forEach(op => {
    op.addEventListener('click',(e) => {
        processOperator(e.target.textContent)
        previousCalc.textContent = previousNum + " " + operator;
        currentCalc.textContent = currentNum;

    })

})

numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
        processNumber(e.target.textContent)
        currentCalc.textContent = currentNum;
        
    })
})

processNumber = (num) => {
    if (currentNum.length <= 6){
        currentNum += num;
    }
}

processOperator = (op) => {
    operator = op;
    previousNum = currentNum;
    currentNum = '';
}

sum = (a,b) => a + b; //Add two numbers together
console.log(sum(a,b)); //For testing

subtract = (a,b) => a - b; //Subtract one number from another
console.log(subtract(a,b)); //For testing

multiply = (a,b) => a*b; //Multiply two numbers
console.log(multiply(a,b)); //For testing

divide = (a,b) => a/b; //Divide two numbers
console.log(divide(a,b)); //For testing

operate = () => {
    if (operator == "+"){
      return sum(a,b);
    } else if (operator == "-"){
        return subtract (a,b)
    } else if (operator == "*"){
        return multiply(a,b)
    } else if (operator == "/"){
        return divide(a,b)
    } else {
        return "not coded yet"
    }
} //Takes an operator and 2 numbers and calls the correct function
console.log(operate()); //For testing


