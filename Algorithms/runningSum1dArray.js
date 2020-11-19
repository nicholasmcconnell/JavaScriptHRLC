const nums = [1, 2, 3, 4];

const runningSum = (nums) => {
    let sumArr = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += +nums[i];
        sumArr.push(sum)
    }
    return sumArr;
};

console.log(runningSum(nums));