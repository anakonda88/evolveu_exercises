import ak from './MyMath';


test('add function',() => {
  expect(ak.add(1, 2)).toBe(3);
  expect(ak.add(12, 235)).toBe(247);
  expect(ak.add(-12, 235)).toBe(223)
})
test('subst function',() => {
  expect(ak.subt(2, 1)).toBe(1);
  expect(ak.subt(12, 235)).toBe(-223);
  expect(ak.subt(12, -235)).toBe(247)
})
test('mult function',() => {
  expect(ak.mult(2, 1)).toBe(2);
  expect(ak.mult(22, -1)).toBe(-22);
  expect(ak.mult(-2, -1)).toBe(2);
})
test('odd_even function',() => {
  expect(ak.odd_even(10)).toBe('Even');
  expect(ak.odd_even(111)).toBe('Odd');
})
test('add_sum',() => {
  expect(ak.sum(10, 2)).toBe(12);
  expect(ak.sum(-12, 235)).toBe(223);
  expect(ak.sum(15, 425)).toBe(440)
})
test('mathfunction',() => {
  expect(ak.myMath('add', 3, 4)).toBe(7);
  expect(ak.myMath('subt', 3, 4)).toBe(-1);
  expect(ak.myMath('mult', 3, 4)).toBe(12);
})
test ('lookup',() => {
  expect(ak.lookup(1)).toBe('one');
  expect(ak.lookup(2)).toBe('two');
  expect(ak.lookup(3)).toBe('three')
})
test('mathfunction2', () =>{
  expect(ak.math2('add', 3, 6)).toBe(9);
  expect(ak.math2('subt', 3, 6)).toBe(-3);
  expect(ak.math2('mult', 3, 6)).toBe(18);
  expect(ak.math2('odd_even', 3)).toBe('Odd');
  expect(ak.math2('odd_even', 22)).toBe('Even');
})
