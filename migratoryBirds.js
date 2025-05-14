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

let arr = [2,4,3,2,3,1,2,1,3,3];
console.log(arr.length);

function migratoryBirds(arr) {
  // Write your code here
  let shownUp = {};

  for (let i = 0; i < arr.length; i++) {
    let numbers = arr[i];
    if (shownUp[numbers] === undefined) {
      shownUp[numbers] = 1;
    } else {
      shownUp[numbers]++;
    }
  }
console.log(shownUp)
  let biggestSize = [];
  const values = Object.entries(shownUp);

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      let [key1, val1] = values[i];
      let [key2, val2] = values[j];

      if (val1 < val2 && !biggestSize.includes(key2)) {
       biggestSize.fill(key2) ;
      } else if (val1 > val2 && biggestSize.includes(key1 || key2)) {
        null;
      } else if (val1 === val2 && biggestSize.includes(key1 || key2)) {
        null;
      }
      else if (val1 < val2) {
        biggestSize.fill(key2);
      } else if (val1 > val2) {
        biggestSize.fill(key1);
      } else if (val1 == val2) {
        biggestSize.push(key2);
      }console.log(biggestSize);
    }

    for (let i = 0; i < biggestSize.length; i++) {
      for (let j = i + 1; j < biggestSize.length; j++) {
        let finalAnswer = biggestSize[0];
        if (i < j) {
          finalAnswer.fill;
        } 
        return finalAnswer;
      }
    }
  }
}

migratoryBirds(arr);
console.log(migratoryBirds(arr))