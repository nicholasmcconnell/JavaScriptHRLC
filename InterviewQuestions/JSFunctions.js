let = arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenArray = (arr) => {

    return arr.filter((e) => e % 2 === 0);
}

// console.log(evenArray(arr))

const addIndexToElement = (arr) => {

    let sumsArr = [];

    for (let i = 0; i < arr.length; i++) {
        sumsArr.push(arr[i] + i);
    }

    // arr.map((item, index) => item + index)
    return sumsArr;
}

// console.log(addIndexToElement(arr));

const multiDimArray = [[1, 2], 3, [4, 5]];

const flattenArray = (multiDimArray) => {

    return [].concat(...multiDimArray);
}

console.log(flattenArray(multiDimArray));