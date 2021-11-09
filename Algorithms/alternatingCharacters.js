// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

let s = 'AAABBB';

function alternatingCharacters(s) {
    // Write your code here
    //Edge Cases all A's or B's
    let sArr = s.split('');
    let deleteCount = 0;

    if (!s.includes('B') || !s.includes('A')) return s.length - 1;

    let compareChar = s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== compareChar) {
            compareChar = s[i];
            continue;
        } else {
            deleteCount++;
        }
    }
    return deleteCount;
}

console.log(alternatingCharacters(s));