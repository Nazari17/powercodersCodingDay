function weekNumbersToWords(dayNumber)
 {
     switch (dayNumber) {
         case 1:
             return 'Monday';
             break;
         case 2:
             return 'Tuesday';
             break;
         case 3:
             return 'Wednsday';
             break;
         case 4:
             return 'Thurseday';
             break;
         case 5:
             return 'Friday';
             break;
         case 6:
             return 'Saturday';
             break;
         case 7:
             return 'Sunday';
             break;
     }
 }
 console.log(weekNumbersToWords(5));