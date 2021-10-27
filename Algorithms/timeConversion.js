
const s = '10:05:45AM'

function timeConversion(s) {
    // Write your code here
    let amPm = s.slice(-2);
    let hour = parseInt(s.slice(0, 2));
    let tail = s.slice(2, s.length - 2);
    console.log(hour)
    if (amPm === 'PM') {
        if (hour === '12') {
            return hour + tail;
        }
        let pmHour = hour + 12;

        // let newTime = pmHour.toString().concat(removePm);
        return pmHour + tail;
    } else if (amPm === 'AM' && hour === 12) {
        let removeTwelve = s.substring(2, s.length - 2);
        return '00' + tail;
    } else {
        ;
        return hour + tail;
    }
}

console.log(timeConversion(s));
