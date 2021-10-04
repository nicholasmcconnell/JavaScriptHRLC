function firstWord(text) {
    let textArr = text.split(' ');
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] === '') {
            continue;
        }
        while ((textArr[i].charAt(textArr[i].length - 1) === ',') ||
            (textArr[i].charAt(textArr[i].length - 1) === '.')) {
            textArr[i].slice(0, -1);
            if (textArr[i].length === 0) {
                continue;
            }
        }
        while ((textArr[i].charAt(0) === ',') ||
            (textArr[i].charAt(0) === '.')) {
            textArr[i].slice(1);
            if (textArr[i].length === 0) {
                continue;
            }
        }
        return textArr[i];
    }
}
// let text = ;
console.log(firstWord("greetings, friends"));
