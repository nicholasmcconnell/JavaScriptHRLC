
let arr = [1, 1, 1, 4, 4, 4, 5, 3];

const migratoryBirds = (arr) => {
    if (arr.length === 1) return arr[0];
    if (!arr.length) return null;

    let numOfSightings = new Map();

    for (let i = 0; i < arr.length; i++) {
        (!numOfSightings.has(arr[i])) ? numOfSightings.set(arr[i], 1) : numOfSightings.set(arr[i], numOfSightings.get(arr[i]) + 1)
    }

    let maxSightingId = 0;
    let maxSightingValue = -1;

    for (let [index, value] of numOfSightings.entries()) {
        //max sight is greater
        if (value > maxSightingValue) {
            maxSightingId = index;
            maxSightingValue = value;
        } else if (maxSightingValue === value && index < maxSightingId) {
            maxSightingId = index;
        }
    }

    return maxSightingId;

}

module.exports = migratoryBirds;