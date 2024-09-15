/* 
  Homework 3 Question 2
*/
let userName = prompt('Enter your name:');
let unitsCompleted = prompt('How many units have you completed?');

const regex = /^\d+$/;

if (regex.test(unitsCompleted)) {
   let numericUnits = Number.parseInt(unitsCompleted);
   let gradeStanding = 'Freshman';
   switch (true) {
      case (numericUnits > 90):
         gradeStanding = 'Senior';
      break;
      case (numericUnits > 60):
         gradeStanding = 'Junior';
      break;
      case (numericUnits > 30):
         gradeStanding = 'Sophomore';
      break;
   }
   alert(`Hello ${userName} \r\nYour grade standing is ${gradeStanding}`);
} else {
   alert(`sorry ${unitsCompleted} units is not a valid entry`);
}