
const s = '02:05:45AM'

function timeConversion(s) {
    // Write your code here
    let amPm = s.charAt(s.length - 2);
    if (amPm === 'P') {
        if (s.slice(0, 2) === '12') {
            return s.substring(0, s.length - 2);
        }
        let pmHour = parseInt(s.slice(0, 2)) + 12;
        let removePm = s.substring(2, s.length - 2);
        let newTime = pmHour.toString().concat(removePm);
        return newTime;
    } else if (amPm === 'A' && s.slice(0, 2) === '12') {
        let removeTwelve = s.substring(2, s.length - 2);
        return '00'.concat(removeTwelve);

    } else {
        let removeAm = s.substring(0, s.length - 2);
        return removeAm;
    }
}

console.log(timeConversion(s));