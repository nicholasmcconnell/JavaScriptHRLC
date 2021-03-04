const name = "aseead";
const typed = "aaasiseead";


var isLongPressedName = function (name, typed) {
    if (name === typed) return true;

    let n = name.split('')
    let t = typed.split('')

    let i = 0;
    let j = 0;
    while (i < t.length) {
        if (n[i] === t[j]) {
            i++;
            j++;
            continue;
        }
        console.log('22222', i, n[i], j, t[j])
        if (t[j] === t[j - 1]) {
            console.log('splice', t.splice(j - 1, 1), t)
            continue;
        }
        i++;
    }
    console.log(n, t)
    return n.join('') === t.join('') ? true : false;
};

console.log(isLongPressedName(name, typed))