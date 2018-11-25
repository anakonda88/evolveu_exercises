
import ak from './sum';
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(ak.sum(1, 2)).toBe(3);
});
test('adds 1 + 2 + 1 to equal 4', () => {
  expect(ak.add(1, 2, 1)).toBe(4);
});
test('adds 1 + 2 + 1 to equal 4', () => {
  expect(ak.add(1, 2, 1)).toBe(4);
});
console.log(ak);
