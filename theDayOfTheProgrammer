// find the day of the programmer which is the 256th day of the year. in the gregorian calender which is
// if the year can be divisible by 4 or 400 it is a leap year
// however if a year can be divisible by 100 and 4 it must also be divisible by 400 or else it is not a leap year
// input is the year
// output is the day of the programmer for that year
// example year = 1984
// 1984 % 4 =  true
// 31+29+31+30+31+30+31+30= 243
//355 - 243 = 13
// output = 12.09.1984 (ddmmyyyy)
//ok i think there is a couple of ways to do this.
// since every leapyear the 256th day lands on the 12th of september
// and non leap year lands on the 13th so if its a leap year i want it to print 12.09.year
// to figure if its a leapyear i will take the year and check to see if it follows the leapyear rule
// divisible by 400 or divisible by both 4 and 400
// will go in this order to speed up the logic because a year of 2200 will have to check if its divisible by 4 and 400 vs just 400 if the order is switched.
// if it is a leapyear, print 12.09.year
// else print 13.09.year
// return the date
// okay I think the year is returning as a string so I will have to make a constructer but ill try without it first

// function dayOfProgrammer(year) {
//     // Write your code here
//     let isLeapYear = true||false;
//     if (year % 400|| year % 4&& year %400){
//         isLeapYear = true;
//     } else {
//         isLeapYear = false;
//     };

//     if (isLeapYear = true){
//         return "12.09." + year;
//     } else return "13.09" + year;

// };
// dayOfProgrammer(year);

// everything is returning true so I have to try again
// okay im going to let isLeapYear = 0
// and 0 = non leapyear and leapyear is 1
// wait im making too many steps
// ok realised i also had a syntax error forgot the last curley brackets LOL
// okay another issue is I did not add the restrictions for gregorian and julian calender

let year = 1800;

function dayOfProgrammer(year) {
  // Write your code here

  if
    (year === 1918){
        return ("26.09.1918")
    } else if 
    ((year > 1917 && year % 400 === 0) ||
    (year > 1917 && year % 4 === 0 && year % 100 !== 0) || (year < 1917 && year % 4 === 0)
  ) {
    return ("12.09." + year); //greg
  } else {
    return ("13.09." + year);
  }
}
dayOfProgrammer(year);
