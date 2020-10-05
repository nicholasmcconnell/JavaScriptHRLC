const arr = [1, 2, 2, 4];
const r = 2;
const countTriplets = (arr, r) => {
    //1. find triplets
    //-loop through array and push to array.
    //-inner loop 
    //2. count triplets
    let tripletCount = 0;
    let tripletArr = [];
    let newArr = arr;
    
    arr.forEach((e, i, arr) => {
        tripletArr.push(newArr[0]);
        // console.log('foreach i', i)

        
        for (let j = i + 1; j <= (newArr.length+1); j++) {
            let compareIndex = newArr[0];
          console.log('compareindex', compareIndex, arr.length)
            console.log(i,j)

            if (((compareIndex*r) === arr[j])) {
                tripletArr.push(arr[j])
                console.log('triplietarr', tripletArr)
                // console.log('arr[i]', arr[i], tripletArr)
            }

            i++;
            newArr.shift()

            if (tripletArr.length === 3) {
                tripletCount++;
                tripletArr = [];
            }
            // console.log(newArr)
        }


        console.log(tripletArr, tripletCount)
        // return tripletArr;     
        
    });

}

countTriplets(arr, r);