
// Okay we need to find out how many times a valley is traversed
// so a u = +1 and D = -1 
// we always start at 0
// so essentially we need to find every time it goes from 0,-1 
// we will def need to loop
// find how many times when i - previous index === 1;
// okay im starting over, I am going to try creating an array of the grade levels its self, so exp [0,1,2,1,0,-1,0]
// then I will loop and if i 
// okay time to rethink
// so I created a an array with all the letters turned to numbers
// I have to go oback and just create the 
// okay I overcomplicated this, I will start over again.
//  so we loop again, and we if we add one and then the level count === 0 that means we had to have came up so then i can add 1  to valleys jezeezzeezezezezezzeezzeze

let steps = 8;
let path = ["U", "D", "D", "D", "U", "D", "U", "U","D","D","U","U","U"];

function countingValleys(steps, path) {
    // Write your code here
    let levelCount = 0;
    let valleys = 0;
    for(let i = 0; i < path.length; i++){
        let current = path[i];

        if(current === "U"){
            levelCount ++;
            if(levelCount === 0) {
                valleys ++;
            }
        }else if (current === "D"){
            levelCount--;
        }
        
    }
    return valleys
}
countingValleys(steps, path);
console.log(countingValleys(steps, path));

// learn if you do an if  inside an if itll then check that as well. so thats good to know