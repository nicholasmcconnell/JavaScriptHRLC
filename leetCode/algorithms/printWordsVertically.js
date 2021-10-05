var s = "HOW ARE YOU";
var printVertically = function (s) {
    //split string
    var result = [];
    var wordArr = s.split(" ");
    //get max word length -> helper function
    var maxLength = maxWordLength(wordArr);
    //loop over and concat to string to add to result
    for (var i = 0; i < maxLength; i++) {
        var str = '';
        for (var _i = 0, wordArr_1 = wordArr; _i < wordArr_1.length; _i++) {
            var word = wordArr_1[_i];
            if (i >= word.length) {
                str += ' ';
            }
            else {
                str += word.charAt(i);
            }
        }
        //check for spaces after word -> helper for function
        result.push(checkForSpaces(str));
    }
    //push to result array
    return result;
};
var checkForSpaces = function (word) {
    var i = word.length;
    while (--i > -1) {
        if (word.charAt(i) !== ' ') {
            return word.slice(0, i + 1);
        }
    }
    return word;
};
var maxWordLength = function (wordArr) {
    var maxLength = 0;
    for (var i = 0; i < wordArr.length; i++) {
        maxLength = Math.max(maxLength, wordArr[i].length);
    }
    return maxLength;
};
console.log(printVertically(s));
