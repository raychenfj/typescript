export default class Pangram {
  constructor(private sentence: string) { }

  isPangram(): boolean {
    const set: Set<string> = new Set()

    for (let char of this.sentence) {
      if (char.match(/[a-z]/gi)) {
        set.add(char.toLocaleLowerCase())
      }
    }

    return set.size === 26
  }
}
