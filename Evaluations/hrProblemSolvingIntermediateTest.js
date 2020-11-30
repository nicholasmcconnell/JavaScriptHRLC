const a = [9,5,8];

function sortedSum(a) {
    // need acuumulatore
    let acc = 0;
    let functionArr = [];
    //loop over array, push to function array, for each * value by index +1;

    for (let value of a) {
        functionArr.unshift(value)
        for (let i = 0; i < functionArr.length; i++) {
            for (let j = 0; j < functionArr.length - 1; j++) {
                if (functionArr[j] > functionArr[j + 1]) {
                    [functionArr[j], functionArr[j + 1]] = [functionArr[j+1], functionArr[j]];
                }
            }
        }
        let sum = 0;
        for(let i=0; i < functionArr.length; i++){
            sum += (functionArr[i] * (i + 1))
        }
        
        acc += sum;
        sum = 0;

    }
    return acc;
}

// console.log(sortedSum(a));
// console.time('time', sortedSum(a))
let freq = [3,5,4,3]

const taskingOfPairing = (freq) => {
    //get obvious pairs => value / by 2 and get pairs, add pairs to acc and decrement value by pairs * 2.
    //will leave array of ones and zeros if i and i+1 = 1, acc++ and decrement values
  
    let totalPairs = 0;
    for(let i = 0; i < freq.length; i++){
        if(freq[i] >= 2){
            let pairs = Math.floor(freq[i]/2)
            totalPairs += pairs;
            freq[i]-=(pairs*2);
        }
    }
    console.log(totalPairs)
    for(let i = 0; i < freq.length; i++){
        if(freq[i] === 1 && freq[i+1] === 1){
            totalPairs++;
            freq[i] = 0;
            freq[i+1] = 0;
        }
    }

    return totalPairs;
}
console.time("speed");
console.log(sortedSum(a));

// console.log(taskingOfPairing(freq));
console.timeEnd("speed")

