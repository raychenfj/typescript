export default class Rational {
  constructor(public numerator: number, public denominator: number) {
    if (this.numerator === 0) {
      this.denominator = 1;
    } else if (this.numerator > 0 && this.denominator < 0) {
      this.numerator = 0 - this.numerator;
      this.denominator = Math.abs(this.denominator);
    }
  }

  add(rational: Rational) {
    return new Rational(
      this.numerator * rational.denominator +
        rational.numerator * this.denominator,
      this.denominator * rational.denominator
    ).reduce();
  }

  sub(rational: Rational) {
    return new Rational(
      this.numerator * rational.denominator -
        rational.numerator * this.denominator,
      this.denominator * rational.denominator
    ).reduce();
  }

  mul(rational: Rational) {
    return new Rational(
      this.numerator * rational.numerator,
      this.denominator * rational.denominator
    ).reduce();
  }

  div(rational: Rational) {
    return new Rational(
      this.numerator * rational.denominator,
      this.denominator * rational.numerator
    ).reduce();
  }

  abs() {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    ).reduce();
  }

  exprational(n: number): Rational {
    if (n < 0) {
      return this.exprational(1 / Math.abs(n));
    }
    return new Rational(this.numerator ** n, this.denominator ** n).reduce();
  }

  expreal(x: number) {
    return Math.pow(
      10.0,
      Math.log10(Math.pow(x, this.numerator)) / this.denominator
    );
  }

  reduce() {
    let divisor = gcd(this.numerator, this.denominator);
    if (divisor !== 1) {
      return new Rational(this.numerator / divisor, this.denominator / divisor);
    }
    return this;
  }
}

function gcd(x: number, y: number) {
  if (x < y) {
    [x, y] = [y, x];
  }
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}
