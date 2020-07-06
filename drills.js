// function removeSmallest(numbers) {
//     let indexOfMin = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
//   }


// const string = "whats up little guy";
// const array = string .split(" ");
// //console.log(array);

// // let reverse = array.reverse();

// const array2 = () => array.map(index => {

//   if (index.length >= 3) {

//     return (index.split("").reverse().join(""));
//   } else {
//     return index;
//   }

// })


// console.log(array2());



// "(){}[]"  =  True
// "([{}])"  =  True
// "(}"      =  False
// "[(])"    =  False
// "[({})](]" = False

// Test.assertSimilar(last('man i need a taxi up to ubud'), 
// const string = 'man i need a taxi up to ubud';

// function last(x){
//   // let newArray = array.split(" ");
//   return x.split(' ').sort((a,b) => a.slice(-1).localeCompare(b.slice(-1)));

//   }

// console.log(last(string));

//     const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort((a,b) => a.slice(-1).localeCompare(b.slice((-1))));
// console.log(months);
// function descendingOrder(){
//     const num = 454252345345;
//     console.log(num);
//     let newNum = num.toString().split('').sort((a,b) => {return b-a;}).join('');

// console.log(newNum;
//   }

//   descendingOrder()

// function removeSmallest(numbers) {
//     const orignalArray = numbers;
//     const numbersSort = orignalArray;
//     const ascendingArray = numbersSort.sort((a, b) => (a - b));
//     // return ascendingArray.slice(1, ascendingArray.length);
//     for (const number of numbers) {
//         if (number === ascendingArray[0]){
//             // console.log(numbers.splice(number));
//         }
//     }   
//     console.log(orignalArray);
// }
// removeSmallest(numbers);
// console.log(removeSmallest(numbers));

// const usedId = [0,0];
// const idMaker = () => {
//     let id = 0;

//     let recentID = usedId[usedId.length - 1];
//     id = recentID + 1;
//     usedId.push(id);
//     console.log(usedId);
// //   }

// let id = 0;
// var getId = function() {
//   id++;
//   return `note${id}`;
// }
// // Get the note data from the inputs, save it to the db and update the view
// var handleNoteSave = function() {
//   var newNote = {
//     title: $noteTitle.val(),
//     text: $noteText.val(),
//     id: getId()
//   };

// const idMaker = function () {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return '_' + Math.random().toString(36).substr(2, 9);
//   };

//   console.log(idMaker());

// SATURDAY PRE-CLASS DRILL

// Write a function that takes in an array of numbers and outputs the average of all the numbers.

// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2

// const array = [ 1 , 4 , 7 ];

// const avgNum = (array) => {
//     return array.reduce(acc, index)
// }

// console.log(avgNum(array));

// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55

// const input = 10;
// const adderUpper = (input) => {

//     let sum = 0;
//     let checker = 1;
//     for (let i = 0; i <= input; i++) {

//         if (checker <= input) {
//             sum = checker + sum;
//             console.log(checker, sum);
//             checker++;

//         } else {
//             return ("sum " + sum);
//         }

//     }

// }

// console.log(adderUpper(input));

// class SSBool {
//     main() {
//         const b1 = true;
//         const b2 = false;
//         const b3 = true;
//         if((b1 && b2) || (b2 && b3) || b2) console.log("ok");
//         if((b1 && b2) || (b2 && b3) || b1) console.log("dokey");
//     }
// }

// SSBool.main();

// //////////////////////////////////////////////////
// // The output of the following code snippet is:
// (function solution() {
//     class Solution {
//       main() {
//         const stack = [];
//         stack.push(1);
//         stack.push(1.1);
//         stack.push("z");
//         stack.push("Hello");
//         while (stack.length > 0) {
//           const value = stack.pop();
//           console.log(value);
//         }
//       }
//     }
//     const foo = new Solution();
//     foo.main();
//   })();
/**
 * Pick ONE option
 *
 * A: Error at stack.push(1.1)
 * B: Error at stack.push("z")
 * C: Error at stack.push("Hello")
 * D *  1
 *  1.1
 *  "z"
 *  "Hello"
 * E:
 * "Hello"
 * "z"
 * 1.1
// - 1 */


/**
 * Asha and Kelly like programming, but Asha practices more than Kelly. Not wanting to fall behind, Kelly resolves to practice more. They each solve a number of problems in a day. Asha has already solved more problems than Kelly. What is the minimum number of days it will take for Kelly to have solved more problems than Asha?
 *
 * For example, if Asha is 5 problems ahead of Kelly and they solve 3 and 5 problems a day, Asha will be ahead by only 3 after the first day, 1 after the second day, and Kelly will pass Asha on day 3.
 */
