
/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v2 > v1) return 'NO';

    if ((x2 - x1) % (v1 - v2) === 0) {
        return 'YES';
    } else {
        return 'NO';
    }
    // while (x1 <= x2) {
    //     //check if x1==x2
    //     //yes? return yes
    //     //no? add v1 and v2 to correct kangaroos
    //     if (x1 === x2) {
    //         return 'YES';
    //     } else {
    //         x1 = x1 + v1;
    //         x2 = x2 + v2
    //     }
    // }
    // return 'NO';

}

console.log(kangaroo(x1, v1, x2, v2));
