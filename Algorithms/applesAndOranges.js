/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

const s = 7;
const t = 11;
const a = 5;
const b = 15;
// 3 2
const apples = [-2, 2, 1];
const oranges = [5, -6];

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    // Write your code here
    const houseStart = s;
    const houseEnd = t;
    const appleLocation = a;
    const orangeLocation = b;

    let applesOnHouse = 0;
    let orangesOnHouse = 0;

    // return [
    //     apples.map(apples => )
    // ]

    applesOnHouse = apples.filter(value => ((value + appleLocation) >= houseStart && (value + appleLocation) <= houseEnd)).length;
    orangesOnHouse = oranges.filter(value => ((value + orangeLocation) >= houseStart && (value + orangeLocation) <= houseEnd)).length;

    //add tree distance to fruite array values
    //if the fall in range then

    // for (let i = 0; i < apples.length || i < oranges.length; i++) {
    //     if ((apples[i] + appleLocation) >= houseStart && (apples[i] + appleLocation) <= houseEnd) {
    //         // if (i > apples.length) continue;
    //         applesOnHouse++
    //     }

    //     if ((oranges[i] + orangeLocation) >= houseStart && (oranges[i] + orangeLocation) <= houseEnd) {
    //         // if (i > oranges.length) continue;
    //         orangesOnHouse++
    //     }
    // }


    console.log(applesOnHouse);
    console.log(orangesOnHouse);

}

console.log(countApplesAndOranges(s, t, a, b, apples, oranges))