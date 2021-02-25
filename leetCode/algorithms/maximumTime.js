const time = "0?:3?"

const maximumTime = (time) => {
    let strArr = time.split('');

    if (strArr[0] === '?') strArr[0] = '0123?'.includes(strArr[1]) ? '2' : '1';
    console.log('1111111')
    if (strArr[1] === '?') strArr[1] = (strArr[0] === '1' || strArr[0] === '0') ? '9' : '3';
    console.log('22222')
    if (strArr[3] === '?') strArr[3] = '5';
    console.log('3333333')
    if (strArr[4] === '?') strArr[4] = '9';
    console.log('444444')

    return strArr.join('');
};

console.log(maximumTime(time))

