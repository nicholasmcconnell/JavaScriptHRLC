const s = "ccbccbb"
const maxPower = (s) => {
    let max = 1;
    let counter = 1
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            counter++
        } else {
            counter = 1;
        }
        max = Math.max(max, counter)
    }
    return max;
}
// console.log(maxPower(s))

const nums = [1, 1, 0, 1, 1, 1];
const findMaxConsecutiveOnes = (nums) => {
    let result = 0;
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            result = Math.max(result, counter)
            counter = 0;
        } else {
            counter++;
        }
    }
    return result;
};
console.log(findMaxConsecutiveOnes(nums))