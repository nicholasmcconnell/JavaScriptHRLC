const groupThePeople = (arr) => {
    //if !groups[i] - add it
    //if groups[i] && groups[i].length < v -> then add --> 
    //else if groups[i] && groups[i].length = v then groups[0+i] start new group
    let groups = {};

    for (const [i, v] of arr.entries()) {
        // if(!groups[v]){
        //     groups[v] = [i];
        // } else if (groups[v]){
        //     groups[v].push(i)
        // }
        !groups[v] ? groups[v] = [i] : groups[v].push(i);
    }
    console.log(groups)

    // groups[3] = [2,2]
    // groups[3].push(4)

    // console.log(groups[3].length)
    // let arr2 = arr.splice(0, Math.ceil(arr.length / 2));
    // console.log(arr, arr2)

    //     var array1 = [0, 1, 2, 3, 4, 5, 6];
    // var array2 = array1.splice(0, Math.ceil(array1.length / 2));

}

const arr = [3, 3, 3, 3, 3, 1, 3];

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