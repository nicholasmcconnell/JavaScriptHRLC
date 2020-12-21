//requirements for true
//1.  split arr into 1 or more subsequences
//a. each on consists of consecutive integer
//b. has length at least 3
const isPossible = (nums) => {
    //loope through forward and backward simultaneously
    //if next value consecutive add to array shift or push to array
    //check for array length -> if arr.length < 3 return false
    //if it is -> clear array and start again

    // use a class with a method that checks lenghts of hash arrays as things are built
            //when adding to hash - loop over hash and find last value that is one less than current value in array
            //if it doesnt exist, then start a new key value pair in object

        //two class method
            //first loops over array and calls hashmap checker for each
        // hashchecker method
            //making it more optimized
            //if value
    let hash = {};
    let duplicates = [];
    // while(nums.lengh > 0){

      
            for(let j = i; j<nums.length; j++){
                if(nums[j] === nums[j+1]){

                }
            }
       
    // }
 
    return true;
}

const nums = [1,2,3,3,4,4,5,5];
console.log(isPossible(nums))

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