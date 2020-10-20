const a = [17, 28, 30];
const b = [99, 16, 8];

const compareTriplets = (a, b) => {
    let aCount = 0;
    let bCount = 0;

    // if(a.length !== b.length) {
    //     return 'Arrays are different lengths'
    // }

    for (let i=0; i < 3; i++) {
     
        if(a[i] > b[i]){
            aCount++;
        } else if(a[i] < b[i]){
            bCount++;
        }
    }

    return ([aCount, bCount]);
}

console.log(compareTriplets(a,b))