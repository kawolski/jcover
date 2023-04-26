const diff = require('../components/diff');

test('subtract 5 - 2 to equal 3', () => {
  expect(diff(5, 2)).toBe(3);
});
