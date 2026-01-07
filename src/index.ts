class KeyValuePair<TKey, TValue> {
  constructor(
    public key: TKey,
    public value: TValue,
  ) {}
}

let pair = new KeyValuePair<string, string>('Predator', 'Tiger');
console.log(pair);
