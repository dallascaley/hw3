/* 
  Homework 3 Question 2
*/
let weekDay = prompt('Enter a day of the week:', 'sun, mon, tue, wed, thu, fri or sat');
let nextDay = 'nope';
let weekDays = ['sun','mon','tue','wed','thu','fri','sat'];

if (weekDays.includes(weekDay)) {
   switch (true) {
      case (weekDay === 'sun'):
         nextDay = 'mon';
      break;
      case (weekDay === 'mon'):
         nextDay = 'tue';
      break;
      case (weekDay === 'tue'):
         nextDay = 'wed';
      break;
      case (weekDay === 'wed'):
         nextDay = 'thu';
      break;
      case (weekDay === 'thu'):
         nextDay = 'fri';
      break;
      case (weekDay === 'fri'):
         nextDay = 'sat';
      break;
      case (weekDay === 'sat'):
         nextDay = 'sun';
      break;
   }
   alert(`You entered: ${weekDay} \r\nThe following day is: ${nextDay}`);
} else {
   alert(`sorry ${weekDay} units is not a valid entry`);
}