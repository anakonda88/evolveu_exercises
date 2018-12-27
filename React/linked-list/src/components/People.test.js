import ak from './People';

test('people_birthday', () => {
  let x = new ak.People('Jossie', 34, 100);
  x.birthday();
  expect(x.show()).toBe('Jossie, 35, 100')
  x.birthday();
  expect(x.show()).toBe('Jossie, 36, 100')
})

test('people_show', () => {
  let newPeople = new ak.People('Jossie', 34, 100);
  expect(newPeople.show()).toBe('Jossie, 34, 100');

  newPeople = new ak.People('Josephine', 26, 100);
  expect(newPeople.show()).toBe('Josephine, 26, 100');
})

let p = new ak.People('Katara', 24, 150);
let bff = p;

test('bff_birthday', () => {
  bff.birthday();
  expect(bff.show()).toBe('Katara, 25, 150')
  expect(p.show()).toBe('Katara, 25, 150')
})
test('add_People', () => {
  let x = new ak.Family();
  x.addPeople('Jossie', 34, 100);
  // expect(x.listOfPeople[0].show()).toBe('Jossie, 34, 100')
  console.log(x.listOfPeople[0]);
  x.addPeople('Josephine', 26, 100);
  expect(x.listOfPeople[1].show()).toBe('Josephine, 26, 100')
  console.log(x.listOfPeople[1]);
  x.addPeople('Jessica', 38, 150);
  expect(x.listOfPeople[2].show()).toBe('Jessica, 38, 150')
  expect(x.show()).toBe('Jossie, 34, 100\nJosephine, 26, 100\nJessica, 38, 150\n')

  // expect(x.show()).toBe('1 Jossie, 34, 100\n2 Josephine, 26, 100\n3 Jessica, 38, 150\n')
  console.log(x.listOfPeople[2]);
  console.log(x.listOfPeople);
})
test('add_age', () =>{
  let x = new ak.Family();
  x.addPeople('Jossie', 34, 100);
  x.addPeople('Josephine', 26, 100);
  x.addPeople('Jessica', 38, 150)
  expect(x.addAge()).toBe(98);
  console.log(x.addAge());


})
test('add_birthday', () => {
  let x = new ak.Family();
  x.addPeople('Jossie', 34, 100);
  x.addBirthday();
  expect(x.listOfPeople[0].show()).toBe('Jossie, 35, 100')
  //console.log(x.addBirthday());
})

test('add_and_show_people', () =>{

  let myArray = [ new ak.People('Jossie', 34, 100),
                new ak.People('Josephine', 26, 100),
                new ak.People('Jessica', 38, 150)];

  let total = 0;
  var i;
  for(i=0; i< myArray.length;i++){
    total += myArray[i].age;
    console.log(myArray[i]);
  }
  console.log(total);

  total = 0;
  for(i=0; i< myArray.length;i++){
    myArray[i].birthday();
    total += myArray[i].age;
    console.log(myArray[i]);
  }
  console.log(total);

  let x = myArray;
  x[1].birthday();
  expect(x[1].show()).toBe('Josephine, 28, 100')


  let me = new ak.People('Ana', 30, 200);
  let you = new ak.People('Larry', 40, 300);
  me.itMentor = you;
  expect(me.itMentor.show()).toBe('Larry, 40, 300')

  you.birthday();
  expect(you.show()).toBe('Larry, 41, 300')
  console.log(you);
  console.log(me);

  me.birthday();
  expect(me.show()).toBe('Ana, 31, 200')
  you.itMentor = new ak.People('Sandy', 37, 250);
  expect(you.itMentor.show()).toBe('Sandy, 37, 250')
  console.log(you);
  console.log(me);

  console.log(you.itMentor.name);
  console.log(you.itMentor.age);
  you.itMentor.birthday();
  expect(you.itMentor.show()).toBe('Sandy, 38, 250')
  console.log(you.itMentor);
})
