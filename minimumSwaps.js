const arr = [7, 1, 3, 2, 4, 5, 6]
//currentInt = 7
//index = 0
//position = 1
////in conditional
//indext to swap = 1
//arr[indexToSwap] = 7
// arr[index] = 1



function minimumSwaps(arr) {
    let swapCount = 0;
    arr.forEach((currentInt, index) => {
        const position = index + 1;
        console.log('arr before if', arr)
        if (currentInt !== position) {
            const indexToSwap = arr.indexOf(position);
            console.log('indexToSwap', indexToSwap);
            arr[indexToSwap] = currentInt;
            console.log('arr[indexToSwap]', arr[indexToSwap]);
            // arr[index] = position;
            console.log('arr[index]', position)
            // swapCount = swapCount + 1;
        }
        console.log(arr);
    });
    return swapCount;
}

console.log(minimumSwaps(arr));