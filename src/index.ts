// Inheritance
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log('Walking');
  }

  talk() {
    console.log('Talking');
  }
}

class Policeman extends Person {
  constructor(
    public badgeNumber: number,
    firstName: string,
    lastName: string,
  ) {
    super(firstName, lastName);
  }

  makeArrest() {
    console.log('Making arrest');
  }
}

class Student extends Person {
  constructor(
    public studentNumber: number,
    firstName: string,
    lastName: string,
  ) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking test');
  }
}
class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

let teacher = new Teacher('John', 'Doe');
console.log(teacher.fullName);
