let n = 6;
let k = 2;
let s = '932239';

const highestValuePalindrome = (s, n, k) => {

    let hi = n - 1;
    let lo = 0;
    let differences = 0;
    let sArr = s.split('');

    let isPalindrome = (s) => {
        let hi = s.length - 1;
        let lo = 0;

        while (lo <= hi) {
            if (s[lo] === s[hi]) {
                lo++;
                hi--;
            } else {
                return false;
            }
            return true;
        }
    }


    while (lo <= hi) {
        if (s[lo] !== s[hi]) {
            differences++;
        }
        hi--;
        lo++;
    };
    // console.log(differences)

    hi = n - 1
    lo = 0;
    if (differences > k) {
        return '-1';
    }

    while (lo <= hi) {
        if (k <= 0) break;

        // console.log('in if', sArr[lo], sArr[hi]);
        if (sArr[lo] === sArr[hi]) {
            if (k > 1 && (k - 2) >= differences && sArr[lo] !== '9') {
                if (sArr[lo] !== '9' && sArr[hi] !== '9') {
                    sArr[lo] = '9';
                    sArr[hi] = '9';
                    k -= 2;
                }
            }

            // if (k < 2) {
            //     sArr[lo] !== '9' ? sArr[lo] = '9' : sArr[hi] = '9';
            //     differences--;
            // }
        } else {
            // console.log('in else')
            if (k > 1 && (k - 2) >= differences - 1) {
                if (sArr[lo] !== '9') {
                    sArr[lo] = '9';
                    k--
                }
                if (sArr[hi] !== '9') {
                    sArr[hi] = '9';
                    k--
                }
            } else {
                sArr[lo] > sArr[hi] ? sArr[hi] = sArr[lo] : sArr[lo] = sArr[hi];
                k--;
            }
            // console.log('1', sArr)
            differences--;
        }

        if (lo === hi && k > 0) {
            sArr[lo] = '9';
        }
        lo++;
        hi--;
    }
    // console.log(sArr)
    s = sArr.join('');
    return isPalindrome(s) ? s : '-1';
}

console.log(highestValuePalindrome(s, n, k));