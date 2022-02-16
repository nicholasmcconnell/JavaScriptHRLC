const migratoryBirds = require('./migratoryBirds');

test('returns smallest array value with greatest number of occurances', () => {
    const testArr = [1, 1, 1, 2, 2, 3, 4, 5, 5];

    expect(migratoryBirds(testArr)).toBe(2);
})