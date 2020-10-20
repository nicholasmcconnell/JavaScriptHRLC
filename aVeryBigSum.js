const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

const aVeryBigSum = (arr) => {
    return (arr.reduce((acc, cv) => acc + cv));
}

console.log(aVeryBigSum(arr));