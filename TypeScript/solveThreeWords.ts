let text = "hello world Hello";

function threeWords(text: string): boolean {
    let textArr = text.split(' ');
    let count = 0;
    console.log(textArr);
    for (var i = 0; i < textArr.length; i++) {
        if (Number(textArr[i])) {
            count = 0;
        } else {
            count++;
        }
        if (count === 3) { return true; }
    }
    return false;

}

console.log(threeWords(text));