/**
 * Function Description
 *
 * Complete the function minNum in the editor below. The function must return the minimum number of days needed by Kelly to exceed Asha, or -1 if it's impossible.
 *
 * minNum has the following parameter(s):
 * kelly wants to pass asha
 *     A: Number of problems Asha solves in a day
 *     K: Number of problems Kelly solves in a day
 *     P: Number of problems Asha is ahead to begin
 *
 * Constraints
 *     1 <= A, K <= 100
 *     0 <= P <= 100
//  */
// let A;
// let K;
// let P;

// function minNum(A, K, P) {

//     // console.log(A, K, P);

//     if (A >= K) {
//         return -1;
//     }

//     let kelly = 0;
//     let asha = P;
//     let days = 0;

//     while (asha >= kelly){
//         kelly += K;
//         asha += A;
//         days++;
//     , 

//     return days;
// }
// // minNum(3, 4, 20);
// // console.log(minNum(15, 15,15));
// console.log(minNum(3, 4, 5));
// // console.log(minNum(5, 4, 0));
// const n = 15;
// let ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5, 3];

// function sockMerchant(n, arr) {

//     let dups = [];
//     let int = 0;
//     let pairs = 0;
//     let i = 0;
//     let finalPairs;

//     arr.forEach(element => {
//         if (arr.indexOf(element) < arr.lastIndexOf(element)) {
//             dups.push(element);
//         }
//     });

//     let orderedArr = dups.sort((a, b) => a - b);

//     while (i <= orderedArr.length) {
//         if (finalPairs > 0) {
//             return finalPairs;
//         }
//         orderedArr.sort((a, b) => {
//             if (a === b) {
//                 int++;
//                 if ((int + 1) === orderedArr.length) {
//                     if (int % 2 === 0) {
//                         pairs = pairs + (int / 2);
//                     } else {
//                         pairs = pairs + ((int + 1) / 2);
//                     }
//                     finalPairs = parseInt(pairs);
//                     return finalPairs;
//                 }
//             } else if (a !== b) {
//                 if (int % 2 === 0) {
//                     pairs = pairs + (int / 2);
//                     int = 0;
//                 } else {
//                     pairs = pairs + ((int + 1) / 2);
//                     int = 0;
//                 }
//             }
//             i = i + orderedArr.indexOf(a);
//             orderedArr.splice(0, orderedArr.indexOf(a));
//         })
//     }
// }
// let output = sockMerchant(n, arr);
// console.log("final " + output);

// let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

// console.log(findDuplicates(arr)) // All duplicates
// console.log([...new Set(findDuplicates(arr))]) // Unique duplicates


// // console.log(...new Set(arr));

// function sockMerchant(n, ar) {
//     let sorted = ar.sort((a, b) => a-b);
//     console.log(sorted)
//     let pairs = 0;
//     for (let i = 0; i < n - 1; i++) {
//         // console.log("if before if " + i);
//         if (sorted[i] === sorted[i + 1]) {
//             pairs++;
//             i += 1;
//             // console.log(i);
//         }
//     }
//     return pairs;
// }

// console.log(sockMerchant(n, ar))

// const name = "max";
// const reactThoughts = "super swanky";

// function removeVowels( name ){
//     return name.replace(/[aeiouAEIOU]/g, "");
// };

// console.log(removeVowels(name));




// function disemvowel(name) {

//     let vowels = {
//       'a': true,
//       'e': true,
//       'i': true,
//       'o': true,
//       'u': true
//     };

//     let result = "";

//     for (let i = 0; i < name.length; i++) {
//         let letter = name[i].toLowerCase();

//         if (!vowels[letter]) {

//             result += name[i];
//         }

//     }
//     return result;
//   };



//   console.log(disemvowel(name));

// const n = 12;
// const s = "DDUUDDUDUUUD";

// function countingValleys(n, s) {
//     let arr = s.split("");
//     let acc = 0;
//     let elevation = 0;
//     let numArr = [];

//     arr.forEach(element => {
//         if (element === 'U') {
//             elevation += 1;
//             numArr.push(elevation);

//         } else {
//             elevation -= 1;
//             numArr.push(elevation);
//         }
//     });

//     if (numArr[0] === -1) {
//         acc++;
//     }

//     for (let i = 0; i < n; i++) {
//         const element = numArr[i];

//         if ((numArr[i] === 0) && (numArr[i + 1] === -1)) {
//             acc++;
//         }
//     }

//     return acc;
// }

// countingValleys(n, s);

// const n = 7;
// // const c = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0];
// const c = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
// function jumpingOnClouds(n, c) {
//     let acc = 0;

//     for (let i = 0; i < c.length; i++) {
//         console.log(i)

