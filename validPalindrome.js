// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

const string =  "ab_a";

const isPalindrome = (string) => {
    let altStr = string.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let altStrReverse = string.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').reverse().join('');

    let verify = altStr.localeCompare(altStrReverse);

    if (verify === 0) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome(string));