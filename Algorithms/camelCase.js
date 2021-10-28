const s = 'saveChangesInTheEditor';

function camelcase(s) {
    // Write your code here

    let sArr = s.split('');

    return sArr.filter(letter => letter === letter.toUpperCase()).length + 1;

}

console.log(camelcase(s));