//         if (i === c.length) {
//             acc++
//             return acc;
//         } else if (c[i + 2] === 0) {
//             acc++;
//             i += 1;
//             // console.log("+2");
//         } else if (c[i + 1] === 0) {
//             acc++;

//         }

//     }

//     return acc;
// }

// console.log(jumpingOnClouds(n, c));

// const s = "ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt";
// const n = 685118368975;

// const s = "beeaabc"
// const n = 711560125001;

// beeaabc
// 711560125001
// 203302892858

// const s = "jdicikk";
// n = 899491
// 112436
// function repeatedString(s, n) {

//     if (s.length === 1 && s[0] === 'a') {
//         return n;
//     } else if (s.length === 1 && s[0] !== 'a') {
//         return 0;
//     }

//     let aInString = s.match(/a/g); //aInstring.length = num of a in s.length
//     if (aInString === null) {
//         return 0;
//     }

//     let product = n / s.length; // totalstring length/s.length -- how s's fit into n
//     let wholeString = Math.floor(product) // num of whole strings in n
//     let remainderStringDecimal = parseFloat("." + (product + "").split(".")[1]).toFixed(4); // how much of last string fits in n
//     let remainderNumber = parseFloat(remainderStringDecimal);  // reaminderstringdecimal turned to string
//     let remainderStringLength;

//     if (Math.floor(s.length * remainderNumber) === 0) {
//         remainderStringLength = 1;
//     } else {
//         remainderStringLength = Math.floor(s.length * remainderNumber)
//     }

//     let remainderStringArr = s.slice(0, remainderStringLength).split("");
//     let j = 0;

//     for (let i = 0; i < remainderStringArr.length; i++) {
//         if (remainderStringArr[i] === 'a') {
//         }
//     }
//     let total = (aInString.length * wholeString) + j;
//     return total;
// };

// console.log(repeatedString(s, n));

// // Complete the repeatedString function below.
// function repeatedString(s, n) {
//     var counter = 0;
//     for (var i = 0; i < s.length; i++) {
//         if (s.charAt(i) === 'a') {
//             counter++;
//         }
//     }
//     let rate = Math.floor(n / s.length);
//     let remainder = n % s.length;
//     console.log(remainder)
//     let result = (rate * counter);
//     console.log(result);
//     for (var j = 0; j < remainder; j++) {
//         if (s.charAt(j) === 'a')
//             result++;
//     }
//     return result;
// }

// 6 4
// let magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night', 'give', 'one'];
// let note = ['me', 'one', 'grando', 'one'];

// const checkMagazine = (magazine, note) => {

//     var map = { };
//     var replicable = true;
//     for ( var word of magazine ) {
//         map[word] = (map[word] || 0) + 1;
//         console.log(map);
//     }

//     // console.log(map);
//     for ( var i of note ) {
//         map[i] = (map[i] || 0) - 1;
//     }
//     console.log(map);

//     for ( var i in map ) {
//         if ( map[i] < 0 ) {
//             replicable = false;
//             break;
//         }
//     }
//     console.log(replicable ? 'Yes' : 'No')

// for(let i = 0; i < note.length; i++) { 
//     for(let j = 0; j < magazine.length; j++) { 
//         if(magazine[i] !== note[j]) { 
//             return 'No'; 
//         } 
//     } 
// } 
// return 'Yes';  
// }

// console.log(checkMagazine(magazine, note));


//Solutions for checkMagazine()

// return note.filter(w => magazine.indexOf(w) > -1 ? magazine.splice(magazine.indexOf(w), 1).length : 0).length === note.length ? 'Yes' : 'No';

// var map = { };
//     var replicable = true;
//     for ( var i of magazine ) {
//         map[i] = (map[i] || 0) + 1;
//     }
//     for ( var i of ransom ) {
//         map[i] = (map[i] || 0) - 1;
//     }
//     for ( var i in map ) {
//         if ( map[i] < 0 ) {
//             replicable = false;
//             break;
//         }
//     }
//     console.log(replicable ? 'Yes' : 'No')

// arr = [1,2,2,3]
// Output: [1,2,3]
// const removeDuplicate = (arr) => {
//     arrSet = new Set(arr);
//     return arrSet;
// }

// console.log(removeDuplicate(arr));

const arr = [2, 5, 6, 3, 5]
Output: 5

// const firstDuplicate = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i+1; j < arr.length+1; j++){
//             if(arr [i] === arr[j]){
//                 console.log(arr[i]);
//             } 
//         }
//     }
// }

const firstDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) !== i) {
            console.log(arr[i]);
            break;
        }
    }
}

// firstDuplicate(arr);

let dupe = arr.find((k,i) => arr.lastIndexOf(k) !== i)

console.log(dupe);