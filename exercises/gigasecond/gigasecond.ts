export default class Gigasecond {
  constructor(private _date: Date) {
    _date.setMilliseconds(this._date.getMilliseconds() + 1e9 * 1000)
   }

  date(): Date {
    return this._date
  }
}
