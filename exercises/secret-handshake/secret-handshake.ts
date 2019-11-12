export default class HandShake {
  private _binary: string = ''
  private _commands: string[] = []

  constructor(num: number) {
    this._binary = num.toString(2)

  }

  commands(): string[] {
    const commands = [this._wink, this._doubleBlink, this._closeYourEyes, this._jump, this._reverse]

    Array.from(this._binary).reduceRight((_, cur, index, array) => {
      if (cur === '1') {
        commands[array.length - 1 - index]()
      }
      return ''
    }, '')

    return this._commands
  }

  _wink = () => {
    this._commands.push('wink')
  }

  _doubleBlink = () => {
    this._commands.push('double blink')
  }

  _closeYourEyes = () => {
    this._commands.push('close your eyes')
  }

  _jump = () => {
    this._commands.push('jump')
  }

  _reverse = () => {
    this._commands.reverse()
  }
}
