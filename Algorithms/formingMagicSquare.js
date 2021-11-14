
let s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
let equalityTest = [4, 9, 2, 3, 5, 7, 8, 1, 6];


const FormingMagicSquare = () => {

    let sFlat = [].concat(...s);

    let checkArrayEquality = (sFlat, valueArr) => {
        return Array.isArray(sFlat) && Array.isArray(valueArr) && sFlat.length === valueArr.length && sFlat.every((value, index) => value == valueArr[index]);
    }

    let minCost = 0;

    let solutions = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];

    for (const value of Object.values(solutions)) {

        if (checkArrayEquality(value, sFlat)) return 0;

        let cost = 0;
        for (let i = 0; i < value.length; i++) {
            if (s[i] !== value[i]) {
                cost += Math.abs(sFlat[i] - value[i]);
            }
        }

        if (minCost === 0) {
            minCost = cost;
        } else {
            minCost = Math.min(minCost, cost);
        }

        cost = 0;
    }

    return minCost;
}

console.log(FormingMagicSquare(s));

// console.log(Math.abs(5 - 8))