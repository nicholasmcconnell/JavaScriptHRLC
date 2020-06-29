
// const array = [ 1.5, 3, 2.5, 1 ];

// const reducer = (accumlator, currentValue) => accumlator + currentValue
// const reducer = (acc, cv) => acc + cv;
// const sum = array.reduce(reducer);
// const sum = (array.reduce(reducer));

// const avg = sum / array.length;
// console.log(avg, array.length);

// Write a function that takes in an array of integers and the array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]

// const arr = [4,5,4,4,7,5, 3,5,,4];

// function remove_duplicates_es6(arr) {
//     let s = new Set(arr);
//     let it = s.values();
//     return Array.from(it);
// }

// const uniqueSet = Array.from(new Set(arr));
// // const backtoArr = [...uniqueSet];

// console.log(uniqueSet);

// console.log(array.filter((item, index) => array.indexOf(item) === index))

// array.filter((acc, index) => array.indexOf(acc) === index)


// const newArr = array.reduce((acc, index) => {
//     return acc.includes(index) ? acc : [...acc, index]}, []);

// const newArr = arr.reduce((acc, item) => {
//     return acc.includes(item) ? acc : [...acc, item]
// })

// console.log(newArr)

// Write a function that takes an array of integers as an input and outputs the first duplicate.

// Ex:
// let array = [2, 5, 6, 3, 3, 6];
// Output: 5

// Input: [ 1, 3, 4, 1, 3, 4 ]
// Output: 1

// Input: [ 2, 4, 5 ]
// Output: undefined

// const findDublicate = (arr) => {

//     for (const index of array) {

//         if (index !== index)

//     }

// }
// const dupe = (array) => {
//     let newArr = [];
//     // let arr = array
//     // console.log(array);
//     for (let index = 0; index < array.length; index++) {
//         // const element = array[index];

//         if (array.find((currIndex, indexValue) => array.lastIndexOf(currIndex) !== indexValue)) {
//             newArr.push(index.valueOf(index));
//         };
//     }

//     console.log(newArr);
// }

//*****************finde dublicates */
// dupe(array);

// var input = [1, 2, 3, 1, 3, 1];

// var duplicates = input.reduce((acc, el, i, arr) => {
//   if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
// }, []);

// console.log(duplicates); // = 1,3 (actual array == [1, 3])

// var testArr2 = [1, 2, 6, 4, 8, 9, 6];

//     function findDupes(arr){
//         for (var i=0; i<arr.length; i++){
//             var currentIndex = i;
//             var firstIndex = arr.indexOf(arr[i]);
//             if (currentIndex !== firstIndex){
//                 return arr[i];
//             }
//         }
//     }

// var test2Result = findDupes(testArr2);
// console.log(test2Result);

// var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
// var results = [];
// for (var i = 0, len = arr.length - 1; i < len; i++) {
//   if((results.indexOf(arr[i]) === -1) && (arr.indexOf(arr[i], i + 1) !== -1)) {
//       results.push(arr[i]);
//    }
// }
// console.log(results);

// Write a function that takes in an input and returns true if it's an integer and false otherwise.

// Ex:
// Input: "7"
// Output: false

// Input: 7
// Output: true

// Input: 4.3
// Output: false

// const input = "4";

// const intCheck = (input) => {
//    return (Number.isInteger(input))

// }

// console.log("hi " + intCheck(input));

// Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

// Ex:
// Input: '1'
// Output: -1

// Input: '4'
// Output: -4

// Input: 'cow'
// ErrorConver

// const input = "55";

// const negativeConversion = (input) => {

//     let num = parseInt(input);
//     return (num - (num*2))
// }

// console.log(negativeConversion(input));

// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined
// const input = 8;

// const dayOfTheWeek = (input) => {
//     switch (input) {
//         case 1:
//             return "monday";
//             break;
//         case 2:
//             return "tuesday";
//             break;
//         case 3:
//             return "wednesday";
//             break;
//         case 4:
//             return "thursday";
//             break;
//         case 5:
//             return "friday";
//             break;
//         case 6:
//             return "saturday";
//             break;
//         case 7:
//             return "sunday";
//             break;
//         default:
//             break;
//     }
// }

// console.log(dayOfTheWeek(input));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const createPhoneNumber = (numbers) => {

//  let numberString = numbers.join("");
//  let one = numberString.slice(0, 3);
//  let two = numberString.slice(3, 6);
//  let three = numberString.slice(6, 10);
//  return (`(${one}) ${two}-${three}`);

// }
// console.log(createPhoneNumber(numbers));

// function simpleArraySum(ar) {
//     /*
//      * Write your code here.
//      */

//     let sum = ar.reduce((a,b) => (a + b));



// }

// const arr = Array.from("asdfjas;dflkadsjl;kf");

// console.log(arr);

// console.log(arr.splice(0, 4))

// Write a for loop that looks at each index of the array to see if it matches the random value
// If it does match the random value display an alert box with the index of the array and the value
// Instructions:
// var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
// var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

// const randomMatch = (stuff, random_value) => {
//     let arr = [];

