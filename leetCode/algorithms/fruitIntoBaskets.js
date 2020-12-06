
// const totalFruit = (tree) => {
//     let [i, j, max] = [0, 0, 0]

//     class Counter {
//         constructor() {
//             this.map = new Map();
//         }

//         add(k) {
//             if (this.map.has(k)) {
//                 this.map.set(k, this.map.get(k) + 1);
//             } else {
//                 this.map.set(k, 1);
//             }
//         }

//         remove(k) {
//             const val = this.map.get(k) - 1;
//             console.log('val', val, 'k', k)
//             if (val) {
//                 this.map.set(k, val);
//                 console.log('if', this.map)
//             } else {
//                 this.map.delete(k);
//                 console.log('else', this.map)
//             }
//         }

//         get size() {
//             return this.map.size;
//         }

//         get sum() {
//             console.log('in get sum', Array.from(this.map.values()).reduce((acc, cv) => { return acc + cv }), this.map)
//             return Array.from(this.map.values()).reduce((acc, cv) => { return acc + cv });
//         }
//     }
//     const count = new Counter();
//     while (j < tree.length) {
//         count.add(tree[j++]);
//         // console.log(count)
//         while (count.size > 2) {
//             console.log('i', i, count)
//             count.remove(tree[i++])
//         }
//         max = Math.max(max, count.sum);
//         console.log('max', max);
//     }
//     return max;
// }

const totalFruit = (tree) => {
    const types = new Map();
    let amt = 0, lo = -1;
    
    for(const x of tree){
        types.has(x) ? types.set(x, types.get(x) + 1) : types.set(x, 1);

        while(types.size > 2){
            types.set(tree[++lo], types.get(tree[lo]) -1);
            if(types.get(tree[lo]) === 0){
                types.delete(tree[lo]);
            }
            console.log(types)
        }
        amt = Math.max(amt, [...types.values()].reduce((acc, cv) => acc + cv))
    }

    return amt;
};
const tree = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];

console.log(totalFruit(tree));