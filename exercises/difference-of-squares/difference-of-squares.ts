export default class Squares {
  public readonly squareOfSum: number = 0;
  public readonly sumOfSquares: number = 0;
  constructor(N: number) {
    for (let i = 1; i <= N; i++) {
      this.squareOfSum += i
      this.sumOfSquares += i ** 2
    }
    this.squareOfSum = this.squareOfSum ** 2
  }

  get difference () {
    return this.squareOfSum - this.sumOfSquares
  }
}
