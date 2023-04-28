const fun1 = require('../components/fun1');

test('subtract 5 - 2 to equal 3', () => {
  expect(fun1(5, 2)).toBe(7);
});
