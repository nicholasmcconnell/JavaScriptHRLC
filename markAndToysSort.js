const prices = [3,7,2,9,4];
const k = 15;

function maximumToys(prices, k) {
    //  prices.sort((a,b) => a-b)
     let toysArr =[];

     for(const price of prices){
        if(price > k) {
            break;
        } else {
            toysArr.push(price)
            k-=price;
        }
     }
     return toysArr.length;
}

console.log(maximumToys(prices, k))