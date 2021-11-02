const { getNameOfDeclaration, isArrayBindingPattern } = require("typescript");

function stringIncludes(sentence, target) {
    let sentenceArr = sentence.split(' ');

    for (let i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i].toLowerCase() === target.toLowerCase()) return true;

    }
}

// console.log(stringIncludes('I drove to New York in a van with my friends', 'new'))

function sum(...args) {

    console.log(args)

    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
    // return args.reduce((acc, cv) => acc + cv);

}

// console.log(sum(2, 3, 4, 5))

function getName(arr) {
    let nameArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i].name) {
            nameArr.push(arr[i].name);
        }
    }
    return nameArr;
}

// console.log(getName(
//     [
//         { a: 1 },
//         { name: 'jane' },
//         { name: 'mark' },
//         {},
//         { name: 'sophia' },
//         { b: 2 }
//     ]
// ))

function getLargestIndex(arr) {

    let largestNumIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[largestNumIndex]) {
            largestNumIndex = i;
        }
    }
    return largestNumIndex;
}

// console.log(getLargestIndex([7, 199, 4, 12, 9, 80]))
let increment = 0;
function delay() {
    console.log("hi");

    increment++

    if (increment === 5) {
        clearInterval(testInterval);
    }
}

// (async () => {
// console.time("testing delay")

const testInterval = setInterval(delay, 1000);

if (increment === 5) {
    clearInterval(testInterval);
}


// .then(res => console.log(res))
// .then(res => console.log(res))

// console.timeEnd('testing delay')
    // })