
import ak from './linkList';


test('test play', () => {
  let p = new ak.LinkList();
  expect(p.play('home')).toBe('home')
})

test('test blank', () => {
  let b = new ak.LinkList('first');
  expect(b.show()).toBe('first')
})

test('test node', () => {
  let c = new ak.LinkList('another value');
  expect(c.show()).toBe('another value')
})

test('test show', () => {
  let d = new ak.LinkList('another');
  expect(d.show()).toBe('another')
})
test('test add', () => {
  let b = new ak.LinkList('second');
  expect(e.add()).toBe('first')

})
