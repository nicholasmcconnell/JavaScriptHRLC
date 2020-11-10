const arr = [1,1,0,-1,-1];

function plusMinus(arr) {
  
    let totalsHash = {
        'pos' : 0,
        'neg' : 0,
        'zero' : 0
    };

   arr.map((cv, i) => {
        if (Math.sign(cv) === 1){
            totalsHash['pos']++
        } else if(Math.sign(cv) === -1) {
            totalsHash['neg']++
        } else {
            totalsHash['zero']++
        }
    })

    for (const [key, value] of Object.entries(totalsHash)){
        console.log((value/arr.length).toFixed(6))
    }
}

console.log(plusMinus(arr));