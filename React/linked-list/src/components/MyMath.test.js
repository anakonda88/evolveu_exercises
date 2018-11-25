import ak from './MyMath';


test('add function',() => {
  expect(ak.add(1, 2)).toBe(3);
  expect(ak.add(12, 235)).toBe(247);
  expect(ak.add(-12, 235)).toBe(223)
})
test('subst function',() => {
  expect(ak.subst(2, 1)).toBe(1);
  expect(ak.subst(12, 235)).toBe(-223);
  expect(ak.subst(12, -235)).toBe(247)
})
test('mult function',() => {
  expect(ak.mult(2, 1)).toBe(2);
  expect(ak.mult(22, -1)).toBe(-22);
  expect(ak.mult(-2, -1)).toBe(2);
})
test('odd_even function',() => {
  expect(ak.odd_even(10)).toBe('even');
  expect(ak.odd_even(111)).toBe('odd');
})
