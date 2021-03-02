const pattern = "abba";
const s = "dog dog dog dog";

var wordPattern = function (pattern, s) {
    let patternArr = pattern.split('');
    let sArr = s.split(' ');
    let p2s = {};
    let s2p = {};
    if (patternArr.length !== sArr.length) return false;

    for (let i = 0; i < patternArr.length; i++) {
        if (!p2s[patternArr[i]] && !s2p[sArr[i]]) {
            p2s[patternArr[i]] = sArr[i];
            s2p[sArr[i]] = patternArr[i];
            continue;
        }
        if (p2s[patternArr[i]] != sArr[i] || s2p[sArr[i]] != patternArr[i]) {
            return false;
        }

    }
    return true;
};

console.log(wordPattern(pattern, s))