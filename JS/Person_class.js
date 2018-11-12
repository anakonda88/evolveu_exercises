
class Person6 {
  constructor(name, bankAmount, age){
    this.name = name;
    this.bankAmount = bankAmount;
    this.age = age;
  }
  birthday(){
    this.age += 1
};

class SomeJob extends Person6{
  constructor(name, bankAmount, age, payment){
    super(name, bankAmount, age);
    this.birthday = this.age++
  }
  annualPayment(){
    this.payment++;
      console.log(this.payment++);
    }
}
const elySomeJob = new Person('Ely', 0, 29, 1989, 100000);
