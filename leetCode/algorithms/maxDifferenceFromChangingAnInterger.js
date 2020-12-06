let num = 555;

const maxDiff = (num) => {
    //conditionals
        //if num < 10 return 8 
    //split num to arry
    //1st number -> x = highest decimal place -> y = 9 in highest decimal place number position - just make largest dec = 9;
    //2nd number -> if num greater and 2nd highest decimal != highest decimal spot than x = 2nd highest dec place and y = 0, else x = num, y=1
        // if second dec != 1st than change to zero, else change it to 1.
    //1st > 2nd -> 1st - 2nd = dif else 2nd - 1st = dif
    let newNum = parseInt(num.toString().split(''))
    return newNum;

}

console.log(maxDiff(num));
