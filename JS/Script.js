/*var firstName = 'Ana';
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
var year, yearAna, yearElias;
now = 2018;
ageAna = 41;
ageElias = 48;

//Math Operators

yearAna = now - 41;
yearElias = now - 48;

console.log(yearAna);

console.log(now * 3);
console.log(now + 45);
console.log(now / 10);

//Logical Operators
var anaOlder = ageAna < ageElias
console.log(anaOlder);

// type of Operators
console.log(typeof anaOlder);
console.log(typeof ageAna);
console.log(typeof 'Elias is older than Ana');

var x;
console.log(typeof x);

//Operator precedence
var now = 2018;
var yearAna = 1977;
var fullAge = 41;

//Multiple operators
var isFullAge = now - yearAna >= fullAge;
console.log(isFullAge);

//Grouping
var ageAna = now - yearAna;
var ageElias = now - yearElias;
var average = (ageAna + ageElias) / 2;
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

massElias = 86;
heighElias = 182;
var eliasBMI = massElias / (heighElias * heighElias);
console.log(eliasBMI);

var bmiComparisson = eliasBMI <= akBMI;
console.log("Is Ana's BMI higher than Elias's? "+bmiComparisson);

//if-else statements
var firstName = 'Ana';
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

massElias = 86;
heighElias = 182;
var eliasBMI = massElias / (heighElias * heighElias);
console.log(eliasBMI);

if (eliasBMI > akBMI){
  console.log('Elias\'s BMI is higher than Ana\'s');
}else {
  console.log('Ana\'s BMI is higher than Elias\'s');
}

//Boolean Logic

var firstName = 'Oriana';
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

var firstName = 'Mariana';
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
var ageAna = calculateAge(1977);
var ageElias = calculateAge(1950);
var ageOri = calculateAge(1996);
console.log(ageAna, ageElias, ageOri);

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
yearsUntilretirement(1977,'Ana');
yearsUntilretirement(1950, 'Elias');
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