
class People extends Object {
  constructor(name, age, dollars){
    super();
    this.name = name;
    this.age = parseInt(age);
    this.dollars = parseInt(dollars);
  }

  birthday(){
    this.age = this.age + 1;
  }

  show(){
    return this.name + ', ' +
            this.age + ', ' +
            this.dollars
  }
}

class Family extends Object {
  constructor(){
    super();
    this.listOfPeople = [];
    this.length = 0;

  }

  addPeople(name, age, dollars){
    let tmpPeople = new People(name, age, dollars);

    this.listOfPeople.push(tmpPeople)
  }
  addAge(){
    let total = 0;
    var i;
    for(i=0; i<this.listOfPeople.length;i++){
      total += this.listOfPeople[i].age;
      console.log(this.listOfPeople[i]);
    }
    return total
  }

  show(){
    var i;
    let tmpStr = '';

    for(i=0;i<this.listOfPeople.length;i++){
     //  let idxPlusOne = (i + 1).toString();
    //   tmpStr += idxPlusOne + ' ' + this.listOfPeople[i].show() + '\n';
      tmpStr += this.listOfPeople[i].show() + '\n';
    }
    console.log(tmpStr);
    return tmpStr
  }
  addBirthday(){
    var i;
  //  let total = 0;
    for(i=0; i<this.listOfPeople.length; i++){
      this.listOfPeople[i].birthday();
      console.log(this.listOfPeople[i]);
    }

  }
}
export default{People, Family};
