// const nums = [0, 4, 3, 0];
// const target = 0;

////solution for target lenght of zero and arrays with all positive numbers, but not negative
const twoSums = (nums, target) => {
    const remainderMap = {};
    const solution = [];

    for (const [i, e] of nums.entries()) {
        let remainder = target - e;

        if ((remainder >= 0) && remainderMap[remainder] !== undefined) {
            solution.push(remainderMap[remainder], i)
            return solution;
        } else if (remainder >= 0 && !remainderMap[remainder]) {
            remainderMap[e] = i;
        }
    }
}

// console.log('result', twoSums(nums, target))

//sudo code
//if remainder >0 &&< 9  check hm heys for remainder 
//if in hm - return that hm value(index) and current(value)
// if not push to hashmap - key(value) : value,(index)


//forEach Solution

// nums.forEach((e, i) => {
//     let remainder = target-e;

// console.log('line14', remainderMap[remainder], remainder, i)

// if((remainder > 0) && remainderMap[remainder] !== undefined){
//     // console.log('success')
//    return (i, remainderMap[remainder]);
// } else if (remainder > 0 && !remainderMap[remainder]){
//     console.log('in elseif')
//     remainderMap[e] = i;
// }
// });


0

const nums = [0,4,3,0];
// -3, 4, 3, 90
const target = 0;

//solution to account for negative numbers in array and target of zero
const twoSumsNeg = (nums, target) => {
    const remainderMap = {};
    const solution = [];

    for (const [i, e] of nums.entries()) {
        let remainder = target - e;
        console.log(remainder);


        if ((remainder || remainder === 0) && remainderMap[remainder] !== undefined) {
            solution.push(remainderMap[remainder], i)
            return solution;
        } else if ((remainder || remainder === 0) && !remainderMap[remainder]) {
            remainderMap[e] = i;
        }
    }
}

console.log('result', twoSumsNeg(nums, target))