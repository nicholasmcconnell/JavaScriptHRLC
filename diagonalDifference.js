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


    return(Math.abs(reducedArr[0]-reducedArr[1]))
}

diagonalDifference(arr);