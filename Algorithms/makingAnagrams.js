let a = 'fcrxzwscanmligyxyvym';
let b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';

const makingAnagrams = (a, b) => {

    //load maps
    //compare values
    //one doesn't exist add all values to count
    //does => if diff add diff to count

    let aMap = {};
    let bMap = {};
    let count = 0;
    let abCombo = [...new Set(a + b)];
    console.log(abCombo);


    for (let i = 0; i < a.length; i++) {
        !aMap[a[i]] ? aMap[a[i]] = 1 : aMap[a[i]]++;
    }

    for (let i = 0; i < b.length; i++) {
        !bMap[b[i]] ? bMap[b[i]] = 1 : bMap[b[i]]++;
    }

    // console.log(aMap, bMap)

    for (let i = 0; i < abCombo.length; i++) {
        console.log(aMap[abCombo[i]])
        let aValue = !aMap[abCombo[i]] ? 0 : aMap[abCombo[i]];
        let bValue = !bMap[abCombo[i]] ? 0 : bMap[abCombo[i]];
        count += Math.abs(aValue - bValue);
    }


    // for (let [key, value] of Object.entries(aMap)) {
    //     !bMap[key] ? count += value : Math.abs(aMap[key] - bMap[key]);

    // }
    // for (let [key, value] of Object.entries(bMap)) {
    //     if (!aMap[key]) count += value;
    // }

    return count;
}

console.log(makingAnagrams(a, b));