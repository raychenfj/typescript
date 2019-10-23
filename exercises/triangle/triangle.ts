export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    private _isTriangle(): boolean {
        return this.sides.every(side => side > 0) &&
            this.sides[0] + this.sides[1] > this.sides[2] &&
            this.sides[0] + this.sides[2] > this.sides[1] &&
            this.sides[1] + this.sides[2] > this.sides[0]

    }

    kind(): string {
        if (!this._isTriangle()) {
            throw new Error("illegal triangle")
        }
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
            return "equilateral"
        }
        if (this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2]) {
            return "isosceles"
        }
        return "scalene"
    }
}
