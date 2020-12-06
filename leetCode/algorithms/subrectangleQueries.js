//make class subrectanglequeries - constructor takes rectangle as argument
//class methods
//update subrectangle - arguments - 2 matrix coordinates (assuming first comes before 2nd in the array) - up dates range in matrix with new galue
// for (var i = 0; i < cubes.length; i++) {
//     var cube = cubes[i];
//     for (var j = 0; j < cube.length; j++) {
//         display("cube[" + i + "][" + j + "] = " + cube[j]);
//     }
// }
//getValue - takes one matrix coordinate returns matrix value
//rectangle[x, y] - done.

["SubrectangleQueries", "getValue", "updateSubrectangle", "getValue", "getValue", "updateSubrectangle", "getValue", "getValue"]
let rectangle = [[1, 2, 1], [4, 3, 4], [3, 2, 1], [1, 1, 1]];
const coordinates = (0, 2);
// const update = [0,0,3,2,5],[0,2],[3,1],[3,0,3,2,10],[3,1],[0,2]]

class SubrectangleQueries {
    constructor(rectangle) {
        this.rectangle = rectangle;
    }

    updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let i = row1; i <= row2; i++) {
            let j;
            for (i===row1 ? j = col1 : j = 0; j <= col2; j++) {
                this.rectangle[i][j] = newValue;
            }
        }
    }

    getValue(row, col) {
        return this.rectangle([row][col])

    }
}

let test = new SubrectangleQueries(rectangle);

console.log(test.updateSubrectangle(2,0,3,1,'hi'));

    console.log(rectangle)

// var SubrectangleQueries = function (rectangle) {

// };


//  * @param {number} row1 
//  * @param {number} col1 
//  * @param {number} row2 
//  * @param {number} col2 
//  * @param {number} newValue
//  * @return {void}

SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {

};


//  * @param {number} row 
//  * @param {number} col
//  * @return {number}

SubrectangleQueries.prototype.getValue = function (row, col) {

};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */