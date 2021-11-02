const sum = require('./sum.js');

test('properly add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
})