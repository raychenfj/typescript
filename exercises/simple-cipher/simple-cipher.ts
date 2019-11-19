const aCharCode = "a".charCodeAt(0);
const zCharCode = "z".charCodeAt(0);
class SimpleCipher {
  constructor(public key: string = "") {
    if (!this.key) {
      const length = 100 + Math.round(Math.random() * 100);
      while (this.key.length < length) {
        this.key += String.fromCharCode(
          aCharCode + Math.floor(Math.random() * 26)
        );
      }
    }
  }

  encode(input: string): string {
    let output = "";
    let keyLength = this.key.length;
    for (let i = 0, len = input.length; i < len; i++) {
      output += String.fromCharCode(
        aCharCode +
          ((input.charCodeAt(i) +
            this.key.charCodeAt(i % keyLength) -
            2 * aCharCode) %
            26)
      );
    }
    return output;
  }

  decode(input: string): string {
    let output = "";
    let keyLength = this.key.length;
    for (let i = 0, len = input.length; i < len; i++) {
      let code = input.charCodeAt(i) - this.key.charCodeAt(i % keyLength);
      output += String.fromCharCode(
        code >= 0 ? aCharCode + code : zCharCode + 1 + code
      );
    }
    return output;
  }
}

export default SimpleCipher;
