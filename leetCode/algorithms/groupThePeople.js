const groupThePeople = (arr) => {
    //if !groups[i] - add it
    //if groups[i] && groups[i].length < v -> then add --> 
    //else if groups[i] && groups[i].length = v then groups[0+i] start new group
    let groups = {};
    let answerArr = [];
  
    for (const [i, v] of arr.entries()) {
        if (!groups[v]) {
            groups[v] = [i]
            if (groups[v].length === v) {
                answerArr.push(groups[v])
                groups[v] = [];
            }
        } else if (groups[v]) {
            groups[v].push(i)
            if (groups[v].length === v) {
                answerArr.push(groups[v])
                groups[v] = [];
            }
        }
    };
  
      console.log(groups, answerArr)
    return answerArr;
}



const arr = [3,3,3,3,3,1,3];

console.log(groupThePeople(arr));

 //loop through and use filter to return i's of the same value 
    //remove those i's from the original arr
    //add the new filtered array too output array which will be a matrix.
    // let arrCopy = arr.slice();
    // let groups = [];

    // for (let [index, v] of arrCopy.entries()) {
    //     let group = [];
    //     group.push(index);
    //     console.log('1', group)
    //     // arrCopy.shift(index)
    //     let newArr = arrCopy.filter((cv, i) => {
    //         while (group.length < v) {
    //             if (cv === v) {
    //                 group.push(i);
    //                 // arrCopy.shift(i)
    //             }
    //         }
    //         console.log('2', index)
    //         return;
    //     })
    //     index = i+1;
    //     groups.push(group);
    //     console.log('arrcopy', arrCopy)
    //     console.log('newarr', newArr);
    // }