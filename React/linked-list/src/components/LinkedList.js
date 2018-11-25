class Node {
  constructor(subject, amount){
    this.subject = subject;
    this.amount = amount;
    this.forwardNode = null;

  }
}

class LinkedList {
  constructor(subject, amount) {
    //super();
    this.head = new Node(subject, amount);

  }


  show(){
  //const head = new Node('First', 10);
  let x = this.head;
  let tmp = ''
  while(x.forwardNode){
    tmp += x.subject + ' ' + x.amount + ' ';
    console.log(tmp);
    x = x.forwardNode;
    }
  console.log(x);
  return tmp;

  
    // return 'First 10';
  }
  add(subject, amount){
    x = this.head;
    while (x.forwardNode){
      x = x.forwardNode
    }
    x.forwardNode = new Node(subject, amount);
  }
}

export default {LinkedList};
