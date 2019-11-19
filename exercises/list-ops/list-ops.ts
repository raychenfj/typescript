export default class List<T> {
  constructor(public values: T[] = []) {}

  append(list: List<T>) {
    return new List([...this.values, ...list.values]);
  }

  concat(list: List<T> | List<List<T>>) {
    let values = [...this.values];
    for (let value of list.values) {
      if (value instanceof List) {
        values = [...values, ...value.values];
      } else {
        values = [...values, value];
      }
    }

    return new List(values);
  }

  filter(fn: (el: T) => boolean) {
    const values: T[] = [];
    for (let value of this.values) {
      if (fn(value)) {
        values.push(value);
      }
    }
    return new List(values);
  }

  length() {
    return this.values.length;
  }

  map(fn: (el: T) => any) {
    const values: any[] = [];
    for (let value of this.values) {
      values.push(fn(value));
    }
    return new List(values);
  }

  foldl(fn: (acc: any, el: T) => any, init: any) {
    let acc = init;
    for (let value of this.values) {
      acc = fn(acc, value);
    }
    return acc;
  }

  foldr(fn: (acc: any, el: T) => any, init: any) {
    let acc = init;
    for (let i = this.values.length - 1; i >= 0; i--) {
      const value = this.values[i];
      acc = fn(acc, value);
    }
    return acc;
  }

  reverse() {
    let values = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      values.push(this.values[i]);
    }
    return new List(values);
  }
}
