function add(num1,num2) {
  return num1 + num2;
}

function subst(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function odd_even(num1) {
  if(num1 % 2 == 0){
    return 'even';
  }
    else {
      return 'odd';
    }
}


export default {add, subst, mult, odd_even};
