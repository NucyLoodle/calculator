const a = 7
const b = 11
operator = "+"
// For testing

sum = (a,b) => a + b; //Add two numbers together
console.log(sum(a,b)); //For testing

subtract = (a,b) => a - b; //Subtract one number from another
console.log(subtract(a,b)); //For testing

multiply = (a,b) => a*b; //Multiply two numbers
console.log(multiply(a,b)); //For testing

divide = (a,b) => a/b; //Divide two numbers
console.log(divide(a,b)); //For testing

power = (a,b) => a**b; //Raise one number to the power of another
console.log(power(a,b)); //For testing

operate = () => {
    if (operator == "+"){
        return sum(a,b);
    } else if (operator == "-"){
        return subtract (a,b)
    } else if (operator == "*"){
        return multiply(a,b)
    } else if (operator == "/"){
        return divide(a,b)
    } else if (operator == "**"){
        return power(a,b)
    } else {
        return "not coded yet"
    }
} //Takes an operator and 2 numbers and calls the correct function
console.log(operate()); //For testing