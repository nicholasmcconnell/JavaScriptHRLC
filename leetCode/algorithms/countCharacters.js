const words = ["hello", "world", "leetcode"];
// "world", "leetcode"
const chars = "welldonehoneyr";
var countCharacters = function (words, chars) {
    let str = '';
    let res = '';
    let newChars = chars.split('');
    // console.log(newChars.indexOf('l'))
    // console.log(newChars)
    for (let i = 0; i < words.length; i++) {
        str = '';
        for (let j = 0; j < words[i].length; j++) {
            if ((chars).includes(words[i][j])) {
                str += words[i][j];
            }
            if (str === words[i]) {
                let word = words[i];
                res += words[i];
                for (let k = 0; k < word.length; k++) {
                    let charIndex = newChars.indexOf(word[k]);
                    newChars.splice(charIndex, 1)
                }
                console.log(newChars)
            }
        }
    }
    return (res.length)

};

console.log(countCharacters(words, chars))