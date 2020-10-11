const nums = [0, 4, 3, 0];
const target = 4;

const twoSums = (nums, target) => {
    const remainderMap = {};
    const solution = [];

    for (const [i, e] of nums.entries()) {
        let remainder = target - e;

        if ((remainder >= 0) && remainderMap[remainder] !== undefined) {
            solution.push(remainderMap[remainder], i )
            return solution;
        } else if (remainder >= 0 && !remainderMap[remainder]) {
            remainderMap[e] = i;
        }
    }
}

console.log('result', twoSums(nums, target))

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