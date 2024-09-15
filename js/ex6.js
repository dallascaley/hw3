/* 
  Homework 3 Question 2
*/
let number = Number.parseInt(prompt('Enter a number:'));

let alertText = '';
for (let i = 1; i < 11; i++) {
  alertText += `${number} x ${i} = ${number * i}\r\n`
}
alert(alertText);