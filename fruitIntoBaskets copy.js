
const totalFruit = (tree) => {
    const types = new Map();
    let amt = 0, lo = -1;
    for (x of tree) {
        types.has(x) ? types.set(x, types.get(x) + 1) : types.set(x, 1);
        console.log('1', types)
        while (2 < types.size) {
            types.set(tree[++lo], types.get(tree[lo]) - 1);
            if (types.get(tree[lo]) === 0) {
                types.delete(tree[lo]);
            }
            console.log('2', types);
        }
        amt = Math.max(amt, [...types.values()].reduce((s, c) => s + c, 0));
        
    }
    return amt;
};