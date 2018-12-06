import ak from './Community';

test('show function', () => {
  let myCity = new ak.City('Caracas', 10.4806, -66.9036, 2082000);
  expect(myCity.show()).toBe('Caracas 10.4806 -66.9036 2082000');

  myCity = new ak.City('Cape Town', -33.9253, 18.4239, 3700000);
  expect(myCity.show()).toBe('Cape Town -33.9253 18.4239 3700000');
})

test('movedIn', () =>{
  let myCity = new ak.City('Cape Town', -33.9253, 18.4239, 3700000);
  myCity.movedIn(1000);
  expect(myCity.show()).toBe('Cape Town -33.9253 18.4239 3701000');

  myCity.movedIn(4000);
  expect(myCity.show()).toBe('Cape Town -33.9253 18.4239 3705000');
})

test('movedOut', () =>{
  let myCity = new ak.City('Cape Town', -33.9253, 18.4239, 3700000);
  myCity.movedOut(1000);
  expect(myCity.show()).toBe('Cape Town -33.9253 18.4239 3699000');

  myCity.movedOut(4000);
  expect(myCity.show()).toBe('Cape Town -33.9253 18.4239 3695000');

  myCity.movedOut(4000000);
  expect(myCity.show()).toBe('Cape Town -33.9253 18.4239 0');
})

test('howBig', () =>{
  let myCity = new ak.City('Calgary', 51.0486, -114.0708, 157700);
  expect(myCity.howBig()).toBe('City');

  myCity = new ak.City('Airdrie', 51.2917, -114.0144, 61581);
  expect(myCity.howBig()).toBe('Large town');

  myCity = new ak.City('Banff', 51.1784, -115.5708, 7800);
  expect(myCity.howBig()).toBe('Town');

  myCity = new ak.City('Spring Lake', 53.5184, -114.1408, 699);
  expect(myCity.howBig()).toBe('Village');

  myCity = new ak.City('Abee', 54.2389, -113.0221, 27);
  expect(myCity.howBig()).toBe('Hamlet');
})
test('whichHemisphere', () => {
  let myCity = new ak.City('Calgary', 51.0486, -114.0708, 157700);
  expect(myCity.whichHemisphere()).toBe('Northen Hemisphere');

  myCity = new ak.City('Cape Town', -33.9253, 18.4239, 3700000);
  expect(myCity.whichHemisphere()).toBe('Southern Hemisphere');
})

test('addCity', () => {
  let x = new ak.Community();
  x.addCity('Calgary', 51.0486, -114.0708, 157700);
  expect(x.listOfCities[0].show()).toBe('Calgary 51.0486 -114.0708 157700');
  x.addCity('Cape Town', -33.9253, 18.4239, 3700000);
  expect(x.listOfCities[1].show()).toBe('Cape Town -33.9253 18.4239 3700000');
})

test('getPopulation', () => {
  let x = new ak.Community();
  x.addCity('Calgary', 51.0486, -114.0708, 157700);
  expect(x.getPopulation()).toBe(157700);
  x.addCity('Cape Town', -33.9253, 18.4239, 3700000);
  expect(x.getPopulation()).toBe(3857700);
})

test('getMostNorthern', () => {
  let x = new ak.Community();
  x.addCity('Calgary', 51.0486, -114.0708, 157700);
  x.addCity('Cape Town', -33.9253, 18.4239, 3700000);
  x.addCity('Spring Lake', 53.5184, -114.1408, 699);
  expect(x.show(x.getMostNorthern()).show()).toBe('Spring Lake 53.5184 -114.1408 699');
})

test('getMostSouthern', () => {
  let x = new ak.Community();
  x.addCity('Caracas', 10.4806, -66.9036, 2082000);
  x.addCity('Barcelona', 41.3851, 2.1734, 1610000);
  x.addCity('Buenos Aires', -34.6037, -58.3816, 2890000);
  expect(x.show(x.getMostSouthern()).show()).toBe('Buenos Aires -34.6037 -58.3816 2890000');
  expect(x.show(x.getMostSouthern()).name).toBe('Buenos Aires');
  expect(x.show(x.getMostSouthern()).lat).toBe(-34.6037);
})

test('showIndex', () => {
  let x = new ak.Community();
  x.addCity('Calgary', 51.0486, -114.0708, 157700);
  expect(x.show(0).show()).toBe('Calgary 51.0486 -114.0708 157700');
  x.addCity('Barcelona', 41.3851, 2.1734, 1610000);
  expect(x.show(1).show()).toBe('Barcelona 41.3851 2.1734 1610000');
  x.addCity('Buenos Aires', -34.6037, -58.3816, 2890000);
  expect(x.show(2).show()).toBe('Buenos Aires -34.6037 -58.3816 2890000');
})
test('group test', () => {
  let x = new ak.Community();
  expect(x.getIndex()).toBe(null);
  expect(x.getCity().name).toBe(null);
  x.addCity('Caracas', 10.4806, -66.9036, 2082000);
  x.addCity('Barcelona', 41.3851, 2.1734, 1610000);
  x.addCity('Buenos Aires', -34.6037, -58.3816, 2890000);
  expect(x.getCity().name).toBe('Buenos Aires');
  x.first();
  expect(x.getCity().name).toBe('Caracas');
  expect(x.getIndex()).toBe(0);
  x.next();
  expect(x.getCity().name).toBe('Barcelona');
  expect(x.getIndex()).toBe(1);
  x.last();
  expect(x.getCity().name).toBe('Buenos Aires');
  expect(x.getIndex()).toBe(2);
  x.first();
  x.prev();
  expect(x.getCity().name).toBe('Buenos Aires');
  expect(x.getIndex()).toBe(2);
  x.reset();
  expect(x.getIndex()).toBe(null);
  expect(x.getCity().name).toBe(null);

})

//--------------------------------------
// test('playingWithPlaySeq', () => {
//   let x = new ak.PlaySeq();
//   expect(x.show()).toBe(0);
//   x.next();
//   expect(x.show()).toBe(1);
//   x.next();
//   x.next();
//   expect(x.show()).toBe(3);
//
//   let y = new ak.PlaySeq();
//   expect(y.show()).toBe(0);
//   y.next();
//   y.next();
//   expect(y.show()).toBe(2);
//   expect(x.show()).toBe(3);
//
//   x.first();
//   expect(x.show()).toBe(1);
//
//   x.quantity = 100;
//   expect(x.quantity).toBe(100);
//
//   x.addQuantity(100);
//   expect(x.quantity).toBe(200);
// })
//












// let myFav = new ak.City('Monterrey',  25.6866, -100.3161, 1136000);
// console.log(myFav);
//
// let c = myFav;
// console.log(c);
//
// myFav.movedIn(10000);
// console.log(myFav, c);
//
// let myFiveFav = [
//   new ak.City('Lisbon', 38.7223, -9.1393, 504718),
//   new ak.City('Barcelona', 41.3851, 2.1734, 1610000),
//   new ak.City('Kuala Lumpur', 3.1390, 101.6869, 1589000),
//   new ak.City('Buenos Aires', -34.6037, -58.3816, 2890000),
//   new ak.City('Bogota', 4.7110, -74.0721, 8081000)
// ];
// console.log(myFiveFav);
//
//
//
// let total = 0;
// var i;
// for(i=0; i< myFiveFav.length;i++){
//   total += myFiveFav[i].pop;
//   //console.log(myFiveFav[i].name, myFiveFav[i].pop, total);
// }
// console.log(total);
//
// var i;
// for(i=0; i<10; i++){
//   console.log(i);
// }
// for(let i=0; i<15; i++){
//   console.log(i);
// }
