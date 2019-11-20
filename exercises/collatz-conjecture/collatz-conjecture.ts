class CollatzConjecture {
  static steps(n: number) {
    if (n === 0) {
      throw new Error('Only positive numbers are allowed')
    }
    if (n < 0) {
      throw new Error('Only positive numbers are allowed')
    }

    let step = 0
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2
      } else {
        n = 3 * n + 1
      }
      step++
    }

    return step
  }
}

export default CollatzConjecture