//     for (let i = 0; i < stuff.length; i++) {
//         console.log(i, random_value)
//         if (i === random_value) {
//             console.log("Match Found! " + stuff[i], i)

//         }

//     }
//     // console.log(stuff.length);
// }

// randomMatch(stuff, random_value);

// ////////////////////////HOUR GLASS ARRAY/////////////////

// let arr = [
//       [ 1, 1, 1, 0, 0, 0 ],
//       [ 0, 1, 0, 0, 0, 0 ],
//       [ 1, 1, 1, 0, 0, 0 ],
//       [ 0, 0, 2, 4, 4, 0 ],
//       [ 0, 0, 0, 2, 0, 0 ],
//       [ 0, 0, 1, 2, 4, 0 ]
//     ];

//     // console.log(arr);

//     const hourGlassSum = (arr) => {

//         let hourglasses = [];

//         if (typeof arr === 'object' && arr.length === 6 && arr.map(i => (i.length)).reduce((acc, cv) => acc + cv) === 36){
//             //move ahead
//         }

//         // if (typeof === 'object' && arr.lnegth)

//     for (let row = 0; row <= 3; row++) {
//         for (let col = 0; col <= 3; col++) {
//             let sum = 0;

//             sum += (arr[row][col]);
//             sum += (arr[row][col+1]);
//             sum += (arr[row][col+2]);
//             sum += (arr[row+1][col+1]);
//             sum += (arr[row+2][col]);
//             sum += (arr[row+2][col+1]);
//             sum += (arr[row+2][col+2]);


//             hourglasses.push(sum);
//         } 

//     }
//     console.log(hourglasses)

//     return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
// }

// console.log(hourGlassSum(arr))

// arr.map(i => (i.length)).reduce((acc, cv) => acc + cv)

// let newArr = arr.map(i => i.length + 1)


// console.log(newArr.reduce((acc, cv) => acc + cv));


//*********LEFT ROTATION ARRAY */

// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
// The second line contains  space-separated integers .

// Constraints

// Output Format

// Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.

// 5

// const d = 3;
// const a = [1, 2, 3, 4, 5];

// function rotLeft(a, d) {
//     while (d) {
//         a.push(a.shift());
//         d--;
//     }
//     return a;
// }

// // console.log("left " + rotLeft(a, d))


// let acc = 0

// function right(a, d, acc) {

//     while (acc < d) {
//         a.unshift(a.splice(-1));
//         acc++;
//     }
//     return a;
// }

// console.log("right " + right(a, d, acc));

// let color = "red";

// switch (color) {
//     case color = "red":
//         console.log("its red")
//         break;
//     case color = "blue":
//         console.log("its blue")
//         break;

//     default:
//         break;
// }

// /////////////////// NEW YEAR CHAOS /////////////////

// let q = [5, 1, 2, 3, 7, 8, 6, 4]

const inimumBribes = (q) => {

    let totalMoves = 0;
    let movesArr = [];
    let moves = 0;

    q.forEach((cv, i) => {

        moves = cv - (i + 1);
        console.log(moves);

        if (moves > 0) {
            totalMoves += moves;
            movesArr.push(moves);
        }
    });

    let i = 0
    let result;
    for (i; i < movesArr.length; i++) {
        if (movesArr[i] >= 2) {
            process.stdout.write(totalMoves.toString());
            process.stdout.write("\n");
            process.stdout.write("Too Chaotic");
            return;
            return ("Too Chaotic ");
        } 
        // else if (movesArr[i] < 2 && movesArr[i] === movesArr.length) {
        //     // process.stdout.write(totalMoves);
        //     // return;
        //     return totalMoves;
        // }
    }
    process.stdout.write(totalMoves);
    return;
    return totalMoves;
}

// // minimumBribes(q)
// // console.log(minimumBribes(q));

let q = [5, 1, 2, 3, 7, 8, 6, 4]

const minimumBribes = (q) => {
    let swaps = 0;
    let min = q.length;
    for (var i = q.length - 1; i >= 0; i--) {
        console.log(q[i]);
        if (q[i] - i > 3) {
            // process.stdout.write("Too chaotic");
            process.stdout.write("\n");
            return "Too chaotic";
         
        }
        if (q[i] > i + 1) {
            swaps += (q[i] - (i + 1));
        } else {
            if (min > q[i]) {
                min = q[i];
            } else if (q[i] != min) {
                swaps++;
            }
        }
        console.log("min " + min)
        console.log("swaps " + swaps)
    }
    // process.stdout.write(swaps);
    // process.stdout.write("\n");
    // return;
    return swaps;
}

console.log(minimumBribes(q));

// function minimumBribes(q) {
//     var bribes = 0, i, j;
//       for (i = 0; i < q.length; i++) {
//           const pos = q[i], at = i + 1;
//           if (  - at > 2) { 
//               process.stdout.write("Too chaotic");
//               process.stdout.write("\n");
//               return; 
//               } 
//           for (j = Math.max(0, pos - 2); j < i; j++) {
//               if (q[j] > pos) { bribes++ }
//           }
//       } 
//       process.stdout.write(bribes.toString());
//       process.stdout.write("\n");
//       return;
//       // return bribes;
//   }



