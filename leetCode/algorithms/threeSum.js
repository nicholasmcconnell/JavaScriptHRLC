'use strict';

const nums = [-1, 0, 1, 2, -1, -4];

const threeSum = (nums) => {

    let resultArr = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {

        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let low = i + 1;
        let high = nums.length - 1;
        let target = 0 - nums[i];

        while (low < high) {
            if ((nums[low] + nums[high]) === target) {
                resultArr.push([nums[i], nums[low], nums[high]])
                while (low < high && nums[low] === nums[low + 1]) low++;
                while (low < high && nums[high] === nums[high - 1]) high--;
                low++;
                high--;
            } else if ((nums[low] + nums[high] > target)) {
                high--;
            } else {
                low++;
            }
        }
    }
    return resultArr;
};

console.log(threeSum(nums));