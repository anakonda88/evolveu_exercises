function add(num1,num2) {
  return num1 + num2
}
console.log(add(2, 6));

function subst(num1, num2) {
  return num1 - num2
}

function mult(num1, num2) {
  return num1 * num2
}

function odd_even(num1, num2=0) {
  if(num1 % 2 === 0){
    return 'even'
  }
    else {
      return 'odd'
    }
}

let sum = add;
console.log('I am using a variable ', sum (2, 4));

function myMath(oper, num1, num2) {
  if (oper === 'add'){
    return add(num1, num2)
  } else if (oper === 'subst') {
      return subst(num1, num2)
    } else if (oper === 'mult') {
        return mult(num1, num2);
      }
};

const dict = {
  1: 'one',
  2: 'two',
  3: 'three'
}

function lookup(val){
  return dict[val];
};

const ops = {
  'add': add,
  'subst': subst,
  'mult': mult,
  'odd_even': odd_even
};

function math2(operation, num1, num2){
  return ops[operation](num1, num2)
}




export default {add, subst, mult, odd_even, sum, myMath, lookup, math2};
