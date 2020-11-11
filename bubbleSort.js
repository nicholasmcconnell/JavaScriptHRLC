const a = [4,2,3,1];

const countSwaps = (a) => {
    let acc = 0;
    let n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j+1], a[j]];
                acc++;
            }
        }
    }
    return (`Array is sorted in ${acc} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length-1]}`)
   
}

console.log(countSwaps(a))