
class LinkList{
  constructor(value){
    this.head = new Node(value, null)
  }
  play(value){
    console.log(value);
    return value;
  };
  show(){
    let x = this.head;
    while (x.next != null){
      console.log(x.value);
      x = x.next
    }
    return x.value;

  };

  // add(value){
  //   let x = this.head;
  //   while (x.next != null){
  //     x = x.next
  //   }
  //   x.next = new Node(value, null)
  //   return this.head;// que quiero lograr con esto?
  //

  // }

  larryOrder(){
    let x = this.head;
    while(x){
      console.log(x.order);
      x = x.next;
    }
    return x.order;

}


class Node{
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}
export default {LinkList};
