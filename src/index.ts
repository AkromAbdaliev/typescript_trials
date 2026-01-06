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
// class Account {
//   readonly id: number;
//   owner: string;
//   balance: number;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount: number) {
//     if (amount <= 0) throw new Error('Invalid amount');
//     this.balance += amount;
//   }
// }

// let account = new Account(12, 'Akrom', 0);
// account.deposit(5000000);
// console.log(`Your balance: ${account.balance}`);
// console.log(account instanceof Account);

// console.log(account.constructor.name);

// let variable: string = '12345';
// console.log((variable as string).length);
// const num = Number(variable);
// console.log(num);

// class Person {
//   protected name!: string;

//   constructor();
//   constructor(name: string);
//   constructor(name?: string) {
//     if (name) this.name = name;
//   }
//   public getName(): string {
//     return this.name;
//   }

//   public setName(name: string): void {
//     this.name = name;
//   }
// }

// class Student extends Person {}

// const student = new Student('Mike');
// console.log(student.getName());

// let person = new Person();
// person.setName('Jonh');
// console.log(person.getName());

class Student {
  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number,
  ) {}

  public deposit(amount: number) {
    if (amount <= 0) {
      throw new Error('Invalid amount');
    }
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
}

let student = new Student(12, 'John Doe', 0);
student.deposit(120000);
console.log(`John Doe's balance $${student.balance}`);
