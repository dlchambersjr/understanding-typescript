type BankAccount = { money: number, deposit: (value: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

type Myself = { name: string, bankAccount: BankAccount, hobbies: string[] };

let myself: Myself = {
  name: 'David',
  bankAccount: bankAccount,
  hobbies: ['Cycling', 'cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);
