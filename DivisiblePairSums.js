let n = 6;
let k = 3;
let ar = [1, 3, 2, 6, 1, 2];

//determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k
// want to create a loop to loop through arrays
// compare i with j in order, if i is < j go to next step else if i > j move on to next j
// if i is less than j add together and devide by "k" if the outcome is a full number ++ output
// else move on to next j and repeat
// change of plans this is exessive
// compare i and j in order, ex i[0] j[1] i[0] j[2] etc 
// once i itterates start on next index for i and next index for j and repeat until i is full itterated
// 
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let pairs = 0;

  for(let i = 0; i < ar.length; i++){
    for (let j = i + 1; j < ar.length; j ++){
       let sum = ar[i] + ar[j];
       let divided = sum/=k;
       if (divided % 1 === 0) {
        pairs ++;
       }
       
    }
   
  } 
console.log(pairs);
}
divisibleSumPairs(n,k,ar);
