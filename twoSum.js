const nums = [2,7,11,15];
const target = 9;

const twoSums = (nums, target) => {
    const remainderMap = {};
    const solution = [];

    //if remainder >0 &&< 9  check hm heys for remainder 
    //if in hm - return that hm value(index) and current(value)
    // if not push to hashmap - key(value) : value,(index)

    nums.forEach((e, i) => {
        let remainder = target-e;

        console.log('line14', remainderMap[remainder], remainder, i)
        
        if((remainder > 0) && remainderMap[remainder] !== undefined){
            // console.log('success')
           return (i, remainderMap[remainder]);
        } else if (remainder > 0 && !remainderMap[remainder]){
            console.log('in elseif')
            remainderMap[e] = i;
        }
    });

}

console.log(twoSums(nums, target))