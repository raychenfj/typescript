export default function accumulate<T>(collection: Array<T>, accumulator: (elem: T) => any): Array<any> {
  const result: Array<any> = []
  for (let elem of collection) {
    result.push(accumulator(elem))
  }
  return result
}

Array.prototype.map
