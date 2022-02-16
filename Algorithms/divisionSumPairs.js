const n = 6;
const k = 3;
let ar = [1, 3, 2, 6, 1, 2];


function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let unusedPairs = {};
    let pairs = 0;
    // console.log(11 % 5)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                pairs++;
            }
        }
    }
    return pairs;
}

console.log(divisibleSumPairs(n, k, ar))