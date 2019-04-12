import React, { Component } from 'react';
import ak from './Account';

class AccountComp extends Component{
  constructor(){
    super();
    this.state = {
      myAccount: new ak.Account()
    }
  }

  newDeposit = () => {
    console.log('newbalance');
    let amount = document.getElementById('amount').value;
    console.log(amount);
    this.state.myAccount.deposit(amount)
    document.getElementById('balance').innerHTML = this.state.myAccount.balance();
    // let result = document.getElementById('result');
    // result.innerHTML = ak.deposit(parseInt(amount));

  }
render() {
  return (
    <div className ="accountBalc">
      <h2>Checking Account</h2>
      <br/>
      Amount: <input id='amount' type='text'></input>
      <br/>


      <button onClick={this.newDeposit}>Deposit</button>

      <br/>

      <div id='balance' ></div>
      <br/>
    </div>
  );
}

}
export default AccountComp;
