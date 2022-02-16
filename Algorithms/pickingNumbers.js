let a = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];

function pickingNumbers(a) {
    // Write your code here
    a.sort((a, b) => a - b);
    console.log(a.length);
    let finalSub = 0;
    let currentSub = 1;

    for (let i = 0; i < a.length; i++) {
        // console.log('i', i)
        for (let j = i + 1; j < a.length; j++) {
            console.log(a[j], a[i], a[j] - a[i])
            if (a[j] - a[i] <= 1) {
                // console.log('inif')
                currentSub += 1;
                // console.log('curentsub', currentSub)
            } else {
                // console.log('inelse', j)
                i = j - 1;
                break;
            }
        }
        finalSub = Math.max(finalSub, currentSub);
        currentSub = 1;
    }

    return finalSub;

}

console.log(pickingNumbers(a));
