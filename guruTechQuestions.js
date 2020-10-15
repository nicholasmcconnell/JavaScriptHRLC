/* 
QUESTION 1:
Given a string and a word, describe a function that will return the number of 
 times that the word appears in the string.
 Example 1: string - "Hello world", word - "Hello" → output: 1
/Example 2: string - “The tiny fox bit the big fox”, word - “fox” → output: 2
*/

const string = 'The tiny fox bit the big fox';
const word = 'fox';

const wordInString = (string, word) => {
    //split string into array
    //loop through - if element = worrd iterate counter
    let counter = 0;
    let wordArr = string.split(' ');
    console.log(wordArr);

    // for (const words of word) {

        
    // }
}

console.log(wordInString(string, word));

/*
QUESTION 2:
Given a list of numbers, describe how you would find the sum of the squares of the numbers in the list.

Example 1: numbers - [ 4, 3, 12, 6 ], result - 205
Example 2: numbers - [ 0, 8, 1 ], result - 65
*/

/*
BONUS QUESTION:
Write a function that takes a date and time as parameters, and calculates a new date and time
based on a provided duration.

Example 1: Starting date -> “2020-07-17 13:21:34”, duration -> “10 days”  → Output: “2020-07-27 13:21:34”
Example 2: Starting date -> “2020-07-17 13:21:34”, duration -> “10 minutes”  → Output: “2020-07-17 13:31:34”
*/

// Provide your solution below. Written text, pseudo code, or JavaScript is acceptable