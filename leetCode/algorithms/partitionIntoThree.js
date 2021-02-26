const arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// time O(n) space O(1)
var canThreePartsEqualSum = function (A) {
    let count = 0
    let currentSum = 0
    const sum = A.reduce((accumulator, current) => {
        return accumulator + current
    }, 0) / 3

    for (const number of A) {
        currentSum += number

        if (currentSum === sum) {
            count++
            currentSum = 0
        }
    }

    return count >= 3
};