

// so I need to return the most amount I can spend on a keyboard&drive. if I cant buy both I return -1
// So I could start by sorting the lists from greatest to least, then Start with the first keyboard and add the first Drive, if they it under "b" then return it. Actually This might not work since it could "work" but in a situation where highest keyboard is 60 and highest drive is 12 and it needs to be under 70 it would check the next highest for example 8, and that would be returned. but if the next highest keyboard is 58, 58+12 is higher than 60 +8
// I could also start with the lowest combination first to check if it is even possible to buy both, if it is not possible then just return -1

  let b = 60;
let keyboards = [40, 50, 60];
let drives = [5, 10, 12];
function getMoneySpent(keyboards, drives, b) {


    let minK = Math.min(...keyboards);
    let minD = Math.min(...drives);
    let lowestComb = minK += minD;
    console.log(lowestComb);
    if (lowestComb > b){
        return -1;
    };
    const biggestCombo = keyboards.reduce((biggest, a) => {
        drives.forEach(c => {
            const total = a + c;
            if (total <= b && total >= biggest) biggest = total; 
        
        });
        return biggest;
        //Need to add -Infinity to start at the lowest possible value 
    }, -Infinity)
    console.log(biggestCombo);
    return biggestCombo;
}

console.log(getMoneySpent(keyboards, drives, b));




function processData(input) {
  // Make our 2D array...
  var myArr = input.split('\n').map(n => n.split(' ').map(Number));
  // Flatten array for ease of access
  myArr = [].concat.apply([], myArr);
  // We know a 3x3 magic square has all sums === 15
  // We also know that there are 8 unique solutions to a 3x3 magic square
  var squares = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 7, 6, 9, 5, 1, 4, 3, 8]
  ];
  // Now we just track which given magic square is the least distance from our matrix
  // This will report the least cost (abet, brute force-y)
  var cost = Math.min();
  for (let magicSquareEntry = 0; magicSquareEntry < squares.length; magicSquareEntry += 1) {
    let currCost = 0;
    for (i = 0; i < 9; i += 1) {
      currCost += Math.abs(squares[magicSquareEntry][i] - myArr[i]);
    }
    if (currCost < cost) {
      cost = currCost;
    }
  }
  console.log(cost);
} 