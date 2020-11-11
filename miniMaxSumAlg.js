const arr = [1,2,3,4,5];

const miniMaxSum = (arr) => {
    arr.sort();

    console.log((arr.reduce((acc, cv) => acc + cv) - arr[arr.length-1]),  (arr.reduce((acc, cv) => acc + cv) - arr[0]))
}

console.log(miniMaxSum(arr))