//given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. if more than 1 type has been spotted that maximum amount return the smallest of their ids.
// first we will need to loop through array
// create nested arrays
// if index does not equal any previous index create new array and add to it
// if index equals any previous index add to that array
// loop through new index array by sizes.
// push that indexed array to new variable
// if next array size = to previous array push to array
// else if next array size > previous array replace array with current array.
// okay this seems like it will take -3509285098 years start over
// create an empty object to track how many times each number apears { number: how many times }
// make object a variable of the current index to compare
// if object[i] === undefinded  object[i] =1 else add to that object
// ok this part works
// next I need to loop through the object by looking at keys
//create new array
// if key is greater than previous key delete contents in array and add [i] property to the array
// if key == previous key add [i] property to the array
//create new variable
// lastly loop through array and if [i] is > previous[i] push to variable
// return the variable

// let arr = [2,4,3,2,3,1,2,1,3,3];
// console.log(arr.length);

// function migratoryBirds(arr) {
//   // Write your code here
//   let shownUp = {};

//   for (let i = 0; i < arr.length; i++) {
//     let numbers = arr[i];
//     if (shownUp[numbers] === undefined) {
//       shownUp[numbers] = 1;
//     } else {
//       shownUp[numbers]++;
//     }
//   }
// console.log(shownUp)
//   let biggestSize = [];
//   const values = Object.entries(shownUp);

//   for (let i = 0; i < values.length; i++) {
//     for (let j = i + 1; j < values.length; j++) {
//       let [key1, val1] = values[i];
//       let [key2, val2] = values[j];

//       if (val1 < val2 && !biggestSize.includes(key2)) {
//        biggestSize.fill(key2) ;
//       } else if (val1 > val2 && biggestSize.includes(key1 || key2)) {
//         null;
//       } else if (val1 === val2 && biggestSize.includes(key1 || key2)) {
//         null;
//       }
//       else if (val1 < val2) {
//         biggestSize.fill(key2);
//       } else if (val1 > val2) {
//         biggestSize.fill(key1);
//       } else if (val1 == val2) {
//         biggestSize.push(key2);
//       }console.log(biggestSize);
//     }

//     for (let i = 0; i < biggestSize.length; i++) {
//       for (let j = i + 1; j < biggestSize.length; j++) {
//         let finalAnswer = biggestSize[0];
//         if (i < j) {
//           finalAnswer.fill;
//         } 
//         return finalAnswer;
//       }
//     }
//   }
// }

// migratoryBirds(arr);
// console.log(migratoryBirds(arr))

// Okay will restart because This took me so long and I need to look at this from another angle 
// Given an array, I need to determine the most frequently apearing number, if there are multiple, choose the smallest number
// Firstly will loop through array and create objects
// okay we have our objects with the amount of times it has appeared.
// create a variable starting with key [0]
// create a loop to compare next index to current index so last itteration would be comparing last to last-1
// if val 2 > val1 fill, if val2 === val1 push to biggest size
// 



// function migratoryBirds(arr) {
//   // Write your code here
//   let shownUp = {};

//   for (let i = 0; i < arr.length; i++) {
//     let numbers = arr[i];
//     if (shownUp[numbers] === undefined) {
//       shownUp[numbers] = 1;
//     } else {
//       shownUp[numbers]++;
//     };

//     console.log(shownUp);
//     let biggestSize = [];
//     const values = Object.entries(shownUp);

//     for (let i = 0; i < values.length; i++) {
//       for (let j = i + 1; j < values.length; j++) {
//         let [key1, val1] = values[i];
//         let [key2, val2] = values[j];

//         if (biggestSize.length === 0) {
//           biggestSize.push(key1)
//         } else if (val2 > val1) {
//           biggestSize.splice(0, biggestSize.length);
//           biggestSize.push(key2);
//         } else if (val2 === val1) {
//           biggestSize.push(key2)
//         }


//       };

//     };
//     console.log(biggestSize)
//     let finalAnswer = Math.max(biggestSize);
//     return finalAnswer;

//   };
// };



//   migratoryBirds(arr);0

// Okay we start over again.
// the key id were a string so it caused an issue and toomuch looping
// okay go through loop and set bird to pull the current bird id and if it already exist add one or if it doesnt exist count it as 0 then add one
// create a variable to to store the highest number of sightings so far
// and another to store the bird that has the highest count
//loop through object and count how many times an id shows up
// then parse the string inot a number
// now we have to update the max count if the birds count is greatetr than the previous highest count
// and set final answer to that bird id
// and if there are equal counts grab the smaller id


let arr = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3];
function migratoryBirds(arr) {
  let shownUp = {};

  //count each bird id
  for (let i = 0; i < arr.length; i++) {
    let bird = arr[i];
    shownUp[bird] = (shownUp[bird] || 0) + 1;
  }

  // find the most frequent bird
  let maxCount = 0;
  let finalAnswer = null;

  for (let bird in shownUp) {
    let count = shownUp[bird];
    let birdID = parseInt(bird);

    if (count > maxCount) {
      maxCount = count;
      finalAnswer = birdID;
    } else if (count === maxCount && birdID < finalAnswer) {
      // if tie, pick the lower bird id
      finalAnswer = birdID;
    }
  }

  return finalAnswer;
}

migratoryBirds(arr);
console.log(migratoryBirds(arr));
