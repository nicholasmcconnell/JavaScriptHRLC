let num = 1101057;
//9288

const maxDiff = (num) => {

    if (num < 10) {
        return 8;
    }

    let numArr = num.toString().split('');

    const firstNum = (numArr) => {
        let firstArr = numArr.slice();
        let y = '9';
        let x;

        if (firstArr[0] === '9') {
            x = firstArr.find(e => e !== '9')
        } else {
            x = firstArr[0];
        }
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] === x) {
                firstArr[i] = y;
            }
        }
        return parseInt(firstArr.join(''));
    }

    const secondNum = (numArr) => {
        const secondArr = numArr.slice();
        let x, y;
        let z = true;

        for (const number of numArr) {
            if (number !== '1') {
                z = false;;
            }
        }

        if (z === true) {
            return parseInt(secondArr.join(''));
        }

        if (secondArr[0] === '1') {
            let j;
            y = '0';
            for (let i = 1; i < secondArr.length; i++) {
                if (secondArr[i] !== '1' && secondArr[i] !== '0') {
                    x = secondArr[i];
                    j = i;
                    break;
                }
            }

            for (let i = j; i < secondArr.length; i++) {
                if (secondArr[i] === x) {
                    secondArr[i] = y;
                }
            }

            return parseInt(secondArr.join(''));
        }

        if (secondArr[0] !== '1') {
            x = secondArr[0];
            y = '1';
            for (let i = 0; i < secondArr.length; i++) {
                if (secondArr[i] === x) {
                    secondArr[i] = y;
                }
            }
            return parseInt(secondArr.join(''));
        }
    }
    console.log(firstNum(numArr), secondNum(numArr))
    return Math.abs(firstNum(numArr) - secondNum(numArr))
}

console.log(maxDiff(num));

 // for (let i = 0; i < secondArr.length; i++) {
        //     // if (secondArr[0] === '1' && secondArr[0] !== secondArr[1]) {
        //     //     x = secondArr[1]
        //     //     y = '0';
        //     //     break;
        //     // }
        //     if (secondArr[0] === '1') {
        //         secondArr[1] === '0';
        //         return parseInt(secondArr.join(''));
        //     } else if (secondArr[0] !== '1') {
        //         secondArr[0] === '1';
        //         return parseInt(secondArr.join(''));

        //     }
        //     if (secondArr[i] !== secondArr[i + 1] && secondArr[i] !== '9') {
        //         x = secondArr[i];
        //         y = '0';
        //         if(i===0){
        //             y='0'
        //         }
        //         break;
        //     } else {
        //         x = secondArr[i]
        //         y = '1'
        //         break;
        //     }
        // }
        // console.log(x,y)
        // for (let i = 0; i < secondArr.length; i++) {
        //     if (secondArr[i] === x) {
        //         secondArr[i] = y;
        //     }
        // }
        // return parseInt(secondArr.join(''));
