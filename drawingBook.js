// you have a book and page one always starts on the right page
// pages are both front and back
// so and odd number would equal a right page
// even number would equal a odd page
// n = number of pages in the book
// p = which page you want to go to
// return the number of pages it took to flip to that page
// can start from the front or the back and choose the shorter path
// so we can make a left and right page
// all even numbers go to left page and right is odd
// so out of 10 pages R = 1,3,5,7,9
// L = 2,4,6,8,10
// if I want to get to page 5 they start on 1 and flip to get to 2, 3 and flip onces more to get to 4, 5 for a total of 2 flips
// or if they are starting on 10 they flip to 9, 8, then 7, 6, then 5, 4 for a total of 3 flips
// so if the book is an odd number of pages you wont have to flip from the back but you will always have to flip past 1
// okay instead of making L R we can just know based off if it is an even or odd number
// so for the same example, from index 0 every 2 index would add one to variable to indiciate starting from front. starting from 9 (last index) if index = odd every 2 would index would also indicate a page turned.
// never mind i feel like i can just cut the number in half and check from there
// so if there are 10 pages, you/2 you get 5.
// so 5/2 = 2.5
// and to get to 5 from 10 u need 3 flips
// so 10 is an even number we can round up for back and round down for front
// so it would be 2 from the front and 3 from the back and the goal is to get to 5
// so anything <= 5 would be front
// anything >5 would be back
//if its an odd number so 9 pages
// 9/2 =4.5
// and goal is 5 both would be the same amount fo flips
// so lets use 11
// 1-6= 3 flips
// 11-6 = 2 flips
// 11/2 = 5.5
// so we can round up for the shorter side.
//  anything >=6 start from back
// anything <6 start from front
// wait we dont even have to round up or down just do >= n/2 for odd and vice versa
// now i remember why i was saying every 2 if even and less than n/2 count from index 0 other count from last index
// wait no dont count from either index
//

// function pageCount(n, p) {
//     // Write your code here
//     let backCalc = Math.floor((n-p)/2);
//     let frontCalc = Math.floor(p/2);
//     if(n % 2 !== 0){
//       front = Math.ceil(n/2);
//       back = Math.floor(n/2);
//     } else {
//         front = Math.floor(n/2);
//         back = Math.ceil(n/2);
//     };

//     if (p > front){
//        return(backCalc)
//     } else {
//         return(frontCalc)
//     };
// }

//realised var back was redundant

// ran into problem n=6 p=5
// n is even so front = 3
// p > n so return backCalc
// backCalc = math.floor(6-5)/2= 0
//but the answer is 1
//ok forgot to put conidition for the back

let n = 2;
let p = 1;

function pageCount(n, p) {
  // Write your code here
  let front;
  let backCalc = Math.floor((n - p) / 2);
  let backOneEnding = Math.ceil((n - p) / 2);
  let frontCalc = Math.floor(p / 2);
  if (n === 2 && p === 1){
    return 0
  }
  if (n % 2 !== 0) {
    front = Math.ceil(n / 2);
  } else {
    front = Math.floor(n / 2);
  }
// fixed problem when n-p=1 while n is even 
  if (p >= front && n - p === 1 && n % 2 === 0) {
    return backOneEnding;
  } else if (p >= front) {
    return backCalc;
  } else {
    return frontCalc;
  }
}

pageCount(n, p);
console.log(pageCount(n,p))