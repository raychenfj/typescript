// type NameRegisterd = { [index: string]: string }

const nameRegistered: Set<string> = new Set()

export default class RobotName {
  private _name: string = ''
  private NAME_LENGTH = 5
  constructor() {
    this._randomName()
  }

  private _randomName(): string {
    let name = ''
    while (name.length < this.NAME_LENGTH) {
      if (name.length < 2) {
        name += String.fromCharCode("A".charCodeAt(0) + Math.round(Math.random() * 26))
      } else if (name.length < this.NAME_LENGTH) {
        name += (Math.round(Math.random() * 10)).toString()

        if (name.length === this.NAME_LENGTH) {
          if (nameRegistered.has(name)) {
            name = ''
          } else {
            nameRegistered.add(name)
          }
        }
      }
    }
    this._name = name
    return name
  }

  resetName() {
    this._randomName()
  }



  get name() {
    return this._name
  }
}
