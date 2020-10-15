// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

const string =  "A man, a plan, a canal: Panazzz";

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


var isPalindromes = function(string) {
    // filter out non alphanumeric characters
    const regex = /[a-z0-9]/gi;
    const filteredCharacters = string.match(regex);
    if (filteredCharacters === null) return true;
      
    const arrLength = filteredCharacters.length;
    const halfLength = Math.floor(arrLength / 2);
      
    for (let i = 0; i < halfLength ; i++) {
      console.log('testing: ', filteredCharacters[i], filteredCharacters[arrLength - 1 - i])
      if (filteredCharacters[i].toLowerCase() !== filteredCharacters[arrLength - 1 - i].toLowerCase()) return false;
    }
    return true;
  };

  console.log(isPalindromes(string));
