const words = ["hello", "world", "leetcode"];
// "world", "leetcode"
const chars = "welldonehoneyr";
var countCharacters = function (words, chars) {
    let charsCache = {};
    // let test = '';

    for (let i = 0; i < chars.length; i++) {
        if (!charsCache[chars[i]]) {
            charsCache[chars[i]] = 1;
        } else {
            ++charsCache[chars[i]];
        }
    }
    let str = '';

    for (let i = 0; i < words.length; i++) {
        let tempCharCache = { ...charsCache };
        let hasLetter = true;
        // test = '';
        for (let j = 0; j < words[i].length; j++) {

            if (!tempCharCache[words[i][j]]) {
                console.log('111111111')

                hasLetter = false;
                break;
            }
            console.log('hi', tempCharCache)
            tempCharCache[words[i][j]] -= 1;
            console.log(tempCharCache, words[i][j])
        }
        if (hasLetter) {
            console.log(words[i])
            console.log('in words if')
            str += words[i];
        }
        console.log(str)
    };
    return (str.length)


    const charObj = {};
    for (let char of chars) {
        charObj[char] = charObj[char] ? ++charObj[char] : 1;
    }

    let output = 0;
    for (let word of words) {
        const tempCharObj = { ...charObj };
        let hasLetters = true;

        for (let letter of word) {
            if (!tempCharObj[letter]) {
                hasLetters = false;
                break;
            }
            tempCharObj[letter] -= 1;
        }

        if (hasLetters) {
            output += word.length;
        }
    }

    return output;
}

console.log(countCharacters(words, chars))