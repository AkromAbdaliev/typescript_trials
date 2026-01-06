abstract class Shape {
  constructor(public colour: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(
    public radius: number,
    colour: string,
  ) {
    super(colour);
  }

  override render(): void {
    console.log('Rendering a circle');
  }
}

let circle = new Circle(12, 'Orange');
circle.render();
