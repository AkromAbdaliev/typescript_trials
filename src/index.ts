interface Person {
  name: string;
}

function echo<T extends number | string>(value: T): T {
  return value;
}

console.log(echo('Brad'));

function echo2<T extends Person>(value: T): T {
  return value;
}

let result = echo2({ name: 'Mike' });
console.log(result);
