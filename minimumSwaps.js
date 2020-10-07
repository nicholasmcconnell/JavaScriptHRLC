//currentInt = 7
//index = 0
//position = 1
////in conditional
//indext to swap = 1
//arr[indexToSwap] = 7
// arr[index] = 1


const arr = [2, 3, 4, 1, 5]

function minimumSwaps(arr) {
    let swapCount = 0;
    arr.map((currentInt, index) => {
        const position = index + 1;
        if (currentInt !== position) {
            const indexToSwap = arr.indexOf(position);
            arr[indexToSwap] = currentInt;
            arr[index] = position;
            swapCount = swapCount + 1;
        }
    });
    return swapCount;
}

// console.log(minimumSwaps(arr));

function minimumSwaps(arr) {
    let swapCount = 0;
    for (let index = 0; index < arr.length; index++) {
        const currentInt = arr[index];
        const position = index + 1;
        if (currentInt !== position) {
            let indexToSwap
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === position) {
                    indexToSwap = i;
                    break
                }
            }
            arr[indexToSwap] = currentInt;
            arr[index] = position;
            swapCount = swapCount + 1;
        }
    }
    return swapCount;
}

const minSwapsOpti = (arr) => {

    let minSwaps = 0;

    for (let i = 0; i < arr.length; i++) {
        const right = i + 1;
        console.log(arr)
        if (arr[i] !== right) {
            const rightIdx = arr.indexOf(right, i);
            console.log('rightindesx', rightIdx, arr[i]);
            arr[rightIdx] = arr[i];
            arr[i] = right;
            ++minSwaps;
        }
    }

    return minSwaps;

    // let minSwaps = 0;
    // arr.map((item, index) => {
    //     if (item !== index + 1) {
    //         console.log('arr', arr)
    //         console.log('item', item, 'index', index)
    //         const rightIndex = arr.indexOf(index + 1, index);
    //         console.log('rightindesx', rightIndex);
    //         [arr[index], arr[rightIndex]] = [arr[rightIndex], arr[index]];
    //         console.log('arr[index], arr[rightIndex]', [arr[index], arr[rightIndex]])
    //         console.log('arr[rightIndex], arr[index]', [arr[rightIndex], arr[index]])
    //         ++minSwaps;
    //     }
    // });
    // return minSwaps;
}

console.log(minSwapsOpti(arr))