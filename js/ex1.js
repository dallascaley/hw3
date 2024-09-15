/* 
  Homework 3 Question 1
*/
let inputString = prompt('Enter a number between 1 - 100', '50');

const regex = /^\d+$/;

if (regex.test(inputString) && Number.parseInt(inputString) > 1 && Number.parseInt(inputString) < 100 ) {
   alert(`Thank you! You entered ${inputString}, a valid number`);
} else {
   alert(`sorry ${inputString} is not a valid entry`);
}
