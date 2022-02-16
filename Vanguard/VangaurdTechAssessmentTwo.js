
/*

1. Task was to return the character in a string with the most occurancnces.

*/

const text = 'abcdefghijklzmznzozpzqzrzsztzuvwzxzyzzzabcdefghijklmnopqrstuvwxyz'
const maximumOccurringCharacter = (text) => {

    let textArr = text.split('');

    let letterCount = new Map;

    for (let i = 0; i < textArr.length; i++) {
        letterCount.get(textArr[i]) ? letterCount.set(textArr[i], letterCount.get(textArr[i]) + 1) : letterCount.set(textArr[i], 1);

    }
    let sortedMap = [...letterCount].sort((a, b) => b[1] - a[1]);

    return sortedMap[0][0];

}

console.log(maximumOccurringCharacter(text));

/*

2.Consider an array of n ticket prices, tickets. 
    A number, m, is defined as the size of some subsequence, s, of tickets where each element covers an unbroken range of integers. 
    That is to say, if you were to sort the elements in s, the absolute difference between any elements j and j + 1 would be either 0 or 1. 
    Determine the maximum length of a subsequence chosen from the tickets array.

*/

const tickets = [8, 5, 4, 8, 4];

const maxTickets = (tickets) => {
    tickets.sort();

    let maxSub = 0;
    let tempSub = 1;
    for (let i = 0; i < tickets.length; i++) {
        let difference = tickets[i + 1] - tickets[i];
        if (difference === 0 || difference === 1) {
            tempSub += 1;
            maxSub = Math.max(maxSub, tempSub);
        } else {
            tempSub = 1;
        }
    }
    return maxSub;

}

console.log(maxTickets(tickets));

let tools = ['ballendmill', 'facemill', 'keyslot', 'slotdrill'];
let startIndex = 1;
let target = 'slotdrill';

/*

3. The challange was to find the minimum number of moves it takes to reach a target item in an array given a starting index.
    - The added twist was traversing the array in a 'circular' method. 
        - Meaning, if the startIndex was 0 and the target occupied the last index of the array => the minimum number of moves to reach the target would be 1 by traversing left in the array from index 0 to the end of the array.
*/

const toolchanger = (tools, startIndex, target) => {
    // Write your code here
    if (startIndex === tools.indexOf(target)) return 0;
    let uniqueTools = [...new Set(tools)]
    let moves = 0;
    let circular = (startIndex + 1) + ((uniqueTools.length - 1) - uniqueTools.indexOf(target))
    let nonCircular = Math.abs(startIndex - uniqueTools.indexOf(target));

    if (nonCircular === 0) {
        moves = circular
    } else if (circular === 0) {
        moves = nonCircular
    } else {
        moves = Math.min(circular, nonCircular);
    }

    return moves;
}

console.log(toolchanger(tools, startIndex, target));