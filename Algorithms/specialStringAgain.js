let n = 7;
let s = 'abcbaba';

const specialStringAgain = (n, s) => {

    let numofSpecialChars = n;
    let sArr = s.split('');

    let i = 0;
    while (i < sArr.length - 2) {
        //check for same same char
        for (let j = sArr.length - 1; j > 1; j--) {
            if (sArr[i] === sArr[j]) {
                let subArr = sArr.slice(i, j + 1)
                let specialChar = sArr[i];
                //check if all characters are the same
                // if(subArr.filter)
                //walk through to see if same characters or if new char is middle of array - odd length
                left = i;
                right = j;

                while (left < right) {
                    if (sArr[left] === specialChar && sArr[right] === specialChar) {
                        left++;
                        right--
                        continue;
                    } else if (sArr[left] !== sArr[right] && subArr % 2 !== 0) {


                    }
                }
            }
        }
    }


    return n;

}


let testArr = [1, 2, 3, 4, 5, 6, 7]

const specialStringAgain2 = (n, s) => {

    let ans = s.length;

    for (let i = 0; i < s.length; i++) {

        let repeat = 0;

        while (i + 1 < s.length && s.charAt(i) === s.charAt(i + 1)) {
            repeat++;
            i++
        }
        ans += repeat * (repeat + 1) / 2;

        let pointer = 0;
        while (i - pointer >= 0 && i + pointer < s.length && s.charAt(i + pointer) === s.charAt(i - 1 && i - pointer) && s.charAt(i - pointer) === s.charAt(i)) {
            ans++;
            pointer++;
        }
    }
    return ans;

}
console.log(specialStringAgain2(n, s))