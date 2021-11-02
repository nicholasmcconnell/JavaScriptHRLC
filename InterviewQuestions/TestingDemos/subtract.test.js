const subtract = require('./subtract');

test('properly subtracts arguments', () => {
    expect(subtract(10, 5)).toBe(5);
})