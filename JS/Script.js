/*var firstName = 'ariel';
console.log(firstName);

var lastName = 'Martinez';
var age = 41;

var fullAge = true;
console.log(fullAge);

var job, IsMarried;
job = "dentist";
isMarried = true;

console.log(firstName+' is '+ age +' years old '+ job + ' . is she married? '+ isMarried);
console.log(firstName + " " + lastName);
*/
/*******************************************
* Basic Operators
*/
var year, yearAriel, yearRonald;
now = 2018;
ageAriel = 41;
ageRonald = 48;

//Math Operators

yearAriel = now - 41;
yearRonald = now - 48;

console.log(yearAriel);

console.log(now * 3);
console.log(now + 45);
console.log(now / 10);

//Logical Operators
var arielOlder = ageAriel < ageRonald
console.log(arielOlder);

// type of Operators
console.log(typeof arielOlder);
console.log(typeof ageAriel);
console.log(typeof 'ronald is older than ariel');

var x;
console.log(typeof x);

//Operator precedence
var now = 2018;
var yearAriel = 1977;
var fullAge = 41;

//Multiple operators
var isFullAge = now - yearAriel >= fullAge;
console.log(isFullAge);

//Grouping
var ageAriel = now - yearAriel;
var ageRonald = now - yearRonald;
var average = (ageAriel + ageRonald) / 2;
console.log(average);

//Multiple Operators
var x, y;
x = y = (4 + 12) * 3 - 2;
console.log(x, y);

//More Operators
x *= 2;
console.log(x);

x+=10;
console.log(x);

x--;
console.log(x);

//First coding challenge

massAK = 64;
heighAK = 159;
var akBMI = massAK / (heighAK * heighAK);
console.log(akBMI);

massRonald = 86;
heighRonald = 182;
var ronaldBMI = massRonald / (heighRonald * heighRonald);
console.log(ronaldBMI);

var bmiComparisson = ronaldBMI <= akBMI;
console.log("Is ariel's BMI higher than ronald's? "+bmiComparisson);

//if-else statements
var firstName = 'ariel';
var civilStatus = 'married';

var isMarried = true;
if (civilStatus === 'single'){
  console.log(firstName + 'is single!');
}
else{
  console.log(firstName + ' is been married for 14 years');
}
//*******************

massAK = 64;
heighAK = 159;
var akBMI = massAK / (heighAK * heighAK);
console.log(akBMI);

massRonald = 86;
heighRonald = 182;
var ronaldBMI = massRonald / (heighRonald * heighRonald);
console.log(ronaldBMI);

if (ronaldBMI > akBMI){
  console.log('ronald\'s BMI is higher than ariel\'s');
}else {
  console.log('ariel\'s BMI is higher than ronald\'s');
}

//Boolean Logic

var firstName = 'Ori';
var age = 37;

if (age < 13){
  console.log(firstName + ' is a little girl');
}
else if (age >=13 && age < 20) {
  console.log(firstName + ' is a teenager');

}
else if (age >= 20 && age <30) {
  console.log(firstName + ' is a young adult');
}
else {
    console.log(firstName + ' is a woman');
  }

//The ternary operator and switch statements

var firstName = 'Mena';
var age = 4;

age >= 21 ? console.log(firstName + ' drinks rhum.')
: console.log(firstName + ' drinks water');

var drink = age >= 21? 'rhum' : 'water';
console.log(drink);

//Switch statements
var job = 'doctor'
switch(job){
  case 'teacher':
    console.log(firstName + ' teaches kids to read');
    break;
  case 'dentist':
    console.log(firstName + ' fix people\'s teeth');
  case 'designer':
    console.log(firstName + ' designs websites');
  default:
    console.log(firstName + ' does something else');
}

var firstName = 'Athena';
var age = 37;
switch(true){
  case age < 13:
    console.log(firstName + ' is a little girl');
    break;
  case age >=13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;
  case age >= 20 && age <30:
    console.log(firstName + ' is a young adult');
    break;
  default:
    console.log(firstName + ' is a woman');
  }

/*Truthy and falsy values and equality operators
falsy values: undefined, null, 0, '', NaN
truthy values: NOT falsy values */

var height;
if (height){
  console.log('Variable is defined');
}else {
  console.log('Variable has NOT been defined');
}
//Challenge #2

var jTeamAvg = (89 + 120 + 103) / 3;
var mTeamAvg = (116 + 94 + 123) / 3;
var maryTeamAvg = (97 + 134 + 105) / 3;
console.log(jTeamAvg, mTeamAvg, maryTeamAvg);
//
// if (jTeamAvg > mTeamAvg){
//   console.log('John\'s team has the highest average score ' + jTeamAvg);
// } else if (mTeamAvg > jTeamAvg){
//   console.log(' Mike\'s team has the highest average score ' + mTeamAvg);
// } else{
//   console.log('There is a draw');
// }
if (jTeamAvg > mTeamAvg && jTeamAvg > maryTeamAvg){
  console.log('John\'s team has the highest average score ' + jTeamAvg);
}
else if (mTeamAvg > jTeamAvg && mTeamAvg > maryTeamAvg){
  console.log('Mike\'s team has the highest average score ' + mTeamAvg);
}
else if (maryTeamAvg > jTeamAvg && maryTeamAvg > mTeamAvg){
  console.log('Mary\'s team has the highest average score ' + maryTeamAvg);
} else {
  console.log('There is a draw');
}
//Functions
function calculateAge(birthYear) {
  return 2018 - birthYear;
}
var ageAriel = calculateAge(1977);
var ageRonald = calculateAge(1950);
var ageOri = calculateAge(1996);
console.log(ageAriel, ageRonald, ageOri);

function yearsUntilretirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0){
    console.log(firstName + ' will retire in ' + retirement + ' years');
  }
  else {
    console.log(firstName + ' is already retired');
  }
}
yearsUntilretirement(1977,'ariel');
yearsUntilretirement(1950, 'ronald');
yearsUntilretirement(1996, 'Ori');

//Challenge #3

function tipCalculator(bill){
  var percentage;
  if (bill < 50){
    return bill * 20 / 100;
  }else if  (bill >= 50 && 200){
    return bill * 15 / 100;
  }else {
    return bill * 10 / 100;
  }
}

var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[2])]

var finalPayment = [bill[0] + tips[0],
                    bill[1] + tips[1],
                    bill[2] + tips[2]]
console.log(tips, finalPayment);

//Challenge #4
var aK = {
  fullName: "Ariel Garcia",
  mass: 64,
  heigh: 1.59,
  calculateBMI: function() {
    this.bmi = this.mass / (this.heigh * this.heigh);
    return this.bmi;
  }
}

var ronald = {
  fullName: 'Ronald McDonald',
  mass: 86,
  heigh: 1.82,
  calculateBMI: function() {
    this.bmi = this.mass / (this.heigh * this.heigh);
    return this.bmi;
  }
}
aK.calculateBMI();
ronald.calculateBMI();
console.log(aK, ronald);

if (aK.calculateBMI() > ronald.calculateBMI()) {
  console.log(aK.fullName + ' has a BMI of ' + aK.calculateBMI() +
   ' which is higher than ' + ronald.fullName + ' BMI');

} else if (ronald.bmi > aK.bmi){
  console.log(ronald.fullName + ' has a BMI of ' + ronald.calculateBMI() +
   ' which is higher than ' + aK.fullName + ' BMI');

} else {
  console.log('They have the same BMI');
}

//Loops and iteration
for (var i = 0; i < 20; i +=2){
  console.log(i);
}

var mena = ['Minerva', 'McDonald', 2002, 'student', 'daughter'];
for (var i = 0; i < mena.length; i++) {
  console.log(mena[i]);
}

//while Loop

var i = 0;
while (i < mena.length) {
  console.log(mena[i]);
  i+=2;
}

//continue and break statements
var mena = ['Minerva', 'McDonald', 2002, 'student', 'daughter'];
for (var i = 0; i < mena.length; i++) {
  if (typeof mena[i] !== 'string') continue;
  console.log(mena[i]);
}

for (var i = 0; i < mena.length; i++) {
  if (typeof mena[i] !== 'string') break;
  console.log(mena[i]);
}

//looping backwards

for (var i = mena.length - 1; i >= 0; i--) {
  console.log(mena[i]);
}

//challenge # 5
/*function tipCalculator(bill){
  var percentage;
  if (bill < 50){
    return bill * 20 / 100;
  }else if  (bill >= 50 && 200){
    return bill * 15 / 100;
  }else {
    return bill * 10 / 100;
  }
}

var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[2])]

var finalPayment = [bill[0] + tips[0],
                    bill[1] + tips[1],
                    bill[2] + tips[2]]
console.log(tips, finalPayment);*/

var ronald = {
  fullName: 'Ronald McDonald',
  bills: [1124, 548, 268, 180, 42],
  tipCalc: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++)
    {
      var percentagE;
      var bill = this.bills[i];

      if (bill < 50){
        percentagE = .2;
      } else if  (bill >= 50 && bill < 200){
        percentagE = .15;
      } else {
        percentagE = .1;
      }
      this.tips[i] = bill * percentagE;
      this.finalValues[i] = bill + bill * percentagE;
    }
  }
}



var ariel = {
  fullName: 'Ariel Garcia',
  bills: [77, 375, 110, 45],
  tipCalc: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++)
    {
      var percentagE;
      var bill = this.bills[i];

      if (bill < 100){
        percentagE = .2;
      } else if  (bill >= 100 && bill < 300){
        percentagE = .1;
      } else {
        percentagE = .25;
      }
      this.tips[i] = bill * percentagE;
      this.finalValues[i] = bill + bill * percentagE;
    }
  }
}

function calcAveg(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
ronald.tipCalc();
ariel.tipCalc();

ronald.average = calcAveg(ronald.tips);
ariel.average = calcAveg(ariel.tips);

console.log(ronald, ariel);

if (ronald.average > ariel.average){
  console.log(ronald.fullName +'\'s family pays higher tips with an avg of $ ' +
              ronald.average );
} else if (ariel.average > ronald.average) {
  console.log(ariel.fullName +'\'s family pays higher tips with an avg of $ ' +
              ariel.average );
}
