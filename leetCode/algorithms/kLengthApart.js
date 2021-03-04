const nums = [1, 1, 1, 1, 1, 1];
const k = 0;

const kLengthApart = (nums, k) => {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            arr.push(i);
            if (arr.length == 2) {
                if ((arr[1] - 1) - arr[0] < k) return false;
                arr.shift();
            }
        }
    }
    return true;
}

console.log(kLengthApart(nums, k))