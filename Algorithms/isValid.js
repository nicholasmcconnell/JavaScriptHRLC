const s = 'aabbc';

function isValid(s) {
    //cache the values
    //loop over map check for value equality
    //if one is changed flag to true and if another value is inequal return no

    let sArr = s.split('');
    let letterCount = new Map;

    for (let i = 0; i < sArr.length; i++) {
        letterCount.get(sArr[i]) ? letterCount.set(sArr[i], letterCount.get(sArr[i]) + 1) : letterCount.set(sArr[i], 1);

    }

    let valuesArr = [];
    for (let value of letterCount.values()) {
        valuesArr.push(value);
    }

    valuesArr.sort();

    if (valuesArr.length === 1) return 'YES';
    console.log(valuesArr)
    let firstValue = valuesArr[0];
    let secondValue = valuesArr[1];
    let secondToLastValue = valuesArr[valuesArr.length - 2];
    let lastValue = valuesArr[valuesArr.length - 1];

    if (firstValue === lastValue) return 'YES';
    if (firstValue === 1 && secondValue === lastValue) return 'YES';
    if (firstValue === secondValue && secondValue === secondToLastValue && secondToLastValue === (lastValue - 1)) return 'YES';

    return 'NO';
}

console.log(isValid(s));