let num = 9288;
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
        
        if(firstArr[0] === '9'){
            x = firstArr.find(e => e !== '9')
         } else {
             x = '9';
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
        
      for (let i = 0; i < secondArr.length; i++) {
            if (secondArr[i] !== secondArr[i+1] && secondArr[i] !== '9') {
                x = secondArr[i];
                y = '0';
                break;
            } else {
                x = secondArr[i]
                y ='1'
                break;
            }
        }
     for(let i = 0; i < secondArr.length; i++){
         if(secondArr[i] === x){
             secondArr[i] = y;
         }
     }
        return parseInt(secondArr.join(''));
    }
    return Math.abs(firstNum(numArr)-secondNum(numArr))
}

console.log(maxDiff(num));
