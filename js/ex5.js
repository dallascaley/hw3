/* 
  Homework 3 Question 2
*/
let attemptLimit = 3;
let currentAttempt = 1;
while (currentAttempt <= attemptLimit) {
   let password = prompt('What is the password?');
   if (password === 'secret') {
      alert(`You entered the correct password after ${currentAttempt} attempt(s)`);
      break;
   } else {
      if (currentAttempt === attemptLimit) {
         alert(`Your account is locked! You failed to enter the correct password ${currentAttempt} times`);
      }
      currentAttempt += 1;
   }
}
