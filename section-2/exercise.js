var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'David',
    bankAccount: bankAccount,
    hobbies: ['Cycling', 'cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
