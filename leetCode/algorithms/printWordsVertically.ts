const s = "HOW ARE YOU";

const printVertically = (s: string): Array<string> => {

    //split string
    let result: Array<string> = [];
    let wordArr: Array<string> = s.split(" ");
    //get max word length -> helper function
    let maxLength: Number = maxWordLength(wordArr);
    //loop over and concat to string to add to result
    for (let i = 0; i < maxLength; i++) {
        let str = '';
        for (const word of wordArr) {
            if (i >= word.length) {
                str += ' '
            } else {
                str += word.charAt(i);
            }
        }
        //check for spaces after word -> helper for function
        result.push(checkForSpaces(str));
    }
    //push to result array

    return result;

};

const checkForSpaces = (word: string): string => {
    let i = word.length;
    while (--i > -1) {
        if (word.charAt(i) !== ' ') {
            return word.slice(0, i + 1);
        }
    }

    return word;
};

const maxWordLength = (wordArr: Array<string>): Number => {
    let maxLength = 0;

    for (let i = 0; i < wordArr.length; i++) {

        maxLength = Math.max(maxLength, wordArr[i].length);
    }

    return maxLength;
};

console.log(printVertically(s))
