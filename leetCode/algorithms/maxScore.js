const s = "00";

const maxScore = (s) => {
    let max = 0;

    for (let i = 1; i < s.length; i++) {
        let left = s.slice(0, i).split('0').length - 1;
        let right = s.slice(i).split('1').length - 1;
        console.log(left, right)
        sum = left + right;
        max = Math.max(max, sum)
    }
    return max;
};

console.log(maxScore(s))