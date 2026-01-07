interface Animal {
  sex: string;
  eat(): void;
  sleep(): void;
}

interface Mammals extends Animal {
  milking(): void;
}

class Lion implements Mammals {
  constructor(public sex: string) {}

  milking(): void {
    console.log('Milking');
  }
  eat(): void {
    console.log('Eating meat');
  }
  sleep(): void {
    console.log('Sleeping');
  }
}

let mufassa = new Lion('male');
mufassa.eat();
