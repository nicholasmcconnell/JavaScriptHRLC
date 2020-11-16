const arr = [5, 1, 4, 4, 3, 2];

const countingSort = (arr) => {
    console.log('arr', arr);
    // initialize count Array: 0 * (arr max value + 1(for index 0))
    const countArr = new Array(Math.max(...arr) + 1).fill(0);
    console.log('countArr', countArr)

    // initialize accumulation Array with one element: 0
    // this will be used to store key values as an index legend
    const accumulationArr = [0];

    //initialize accumulator to aid construction of accumulation Array
    let accumulator = 0;

    //initialize sorted Array for result: 0 * arr.length
    const sortedArr = new Array(arr.length).fill(0);
    console.log('sortedArr', sortedArr);

    //load the count array by tracking occurrences of each unique value in the input array
    for (const i of arr) {
        //access atching index of count array and increment the corresponding value by 1
        countArr[i]++
    }
    console.log('countArr after forof', countArr);

    // load the accumulation Array by accumulatively adding the values of the count Array, in sequence, to create an index legend for the pending sorting procedure note that the accumulation Array already contains the value 0 at index 0, and the loop stops before the last accumulation as it is not needed for calculations

    for (let i = 0; i < countArr.length - 1; i++) {
        // the accumulator is assigned the value of the first element
        // of the count Array on the first iteration, then on, the 
        // accumulative value of previous elements + current element
        accumulator += countArr[i];

        //the current accumulator value is added to the accumulatoin array
        accumulationArr.push(accumulator);
    }
    console.log("accumulationArr", accumulationArr)

    // load the sorted result Array by looping over the input Array,
    // using the current element to access an index from the
    // accumulation Array, accessing that index in the sorted Array 
    // and assigning it the value of the current element

    for (let i = 0; i < arr.length; i++) {
        //assign the index variable the value from the accumulatoin Array at [index = current element]
        console.log('start', accumulationArr, i);
        let index = accumulationArr[arr[i]];//
        //use the index var to assign value from input Array to correct position in sorted array
        sortedArr[index] = arr[i];//
        console.log('index', index, 'sortedArr[index]', sortedArr[index]);
        // increment the value from the accumulation Array 
        // at [index = current element] by 1 to shift target index
        // by 1 to accommodate pending repeated input values
        accumulationArr[arr[i]]++;
        console.log('sortedArr', sortedArr, 'end', accumulationArr);
    }
}

// countingSort(arr);
const inputArr = [5,7,3,2,5,7,9,44,2,5,6,4,22,4,3,2,34,4,32,5,6];
const countingSortTutorial = (inputArr) => {
    for (const cv of inputArr) {

        if (!Number.isInteger(cv)) {
            console.log('Found a non-integer value inside the input array');
            return;
        } else if (cv < 0) {
            console.log('Found a negative number inside the input array');
            return;
        }
    }

    // if (inputArr.length < 2) return inputArr;

    // let maxValue = Math.max(...inputArr);

    // let countingArr = new Array(maxValue + 1).fill(0);

    // for (let value of inputArr) {
    //     countingArr[value]++;
    // }
    // let resultArr = [];
    // for (let [i] of countingArr.entries()) {
    //     while (countingArr[i] > 0) {
    //         resultArr.push(i)
    //         countingArr[i]--;
    //     }
    // }
    // return resultArr;

    //find max value
    let maxValue = Math.max(...inputArr);
    console.log(maxValue);
    //inialize counting array with length of max value
    let countingArr = new Array(maxValue).fill(0)
    for(let value of inputArr){
        countingArr[value]++;
    }
    console.log(countingArr)
    //loop over counting arra and push to result array
    let sortedArr = [];
    for(let [i] of countingArr.entries()){
        while(countingArr[i] > 0){
            sortedArr.push(i);
            countingArr[i]--;
        }
    }
    return sortedArr;
}

console.log(countingSortTutorial(inputArr))

