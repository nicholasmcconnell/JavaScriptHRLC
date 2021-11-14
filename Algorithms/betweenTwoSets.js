
let a = [3, 9, 6];
let b = [36, 72];
const BetweenTwoSets = (a, b) => {
    //create arrays of multiples for a and factors for b
    //
    let multiples = {};
    let factors = {};
    for (let i = 1; i <= b[0]; i++) {
        // console.log('in i')
        for (let j = 0; j < a.length; j++) {
            //add multiples
            // console.log('in f', a[j] * i, b[b.length - 1])

            if ((a[j] * i) > b[b.length - 1]) break;
            !multiples[a[j] * i] ? multiples[a[j] * i] = 1 : multiples[a[j] * i]++;
        }

        for (let k = 0; k < b.length; k++) {
            if (b[k] % i === 0) {
                !factors[i] ? factors[i] = 1 : factors[i]++;
            }
        }
    }
    console.log(multiples, factors)


    let factorsKeys = Object.keys(factors);
    let multiplesKeys = Object.keys(multiples);
    let keysArray = (factorsKeys.length < multiplesKeys.length) ? factorsKeys : multiplesKeys;
    let keyLength = factorsKeys.length < multiplesKeys.length ? factorsKeys.length : multiplesKeys.length;

    let count = 0;
    // console.log(keysArray, factorsKeys.length, multiplesKeys.length)
    for (let i = 0; i < keyLength; i++) {
        if ((factors[keysArray[i]] && multiples[keysArray[i]]) && (factors[keysArray[i]] === b.length && multiples[keysArray[i]] === a.length)) {
            count++;
        }
    }
    return count;
}

console.log(BetweenTwoSets(a, b))