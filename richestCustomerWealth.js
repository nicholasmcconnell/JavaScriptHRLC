const accounts = [[1, 2, 3], [3, 2, 1]];

const maximumWealth = (accounts) => {
    let max=0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((acc,cv) => acc + cv);
        if(sum>max){
            max = sum;
        }
        
    }
    return(max);

}

console.log(maximumWealth(accounts));