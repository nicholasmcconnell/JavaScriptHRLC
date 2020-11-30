function fizzBuzz(n) {
    // Write your code here

}
const n = 15;

function fizzBuzz(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1)
    }
    for (const int of arr) {
        if (Number.isInteger(int / 3) && Number.isInteger(int / 5)) {
            console.log('FizzBuzz');

        }
        if (Number.isInteger(int / 3) && !Number.isInteger(int / 5)) {
            console.log('Fizz');

        }
        if (!Number.isInteger(int / 3) && Number.isInteger(int / 5)) {
            console.log('Buzz');

        }
        if (!Number.isInteger(int / 3) && !Number.isInteger(int / 5)) {
            console.log(int);
        }
    }
}

console.log(fizzBuzz(n));

//find min # of days for kelly to have solved more problems than sam kelly cannot surpass return -1;

const samDaily = 4;
const kellyDaily = 5;
const difference = 1;

function minNum(samDaily, kellyDaily, difference) {
    if (samDaily >= kellyDaily) {
        return -1;
    }

    let kellySolved = 0;
    let samSolved = difference;
    let days = 0;

    while (kellySolved <= samSolved) {

        days++;
        kellySolved += kellyDaily;
        samSolved += (samDaily);

    }

    return days;

}

// console.log(minNum(samDaily, kellyDaily, difference));

const devicenames = ["mixer","toaster","mixer","tv"] 

function deviceNamesSystem(devicenames) {

    for(let i=0; i < devicenames.length; i++) {

        if (devicenames.filter((item, index) => devicenames.indexOf(item) != index)){
            devicenames[i] = devicenames[i] + 1;
        }

    }
    console.log(devicenames)

}
// console.log(deviceNamesSystem(devicenames))



// 4      →  n = 4
// poke   →  text = ["poke","pkoe","okpe","ekop"]
// pkoe
// okpe
// ekop