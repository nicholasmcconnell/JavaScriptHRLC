const n = 6;

const staircase = (n) => {
    //for loop up to 6 - console logs current number with '#'
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i))
    }
}

console.log(staircase(n))