// let tuple: [number, string] = [77, 'Cyberpunch'];

// // use const for optimize enum
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// // use annotation for return types
// function calculateTax(income: number): number {
//   if (income < 50_000) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// let person: {
//   readonly id: number;
//   name: string;
//   born: Date;
// } = { id: 1, name: 'John Smith', born: new Date() };

// OOP
class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error('Invalid amount');
    this.balance += amount;
  }
}

let account = new Account(12, 'Akrom', 0);
account.deposit(5000000);
console.log(`Your balance: ${account.balance}`);
