export default function transform(old: { [key: string]: string[] }) {
  const values: { [key: string]: number } = {}
  for (const score in old) {
    const letters = old[score]
    for (const letter of letters) {
      values[letter.toLocaleLowerCase()] = +score
    }
  }

  return values
}
