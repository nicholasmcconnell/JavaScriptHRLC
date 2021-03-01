const nums = [0, 4, 5, 0, 3, 6];
const k = 2;



// const containsNearbyDuplicate = (nums, k) => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + k] || nums[nums.length - 1 - i] === nums[nums.length - 1 - k - i]) {
//             return true;
//         }
//     }
//     return false;
// }

const containsDuplicate = (nums) => {
    let cache = {};

    for (let i = 0; i < nums.length; i++) {
        if (cache[nums[i]]) {
            cache[nums[i]]++;
            if (cache[nums[i]] > 1) return true;
        } else {
            cache[nums[i]] = 1;
        }
        console.log(cache)
    }
    return false;

}

console.log(containsDuplicate(nums))

var containsNearbyDuplicate = function (nums, k) {
    let length = nums.length;
    let cache = {};
    for (let i = 0; i < length; i++) {
        if (i - cache[nums[i]] <= k) {
            return true;
        } else {
            cache[nums[i]] = i;
        };
    };
    return false;
};

// console.log(containsNearbyDuplicate(nums, k))

// var containsNearbyDuplicate = function (nums, k) {
//     let ind = {}, n = nums.length;
//     for (let i = 0; i < n; i++) {
//         if (nums[i] in ind && i - ind[nums[i]] <= k) {
//             return true;
//         }
//         ind[nums[i]] = i;
//     }
//     return false;
// };

// function containsNearbyDuplicate(nums, k) {
//     var map = {};
//     for (var i = 0; i < nums.length; i++) {
//         if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
//         map[nums[i]] = i;
//     }
//     return false;
// }

