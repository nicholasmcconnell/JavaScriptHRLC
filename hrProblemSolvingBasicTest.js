//1. i = 0
//2. * means swap previous 2 characters
//3. if 0 - find number first number with highs index value and put it in zero place 
//4. 

// work backwards through string

const s = '51Pa*0Lp*0e';

function decryptPassword(s) {
    // Write your code here
    //0. splite s to arr
    //1. loop backwards throughstring
    //2. 0 conditional => if 0 find highest index that is interger and move to 0's index 
    //3. * conditional => if '*' swap '*' index -1 with '*' index -2, remove star

    let arr = s.split('');
    let password = [];
    let passwordInts = [].reverse();
    
    for (const [index, int] of arr.entries()){
        // console.log(parseInt(int))
        if (parseInt(int)){
            passwordInts.push(int);
         } else {
            break;
        }
    }
    console.log('29', passwordInts, arr);

    for (let i = arr.length - 1; i >= 0; i--) {
        if (parseInt(arr[i]) === 0){
           [passwordInts[0], arr[i]] =  [arr[i], passwordInts[0]];
           passwordInts.shift(passwordInts[0])
           arr.shift(arr[0]);
           i++
       }

       if (arr[i] === '*'){
        //    console.log(i);
           [arr[i-1], arr[i-2]] = [arr[i-2], arr[i-1]]
        } 

    }

    for (let i =0; i < arr.length; i++){
        if(parseInt(arr[i]) > 0 || arr[i] !== '*'){
            password.push(arr[i]);
        }
    }

    return password.join('');
}

console.log(decryptPassword(s))