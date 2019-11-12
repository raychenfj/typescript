export default class Clock {
  private _hour: number = 0
  private _minute: number = 0

  constructor(hour: number, minute: number = 0) {
    this._init(hour, minute)
  }

  get hour() {
    return this._hour
  }

  get minute() {
    return this._minute
  }

  _init(hour: number, minute: number) {
    this._minute = minute % 60
    const carry = Math.floor(minute / 60)
    this._hour = (hour + carry) % 24

    if (this._minute < 0) {
      this._minute = 60 + this._minute
    }
    if (this._hour < 0) {
      this._hour = 24 + this._hour
    }
  }

  plus(minute: number): this {
    this._init(this._hour, this._minute + minute)
    return this
  }

  minus(minute: number): this {
    return this.plus(-minute)
  }

  toString() {
    const hour: string = this._hour > 9 ? `${this._hour}` : `0${this._hour}`
    const minute: string = this._minute > 9 ? `${this._minute}` : `0${this._minute}`
    return `${hour}:${minute}`
  }

  equals(clock: Clock) {
    return this._hour === clock.hour && this._minute === clock.minute
  }
}
