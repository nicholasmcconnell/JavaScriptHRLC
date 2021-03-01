let num = 14;
const isUgly = () => {
    if (num === 1) {
        return true;
    } else if (num <= 0) {
        return false;
    }

    while (num > 5) {
        if (num % 5 === 0) num = num / 5
        else if (num % 3 === 0) num = num / 3
        else if (num % 2 === 0) num = num / 2
        else return false;
    }
    return true;
}

console.log(isUgly(num))