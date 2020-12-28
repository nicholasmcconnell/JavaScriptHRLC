//requirements for true
//1.  split arr into 1 or more subsequences
//a. each on consists of consecutive integer
//b. has length at least 3
const isPossible = (nums) => {
    //two class method
    //first loops over array and calls hashmap checker for each
    // hashchecker method
    //making it more optimized
    //if value
    let hash = {};

    // if 
    for (const [i, v] of nums.entries()) {
        console.log('v', v)
        if (i === 0) {
            console.log('1111111')
            hash[v] = [v];
        }
        //Use Map()
        //
        for (const [key, value] of Object.entries(hash)) {
            console.log('value', key, value)
            if ((hash[key][hash[key].length - 1]) === (v - 1)) {
                hash[key].push(v)
                console.log('hash[key', hash[key])
            } else {
                hash[v] = [v];
                console.log('hash[key] 2', hash[key])
            }
        }
    }
    console.log('hash', hash)

}

const nums = [1, 2, 3, 3, 4, 4, 5, 5];
console.log(isPossible(nums))

 // class subSequences {
    //     constructor(nums){
    //         this.nums = nums;
    //     }

    //     hashChecker(){
    //        return this.nums;

    //     }
    // }
    // // return true;
    // let sub = new subSequences(nums);
    // console.log(sub.hashChecker());

// let forwardArr = [];
// let backwardArr = [];

// for (let i = 0; i < nums.length; i++) {
//     let lastIndex = nums.length - 1;
//     if (i === 0) {
//         forwardArr.push(nums[i]);
//         backwardArr.push(nums[lastIndex])
//     }
//     //Forward Arry
//     if (nums[i + 1] - 1 === nums[i]) {
//         forwardArr.push(nums[i + 1])
//     }

//     if (nums[i] === nums[i + 1] && forwardArr.length >= 3) {
//         forwardArr = [];
//         forwardArr.push(nums[i + 1]);
//     } else if (nums[i] === nums[i + 1] && forwardArr.length < 3) {
//         return false;
//     }

//     //Backward Arr
//     if (nums[lastIndex - i] === nums[lastIndex - i - 1] + 1) {
//         backwardArr.push(nums[lastIndex - i - 1]);
//     }

//     if (nums[lastIndex - i] === nums[lastIndex - i - 1] && backwardArr.length >= 3) {
//         backwardArr = [];
//         backwardArr.push(nums[lastIndex - i - 1])
//     } else if (nums[lastIndex - i] === nums[lastIndex - i - 1] && backwardArr.length < 3) {
//         return false;
//     }
// }