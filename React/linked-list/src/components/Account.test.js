import ak from './Account.js';

test ('deposit_withdraw_account',() => {
  let x = new ak.Account(25, 'checkingAccount');
  x.balance();
  x.deposit(10);
  expect(x.balance()).toBe(35, 'checkingAccount')
  console.log(x.balance());
  x.withdraw(30);
  expect(x.balance()).toBe(5, 'checkingAccount')
  console.log(x.balance());
})
