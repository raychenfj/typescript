type IGrade = string | number
type IRoster = Map<IGrade, Array<string>>

export default class GradeSchool {
  private _roster: IRoster = new Map()

  constructor() {
    this._roster.get = () => []
  }

  _get(key: IGrade) {
    return Map.prototype.get.call(this._roster, key)
  }

  addStudent(name: string, grade: IGrade): void {
    grade = grade.toString()
    if (!this._roster.has(grade)) {
      this._roster.set(grade, [])
    }
    const names = this._get(grade)
    names!.push(name)
    names!.sort()
  }

  studentRoster(): IRoster {
    return this._roster
  }

  studentsInGrade(grade: IGrade): Array<string> {
    grade = grade.toString()
    const names = this._get(grade)
    return names ? [...names] : []
  }
}
