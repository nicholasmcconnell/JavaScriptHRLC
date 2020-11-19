const numbers = [2, 7, 11, 15];
const target = 9;

////solution for target lenght of zero and arrays with all positive numbers, but not negative
const twoSums = (numbers, target) => {
    let results = {};

    for (const [i, e] of numbers.entries()) {
        let remainder = target - e;
        
        console.log(results, e, results[e])
        if (results[e]) {
            return ([results[e], i+1]);
        } else {
            results[remainder] = i+1;
        }
    }
}

console.log('result', twoSums(numbers, target))

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

// const nums = [0,4,3,0];
// -3, 4, 3, 90
// const target = 0;

//solution to account for negative numbers in array and target of zero
const twoSumsNeg = (nums, target) => {

}

// console.log('result', twoSumsNeg(nums, target))

const nums = [3, 2, 11, 5, 6, 7, 9];
// // -3, 4, 3, 90
// const target = 9;

//fastest solution
var twoSum = function (nums, target) {
    const result = {};
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i], result);
        if (result[nums[i]] >= 0) {
            return [result[nums[i]], i];
        }
        result[target - nums[i]] = i;
        console.log(result)
    }
    return [];
};

// console.log(twoSum(nums, target))

//OLD SOLUTION - DOESN'T WORK
// const remainderMap = {};
// const solution = [];

// for (const [i, e] of nums.entries()) {
//     let remainder = target - e;

//     if ((remainder || remainder === 0) && remainderMap[remainder] !== undefined) {
//         solution.push(remainderMap[remainder], i)
//         return solution;
//     } else if ((remainder || remainder === 0) && !remainderMap[remainder]) {
//         remainderMap[e] = i;
//     }
// }