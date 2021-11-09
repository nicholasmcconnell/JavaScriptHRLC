let nums = [1, 2, 2, 3];

// console.log([...new Set(nums)]);

let func = function () {
    {
        (function () {
            let l = 'let';
            var v = 'v';


        })();
    }

    console.log(v);
    console.log(l);
}

// func();

let profile = {
    name: 'techsith',
};

Object.defineProperty(profile, 'age', {
    value: 3,
    writable: false
})

// profile.name = 'nick';
// profile.age = 4;
// console.log(profile);

// let str = 'hello';
const reverseString = (str) => {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;

}

// console.log(reverseString(str))

//String Palindrome with and without array mathods

let str = 'moiom';

const stringPalWith = (str) => {
    let flag = false;
    // console.log(str.split('').reverse().join('') === str.split('').join(''))
    (str.split('').join('') === str.split('').reverse().join('')) ? flag = true : flag = false;

    return flag;
}


const stringPalWithout = (str) => {

    // let reverseStr = '';

    // for (char of str) {
    //     reverseStr += char;
    // }

    // if (str === reverseStr) {
    //     return true;
    // } else {
    //     return false;
    // }

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;

}

console.log(stringPalWithout(str));

