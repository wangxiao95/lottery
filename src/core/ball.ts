interface Range {
  start: number
  end: number
}

interface Result {
  red: number[]
  blue: number
}

class Ball {
  baseBlue: number
  baseRed: number[]
  redCount: number = 6
  blueCount: number = 1

  constructor(red: number[] = [], blue: number = null) {
    this.baseBlue = blue
    this.baseRed = red
  }

  getRandomNum(range: Range): number {
    const {start, end} = range

    return Math.floor(Math.random() * end + start)
  }

  getBlue(): number {
    if (this.baseBlue) {
      return this.baseBlue
    }
    //TODO
    return this.getRandomNum({start: 1, end: 16} as Range)
  }

  getRed(): number[] {
    const result: number[] = this.baseRed
    const len: number = this.redCount - result.length
    for (let i = 0; i < len; i++) {
      const num = this.getRandomNum({start: 1, end: 33} as Range)
      if (result.some(item => item === num)) {
        return this.getRed()
      }
      result.push(num)
    }
    return result
  }

  outputResult(): Result {
    return {
      red: this.getRed().sort((a, b) => a - b),
      blue: this.getBlue()
    }
  }
}

const shuangSeQiu: Function = function (red: number[] = [], blue: number = null): Result {

  const ball: Ball = new Ball()

  const result: Result = ball.outputResult()

  return result
}

export default shuangSeQiu