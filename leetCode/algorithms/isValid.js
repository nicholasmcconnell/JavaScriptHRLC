const s = "([]{}]";


const isValid = (s) => {
    const leftMap = {
        '(': 1,
        '{': 2,
        '[': 3,
    }
    const rightMap = {
        ')': 1,
        '}': 2,
        ']': 3,
    }

    if (rightMap[s[0]]) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        if (leftMap[s[i]]) {
            stack.push(s[i])
        } else if (!stack.length || rightMap[s[i]] !== leftMap[stack.pop()]) {
            return false;
        }
        console.log(stack)
    }
    console.log(stack.length)
    return stack.length ? false : true;
}

// const isValid = (s) => {
//     let checkArr = [];
//     let check = false;
//     console.log(s[s.length - 1])
//     if (s.length === 1 || s[s.length - 1].match(/[({[]/)) return false;

//     // fruit.match(/^(banana|lemon|mango|pineapple)$/
//     for (let i = 0; i < s.length; i++) {
//         if (s[i].includes('(') || s[i].includes('{') || s[i].includes('[')) {
//             switch (s[i]) {
//                 case '(':
//                     checkArr.push(')')
//                     break;
//                 case '{':
//                     checkArr.push('}')
//                     break;
//                 case '[':
//                     checkArr.push(']')
//                     break;
//                 default:
//                     break;
//             }
//         }

//         if (s[i].includes(')') || s[i].includes('}') || s[i].includes(']')) {
//             check = true;

//             if (s[i] !== checkArr[checkArr.length - 1]) {
//                 return false;
//             } else {
//                 checkArr.pop()
//             }
//         }
//     }
//     if (!check || checkArr.length) return false;
//     return true;
// }

console.log(isValid(s))

















// var isValid = function (s) {
//     let mapLeft = {
//         '{': 1,
//         '[': 2,
//         '(': 3
//     },
//         mapRight = {
//             '}': 1,
//             ']': 2,
//             ')': 3
//         };
//     let stack = [];
//     for (let i = 0; i < s.length; ++i) {
//         if (mapLeft[s[i]]) {
//             stack.push(s[i])
//         } else if (!stack.length || mapRight[s[i]] != mapLeft[stack.pop()])
//             return false;
//     }
//     return stack.length ? false : true;
// };