/* 
  Homework 3 Question 2
*/
const regex = /^\d+$/;

let hour = prompt('Enter an hour (0-23):');
while (!regex.test(hour) || Number.parseInt(hour) > 23) {
   hour = prompt(`${hour} is not valid, try again, Enter an hour (0-23):`);
}

let minute = prompt('Enter a minute (0-59):');
while (!regex.test(hour) || Number.parseInt(hour) > 59) {
   minute = prompt(`${minute} is not valid, try again, Enter a minute (0-59):`);
}

let second = prompt('Enter a second (0-59):');
while (!regex.test(hour) || Number.parseInt(hour) > 59) {
   second = prompt(`${second} is not valid, try again, Enter a second (0-59):`);
}

hour2 = Number.parseInt(hour);
minute2 = Number.parseInt(minute);
second2 = Number.parseInt(second);

if (second2 < 59) {
   second2 += 1;
} else {
   second2 = 0;
   if (minute2 < 59) {
      minute2 += 1;
   } else {
      minute2 = 0;
      if (hour2 < 23) {
         hour2 += 1;
      } else {
         hour2 = 0;
      }
   }
}
alert(`Time input: ${hour}h${minute}m${second}s
One second later: ${hour2}h${minute2}m${second2}s`);
