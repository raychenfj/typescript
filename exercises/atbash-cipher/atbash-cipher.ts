export default class AtbashCipher {
  encode(str: string) {
    let result = ''
    let part = ''
    for (let i = 0, len = str.length; i < len; i++) {
      const c = str[i]
      if (c.match(/[a-z]/gi)) { // letters
        part += String.fromCharCode('z'.charCodeAt(0) - c.toLowerCase().charCodeAt(0) + 'a'.charCodeAt(0))
      } else if (c.match(/[0-9]/gi)) { // numbers
        part += c
      }
      if (part.length === 5 || i === len - 1) { // group the text
        if (result) {
          result += ' ' + part
        } else {
          result = part
        }
        part = ''
      }
    }
    return result
  }

  decode(str: string) {
    let result = ''
    for (let c of str) {
      if (c.match(/[a-z]/gi)) { // letters 
        result += String.fromCharCode('a'.charCodeAt(0) + 'z'.charCodeAt(0) - c.toLowerCase().charCodeAt(0))
      } else if (c.match(/[0-9]/gi)) { // numbers
        result += c
      }
    }
    return result
  }
}
