const arr = [1, 3, 9, 9, 27, 81]
const r = 3

const countTriplets = (arr, r) => {
    //keeps count of occurences of integer within array
    const hGram = {};
    //keeps count of occurences of number whcih can be middle digit of a potential triplet
    const hGram2 = {};

    let count = 0;

    if (arr.lengh < 3) return 0;

    // Decrementing for loop raverses the array from its end which enables multipication to be used to evaluate other possible triplet digits instead of division which is more computationally expensive

    for (let i = arr.length - 1; i >= 0; i--) {
        //represents 1st digit of potential triplet
        let t1 = arr[i];
        //represents 2nd digit of potential triplet
        let t2 = t1 * r;
        //represents 3rd digit of potential triplet
        let t3 = t2 * r;

        // case 1: current element is the first digit of potential triplet 
        // i.e. potential triplet = [t1, t1*r, t1*r*r]
        // which means the second and third digits of potential triplet have // been vetted
        // increment count by value associated to the key of hGram2[t3] 
        // wherein said key = 3rd digit of potential triplet 
        // otherwise, if said value is null, increment count by 0
        count += hGram2[t3] || 0;

        // case 2: current element is the second digit of potential triplet 
        // i.e. potential triplet = [t1/r, t1, t1*r]
        // which means the third digit of potential triplet has been vetted
        // if hGram2 already includes key of current element 
        // increment value associated to said key by the value associated 
        // to the key of hGram[t2], unless it's null, then to 0.
        // otherwise, add key of current element to hGram2 and set value to
        // the value associated to the key of hGram[t2]
        // unless it's null, then to 0.
        hGram2[t2] ? hGram2[t2] += hGram[t2] || 0 : hGram2[t2] = hGram[t2] || 0;

        // case 3: current element is the third digit of potential triplet 
        // potential triplet = [t1/r/r, t1/r, t1]
        // which means the first and second digits of potential triplet have
        // NOT been vetted
        // if hGram already includes key of current element 
        // increment value associated to said key by 1 
        // otherwise, add key of current element to hGram and set value to 1

        hGram[t1] ? hGram[t1]++ : hGram[t1] = 1;

    }
    return count;
}

console.log(countTriplets(arr, r));



// const countTriplets = (arr, r) => {
//     //1. find triplets
//     //-loop through array and push to array.
//     //-inner loop 
//     //2. count triplets
//     let tripletCount = 0;
//     let tripletArr = [];
//     let newArr = arr;

//     arr.forEach((e, i, arr) => {
//         tripletArr.push(newArr[0]);
//         console.log('foreach i', e, arr)

//         let k = 0;

//         for (let j = k + 1; j <= (newArr.length+1); j++) {
//             let compareIndex = newArr[0];
//           console.log('compareindex', compareIndex, arr.length)
//             console.log(i,j)

//             if (((compareIndex*r) === arr[j])) {
//                 tripletArr.push(arr[j])
//                 // console.log('triplietarr', tripletArr)
//                 // console.log('arr[i]', arr[i], tripletArr)
//             }

//             k++;

//             if (tripletArr.length === 3) {
//                 console.log('triplietarr', tripletArr)
//                 tripletCount++;
//                 tripletArr = [];
//             }
//             // console.log(newArr)
//         }


//         // return tripletArr;     

//     });
//     console.log('count',tripletArr, tripletCount)

// }

// countTriplets(arr, r);