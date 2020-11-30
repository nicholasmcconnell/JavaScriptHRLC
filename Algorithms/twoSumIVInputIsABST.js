const root = [5, 3, 6, 2, 4, null, 7];
const k = 9;

const findTarget = (root, k) => {
    const sorted = [];
    
    const inorder = node => {
        if(!node) return;
        
        inorder(node.left);
        
        sorted.push(node.val);
        console.log('sorted', sorted)
        
        inorder(node.right);
    };
    
    inorder(root);
    
    for(let i = 0; i < sorted.length-1; i++) {
        for(let j = sorted.length-1; j > i; j--) {
            if(sorted[i] + sorted[j] === k) {
                return true;
            }
        }
    }
    
    return false;
}

console.log(findTarget(root, k))