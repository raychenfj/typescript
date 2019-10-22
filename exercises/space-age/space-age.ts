export default class SpaceAge {
  constructor(public seconds: number) { }

  private _onEarth(): number {
    return this.seconds / 31557600
  }

  private _toFixed(number: number, digit: number = 2): number {
    return +number.toFixed(digit)
  }

  onEarth(): number {
    return this._toFixed(this._onEarth())
  }

  onMercury(): number {
    return this._toFixed(this._onEarth() / 0.2408467)
  }

  onVenus(): number {
    return this._toFixed(this._onEarth() / 0.61519726)
  }

  onMars(): number {
    return this._toFixed(this._onEarth() / 1.8808158)
  }

  onJupiter(): number {
    return this._toFixed(this._onEarth() / 11.862615)
  }

  onSaturn(): number {
    return this._toFixed(this._onEarth() / 29.447498)
  }

  onUranus(): number {
    return this._toFixed(this._onEarth() / 84.016846)
  }

  onNeptune(): number {
    return this._toFixed(this._onEarth() / 164.79132)
  }
}
