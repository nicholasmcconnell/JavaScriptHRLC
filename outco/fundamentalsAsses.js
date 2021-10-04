const text = 'abbbaacc'

const problemOne = (text) => {
    let cache = {};

    for (let i = 0; i < text.length; i++) {
        !cache[text[i]] ? cache[text[i]] = 1 : cache[text[i]]++;
    }
    let arrValues = Object.values(cache);
    let arrKeys = Object.keys(cache)

    return arrKeys[arrValues.indexOf(Math.max(...arrValues))]

}

// console.log(problemOne(text))

/////////////////////////////////
const numbers = [12, 13, 14, 15]
const problemTwo = (numbers) => {
    if (numbers.length < 3) return -1
    let leftIndex = 1;
    let rightIndex = numbers.length - 2;
    let cache = {
        'left': numbers[0],
        'right': numbers[numbers.length - 1]
    }
    let fulcrumFound = false;
    while (!fulcrumFound) {

        console.log('lefti ', leftIndex, ' righti', rightIndex)
        if (cache['left'] === cache['right']) {
            // console.log(1111111111)
            cache['left'] += numbers[leftIndex];
            cache['right'] += numbers[rightIndex]
            leftIndex++;
            rightIndex--;
        } else if (cache['left'] > cache['right']) {
            // console.log(2222222)
            cache['right'] += numbers[rightIndex]
            rightIndex--;
        } else if (cache['left'] < cache['right']) {
            // console.log(333333)
            cache['left'] += numbers[leftIndex]
            leftIndex++;
        }

        if (rightIndex - leftIndex === 2) {
            fulcrumFound = true;
        } else if (!(rightIndex - leftIndex)) {
            return -1;
        }
        // console.log(cache)
    }
    return rightIndex - 1;
}

console.log(problemTwo(numbers))

/////////////////////////////////

const problemThree = () => {

}

// console.log(problemThree())