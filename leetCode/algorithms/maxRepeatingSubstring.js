
const sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
const word = "aaaba";

const maxRepeatSubstring = (sequence, word) => {
    //if first int = first int then keep going bump
    let k = 0;
    let addOn = word;

    while (sequence.includes(word)) {
        word += addOn;
        console.log(word)
        k++
    }
    return k;
    // let pos = sequence.indexOf(word)
    // console.log(pos)

    // if (pos !== -1) {
    //     k++;
    // }
    // // console.log(word.repeat(2))
    // while (sequence.indexOf(word.repeat(k + 1)) !== -1) {
    //     k++
    // }
    // return k;



}


console.log(maxRepeatSubstring(sequence, word))
// //

// let arr = '';
// let count = 0;
// let toggle = false;

// for (let i = 0; i < sequence.length; i++) {
//     console.log('first i', i)
//     if (sequence[i] === word[0]) {
//         for (let j = i; j < word.length + i; j++) {
//             if (sequence[i + (j - i)] === word[j - i]) {
//                 console.log('fdsgf', i, sequence[i + (j - i)], word[j - i], arr, word)
//                 arr += word[j - i]
//                 if (arr === word) {
//                     console.log('1111111111', arr, word)
//                     console.log(i)
//                     count++;
//                     console.log('count', count)
//                     arr = '';
//                     i += word.length;
//                     console.log('i', i)
//                 }
//             } else {
//                 arr = '';
//                 j = word.length + i;
//                 console.log('ii', i)
//             }
//         }
//     }
// }
// return count