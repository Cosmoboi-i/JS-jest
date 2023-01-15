const {largestEvenNum, largestEvenNumA} = require("./q1")

test('normal function', () => {
    expect(largestEvenNum([1, 2, 3])).toBe(2);
  });

test('normal function', () => {
    expect(largestEvenNumA([1, 2, 3])).toBe(2);
});

