function BankAccount(customerName, balance = 0) {
    this.customerNme = customerName;
    this.accountNumber = Date.now();
    this.balance =balance;
    
    
    //VARIABLE ------> PROPERTIES
    //FUNCTION ------> METHOD
    //***********DEPOSITE FUNCTION*************/
    this.deposit = function(amount){
        // this.balance = this.balance + amount;
        //shortcut
        this.balance += amount;
    }

    //***********WITHDRAW ARROW FUNCTION*******/
    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}
//every single object take some memory
const maryamAccount = new BankAccount('maryam khan', 1000);
const ahmedAccount = new BankAccount('ahmed azhar',);

     maryamAccount.balance = 5000;
     //call method
     maryamAccount.deposit(5000);
     ahmedAccount.deposit(5000);
     maryamAccount.withdraw(2000);
console.log(maryamAccount, ahmedAccount);
     



//================DOM MANIPULATION WORK=================//
//create default array
const acccout = [];
const accountForm = document.querySelector('#accountform');
const customerName = document.querySelector('#customeName');
const balance = document.querySelector('#balance');


accountForm.addEventListener('submit',(e) => {
    e.preventDefault();
    //we add + sign beacause balance data type is string so convert the string into integer we add + sign
    const account = new BankAccount(customerNme.value , +balance.value);
    console.log(customerName.value ,balance.value);
    account.push(account);
    console.log(accounts);

});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
        );
        account.deposit(+amount.value);
        console.log(accounts)
})


//=======================PROTOTYPE=======================//
function BankAccount(customerName , balance = 0){
    
    this.customerNme = customerName;
    this.accountNumber = Date.now();
    this.balance =balance;
   
    // this.deposit = function(amount){
    // this.balance += amount;
    // }

    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // }
}
const maryamAccount = new BankAccount('maryam khan');
// const ahmedAccount = new BankAccount("ahmed", 1000);
// console.log(maryamAccount,ahmedAccount);


BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.protype.withdraw = (amount) => {
    this.balanace -= amount;
}
maryamAccount.deposit();

console.log(maryamAccount);
