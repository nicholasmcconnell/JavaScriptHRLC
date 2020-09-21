const gimmieSomeSpace = (str) => {
    //take string input, validate if necessart
    if (typeof str !== "string") {
        return "not a string"
    }
    //split the string using .split() in JS
    let splitStr = str.split('')
    // for (let i = 0; i < splitStr.length; i++) {
    //     // if(splitStr[i] === ',') {
    //     //     splitStr.slice(1, splitStr[i-1])
    //     // } 
    //     if (splitStr[i] === ' ') {
    //         splitStr.splice(i, 1)

    //     }
    // }
    return splitStr.join(' ');
    //once split, put back together with .join() with added space.


}
// console.log(gimmieSomeSpace(4))
console.log(gimmieSomeSpace("hello, world"))
console.log(gimmieSomeSpace("time to back a cake"))
let arr = [40, 100, 1, 5, 25, 10]
const spliceFun = (arr) => {
    let newArr = [];
    arr.forEach(e => {
        newArr.push(e + 1)
    });

    console.log(arr, newArr)
}

spliceFun(arr);
let newArr = arr.map(e => e + 1)
console.log(arr, newArr)

console.log(arr.findIndex(e => e > 50))

