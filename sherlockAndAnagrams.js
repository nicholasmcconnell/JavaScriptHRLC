s = 'abba';

const getAllSubstrings = (s) => {
    let i, j, result = [];

    for (i = 0; i < s.length; i++) {
        console.log('next')
        for (j = i + 1; j < s.length + 1; j++) {
            console.log(result.push(s.slice(i, j)));

        }
    }
    return result;
}

const isAnagram = (str1, str2) => {
    const hist = {};

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        if (hist[char]) {
            hist[char]++
        } else {
            hist[char] = 1
        }
    }

    for (let j = 0; j < str2.length; j++) {
        const char = str2[j]

        if (hist[char]) {
            hist[char]--
        } else {
            return false
        }
    }
    return true
}





const sherlockAndAnagrams = (s) => {



}

//1. iterate through the string
//2. check for annagrams of different length
//3. iterator to change the size its looking for
