const candles = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];

const birthdayCakeCandles = (candles) => {

    candles.sort((a,b) => a-b);

    let max = candles[candles.length-1];

    return(candles.filter((cv) => cv === max).length);
}

console.log(birthdayCakeCandles(candles));