const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

// const merge = (nums1, m, nums2, n) => {
//     let length = m + n;

//     if (n === 0) return nums1;

//     for (let i = n - 1; i >= 0; i--) {
//         nums1[length - 1] = nums2[i]
//         length--;
//     }
//     nums1.sort((a, b) => a - b)

//     return nums1;
// };

const merge = (nums1, m, nums2, n) => {
    // let firstArr = nums1.slice(0, m);
    // let secondArr = nums2.slice(0, n);
    // let finalArr = firstArr.concat(secondArr);
    // return finalArr.sort()
    while (n) {
        console.log(n, m)
        nums1[m++] = nums2[--n];
        console.log(n, m)
    }
    return nums1.sort((val1, val2) => val1 - val2)
};

console.log(merge(nums1, m, nums2, n))