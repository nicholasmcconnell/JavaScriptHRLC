let arr = [1, 2, 4, 3, 4, 4];
let m = 2;
let k = 1;

var containsPattern = function (arr, m, k) {
    let count = 0;
    for (var i = 0; i + m < arr.length; i++) {
        if (arr[i] == arr[i + m]) {
            count++;
            if (count == m * (k - 1)) return true;
        } else count = 0;
    }
    return false;
};

// var containsPattern = function(arr, m, k) {
//     for(let i=m, cnt=0; i<arr.length; i++){
//         if(arr[i]!=arr[i-m]) cnt=0;
//         else if(++cnt==m*(k-1)) return true;
//     }
//     return false;
// };

console.log(containsPattern(arr, m, k))