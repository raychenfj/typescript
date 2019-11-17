type IMethod = (a: number, b: number) => number

type IOperators = {
  [index: string]: IMethod
}

const OPERATORS: IOperators = {
  plus: (a: number, b: number) => a + b,
  minus: (a: number, b: number) => a - b,
  multiplied: (a: number, b: number) => a * b,
  divided: (a: number, b: number) => a / b
}


function isOperand(word: string): boolean {
  return !!parseInt(word)
}

function isOperator(word: string) {
  return !!OPERATORS[word.toLowerCase()]
}

export class WordProblem {
  _operands: number[] = []
  _operators: IMethod[] = []
  constructor(private _question: string) {
  }

  answer() {
    const words = this._question.split(' ')

    let i = 0;
    while (i < words.length) {
      const word = words[i]
      if (i === 0 || i === 1) { // skip "what is"
        i++
        continue
      }

      if (isOperand(word)) {
        this._operands.push(parseInt(word))
        if (this._operands.length === 2) { // calculate in time
          const op2 = this._operands.pop()
          const op1 = this._operands.pop()
          const operator = this._operators.pop()
          if (op1 && op2 && operator) {
            this._operands.push(operator(op1, op2))
          } else {
            throw new ArgumentError()
          }
        }
        i++
      } else if (isOperator(word)) {
        this._operators.push(OPERATORS[word])
        if (word === 'multiplied' || word === 'divided') { // skip the "by" after multiplied / divided
          i += 2
          continue
        }
        i++
      } else {
        throw new ArgumentError()
      }
    }

    return this._operands[0]
  }
}

export class ArgumentError extends Error {
}
