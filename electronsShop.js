

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
