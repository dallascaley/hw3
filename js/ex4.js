/* 
  Homework 3 Question 2
*/
const regex = /^\d+$/;


let numOne = prompt('Enter an integer number:');
while (!regex.test(numOne)) {
   alert(`sorry ${numOne} units is not a valid entry, try again`);
   numOne = prompt('Enter an integer number:');
}
let numTwo = prompt('Enter another iteger number');
while (!regex.test(numTwo)) {
   alert(`sorry ${numTwo} units is not a valid entry, try again`);
   numTwo = prompt('Enter an integer number:');
}
numOne = Number.parseInt(numOne);
numTwo = Number.parseInt(numTwo);

alert(`Addition: ${numOne} + ${numTwo} = ${numOne + numTwo}\r\n
Subtraction: ${numOne} - ${numTwo} = ${numOne - numTwo}\r\n
Multiplication: ${numOne} x ${numTwo} = ${numOne * numTwo}\r\n
Divition: ${numOne} / ${numTwo} = ${numOne / numTwo}\r\n
Modulo: ${numOne} % ${numTwo} = ${numTwo > 0 ? numOne % numTwo : ' Dividing by zero results in no modulus'}\r\n`)
