const nums = [8, 1, 2, 2, 3]

const smallerNumbersThanCurrent = (nums) => {
    let numsCopy = nums.slice();
    nums.sort((a, b) => a - b)

    for (let i = 0; i < numsCopy.length; i++) {
        numsCopy[i] = nums.indexOf(numsCopy[i])
    }
    return numsCopy;
};

console.log(smallerNumbersThanCurrent(nums))