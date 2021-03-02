const s = "cbzxy";
const maxLengthBetweenEqualCharacters = (s) => {
    let max = -1;
    let diff = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] && s.lastIndexOf(s[i])) {
            diff = s.lastIndexOf(s[i]) - i - 1;
        }
        max = Math.max(diff, max)
    }
    return max;
};
console.log(maxLengthBetweenEqualCharacters(s))