const cloneArray = require('./cloneArray');

test('correctly clones new array', () => {
    const testArr = [1, 2, 3];

    expect(cloneArray(testArr)).toEqual(testArr);
    expect(cloneArray(testArr)).not.toBe(testArr);
})