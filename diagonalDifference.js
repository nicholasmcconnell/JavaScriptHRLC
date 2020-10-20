const arr = [
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1]
]

const diagonalDifference = (arr) => {
    //loop 
    const diagArr = [
        [],
        []
    ];
   
    for(let i=0; i < arr.length; i++) {
        diagArr[0].push(arr[i][i]);
        diagArr[1].push(arr[i][(arr.length-1)-i])
    }

    const reducedArr = diagArr.map(e => e.reduce((acc, cv) => acc+cv))

    let acc = reducedArr[0];

    for(let i=1; i<reducedArr.length; i++){
        acc = acc - reducedArr[i];
    }

    return(Math.abs(acc))

    // return(Math.abs(reducedArr[0]-reducedArr[1]))
}

// diagonalDifference(arr);

let array = [9,3,3]
let acc = array[0];

for(let i=1; i<array.length; i++){
    console.log(acc)
    acc = acc - array[i];
}

console.log('hh', acc);