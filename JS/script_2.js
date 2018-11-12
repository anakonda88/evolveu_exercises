//Function constructor
//
// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher',
// };
//
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   // this.calculateAge = function(){
//   //   console.log(2018 - this.yearOfBirth);
// }
//   Person.prototype.cityOfBirth = 'Canmore';
//   Person.prototype.calculateAge =
//   function(){
//     console.log(2018 - this.yearOfBirth);
//   }
//
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1987, 'accountant');
// var mark = new Person('Mark', 1970, 'police officer')
// jane.calculateAge();
// john.calculateAge();
// mark.calculateAge();
//
// console.log(john.cityOfBirth);
// console.log(jane.cityOfBirth);
// console.log(mark.cityOfBirth);
// console.log(jane);

//Object.create
var personProto = {
  calculateAge: function(){
    console.log(2018 - this.yearOfBirth);
  }
};
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
  name: { value: 'Jane'},
  yearOfBirth: { value: 1987},
  job: { value: 'accountant'}
});

//Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
  name: 'Ana',
  city: 'Caracas'
};
function change(a,b){
  a = 30;
  b.city = 'Villahermosa';
}
change(age, obj);
console.log(age);
console.log(obj.city);

//Challenge #7
(function(){
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  Question.prototype.displayQuestion =
  function(){
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++){
      console.log(i + ':' + this.answers[i]);
    }

  }
  Question.prototype.checkAnswer =
  function(ans){
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Try again!');
    }
  }
  var q1 = new Question('do you have kids?', ['Yes', 'No'], 0);
  var q2 = new Question('what is the name of your dog?', ['Sasha', 'Yaki',
                        'Motica'], 2);
  var q3 = new Question('where are you from?' ['Caracas', 'Maturin', 'Maracay',
                        'Maracaibo'], 1);

  var questions = [q1, q2, q3];
  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();
  var answer = parseInt(prompt('Please enter the correct answer.'));
  questions[n].checkAnswer(answer);
})();
