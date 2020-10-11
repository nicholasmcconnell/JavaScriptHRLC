// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

const string =  "A man, a plan, a canal: Panama";

const isPalindrome = (string) => {
    console.log(string.replace(/\W/g,'').toLowerCase());
    console.log(string.replace(/\W/g,'').toLowerCase().split('').reverse().join(''));

}

isPalindrome(string);