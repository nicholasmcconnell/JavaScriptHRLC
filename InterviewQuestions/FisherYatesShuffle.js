const orderedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const fisherYatesShuffle = (orderedArr) => {

    for (let i = orderedArr.length - 1; i > 0; i--) {

        let randomIndex = Math.floor(Math.random() * (i));
        let temp = orderedArr[randomIndex];
        orderedArr[randomIndex] = orderedArr[i];
        orderedArr[i] = temp;
    }
    return orderedArr;
}

console.log(fisherYatesShuffle(orderedArr));