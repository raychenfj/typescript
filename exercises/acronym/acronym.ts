export default class Acronym {
  public static parse(phrase: string): string {
    phrase = phrase.trim()
    let acronym: string = ''
    for (let i = 0, len = phrase.length; i < len; i++) {
      if (i == 0) {
        acronym += phrase[i].toLocaleUpperCase()
        continue
      }
      if (phrase[i] === ' ' || phrase[i] === '-') {
        acronym += phrase[i + 1].toLocaleUpperCase()
        continue
      }
      if (phrase[i - 1] !== ' ' && phrase[i].match(/[A-Z]/g)) {
        acronym += phrase[i].toLocaleUpperCase()
        continue
      }
      if (phrase[i] === ':') {
        break
      }
    }
    return acronym
  }
}
