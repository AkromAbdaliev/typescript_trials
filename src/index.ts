let tuple: [number, string] = [77, 'Cyberpunch'];

// use const for optimize enum
const enum Size {
  Small = 1,
  Medium,
  Large,
}

// use annotation for return types
function calculateTax(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}
