const A = "abab";
const B = "abab";

var buddyStrings = function (A, B) {
    //if match do nothing or push to antoher string
    //hash for not matched
    //if not matched check the hash
    let aArr = A.split('');
    let bArr = B.split('');
    let redundant = false;
    let unmatched = {};
    let swaps = 0
    if (A.length !== B.length) return false;

    for (let i = 0; i < bArr.length; i++) {
        if (aArr[i] === bArr[i + 1] && aArr[i + 1] === bArr[i]) {
            redundant = true;
        }
        if (aArr[i] !== bArr[i] && unmatched[aArr[i]] || unmatched[aArr[i]] === 0) {
            let swap = aArr[unmatched[aArr[i]]]
            aArr[unmatched[aArr[i]]] = aArr[i];
            aArr[i] = swap
            swaps++;
        } else if (aArr[i] !== bArr[i]) {

            unmatched[bArr[i]] = i; //1
        }

        if (swaps > 1) return false
    }
    if (aArr.join('') === bArr.join('') && redundant) {
        console.log('111111111')
        return true;
    } else if (aArr.join('') === bArr.join('') && Object.keys(unmatched).length === 0) {
        console.log('22222222')
        return false;
    } else if (aArr.join('') === bArr.join('')) {
        console.log('333333')
        return true;
    } else {
        console.log('444444444')
        return false;
    }

};

console.log(buddyStrings(A, B))