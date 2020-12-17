//requirements for true
//1.  split arr into 1 or more subsequences
//a. each on consists of consecutive integer
//b. has length at least 3
const isPossible = (nums) => {
    //loope through forward and backward simultaneously
    //if next value consecutive add to array shift or push to array
    //check for array length -> if arr.length < 3 return false
    //if it is -> clear array and start again
    let forwardArr = [];
    let backwardArr = [];

    for (let i = 0; i < nums.length; i++) {
        let lastIndex = nums.length - 1;
        if (i === 0) {
            forwardArr.push(nums[i]);
            backwardArr.push(nums[lastIndex])
        }
        //Forward Arry
        if (nums[i + 1] - 1 === nums[i]) {
            forwardArr.push(nums[i + 1])
        }

        if (nums[i] === nums[i + 1] && forwardArr.length >= 3) {
            forwardArr = [];
            forwardArr.push(nums[i + 1]);
        } else if (nums[i] === nums[i + 1] && forwardArr.length < 3) {
            return false;
        }

        //Backward Arr
        if (nums[lastIndex - i] === nums[lastIndex - i - 1] + 1) {
            backwardArr.push(nums[lastIndex - i - 1]);
        }

        if (nums[lastIndex - i] === nums[lastIndex - i - 1] && backwardArr.length >= 3) {
            backwardArr = [];
            backwardArr.push(nums[lastIndex - i - 1])
        } else if (nums[lastIndex - i] === nums[lastIndex - i - 1] && backwardArr.length < 3) {
            return false;
        }
    }
    return true;
}

const nums = [1,2,3,3,4,4,5,5];
console.log(isPossible(nums))