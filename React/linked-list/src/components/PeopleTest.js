import ak from './People';

// test('people_birthday', () => {
//   let  = new ak.People('Jossie', 34, 100);
//   expect(pBirthday.Birthday().toBe('Jossie', 36, 100)
// })

test('people_show', () => {
  let newPeople= new ak.People('Jossie', 34, 100);
  expect(newPeople.show()).toBe('Jossie 34 100');

  newPeople = new ak.People('Josephine', 25, 100);
  expect(newPeople.show()).toBe('Josephine 26 100');
})
