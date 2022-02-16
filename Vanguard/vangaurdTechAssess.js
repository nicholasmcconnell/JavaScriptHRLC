function fizzBuzz(n) {
    // Write your code here

}
const n = 15;

function fizzBuzz(n) {
    let arr = new Array(n);
    console.log(typeof arr);

    for (let index = 1; index < n; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log('FizzBuzz');
        } else if (index % 3 === 0) {
            console.log('Fizz');

        } else if (index % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(index);
        }
    }
}


fizzBuzz(n);

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

const devicenames = ["mixer", "toaster", "mixer", "tv"]

function deviceNamesSystem(devicenames) {

    for (let i = 0; i < devicenames.length; i++) {

        if (devicenames.filter((item, index) => devicenames.indexOf(item) != index)) {
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