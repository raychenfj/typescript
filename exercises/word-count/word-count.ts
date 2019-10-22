export default class Words {
  count(words: string): Map<string, number> {
    const map: Map<string, number> = new Map()
    words = words.replace(/\s+/g, ' ').trim()
    const array: Array<string> = words.split(' ')
    for (let item of array) {
      item = item.toLocaleLowerCase()
      map.set(item, map.has(item) ? <number>map.get(item) + 1 : 1)
    }
    return map
  }
}
