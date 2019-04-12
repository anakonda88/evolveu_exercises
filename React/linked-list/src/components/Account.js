class Account extends Object{
  constructor (startingBalance, accountName){
    super();
    this.startingBalance = parseInt(startingBalance);
    this.accountName = accountName;
  }
  balance(){
    return this.startingBalance;
  }
  deposit(amount){
    return this.startingBalance = this.startingBalance + amount;
  }
  withdraw(amount){
    return this.startingBalance = this.startingBalance - amount;
  }

}
export default{Account};
