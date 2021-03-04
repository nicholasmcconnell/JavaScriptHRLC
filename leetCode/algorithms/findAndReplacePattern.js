const words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"];
// "abc", "deq", "mee", "aqq", "dkd", "ccc"
const pattern = "abb";

const findAndReplacePattern = (words, pattern) => {
    let res = [];
    for (const [index, v] of words.entries()) {
        let pObj = {};
        let wObj = {};
        for (let i = 0; i < pattern.length; i++) {
            console.log(pattern[i], v[i])
            if (wObj[v[i]] && wObj[v[i]] !== pattern[i]) {
                break;
            } else if (pObj[pattern[i]] && pObj[pattern[i]] !== v[i]) {
                break;
            } else {
                pObj[pattern[i]] = v[i]
                wObj[v[i]] = pattern[i]
            }
            console.log('i', i)

            if (i === pattern.length - 1) {
                res.push(v);
            }
        }
    }
    return res;
};

console.log(findAndReplacePattern(words, pattern))