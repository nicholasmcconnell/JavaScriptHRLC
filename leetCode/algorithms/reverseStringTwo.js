const s = "abcdefg";
const k = 2;

const reverseStringTwo = (s, k) => {
    let strArr = s.split('')
    let res = '';
    for (let i = 0; i < strArr.length; i += k * 2) {
        res += strArr.slice(i, i + k).reverse().join('');
        res += strArr.slice(i + k, i + k * 2).join('')
    }

    return res;



}

console.log(reverseStringTwo(s, k))