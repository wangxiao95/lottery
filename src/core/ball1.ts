class Ball1 {
  start: number
  end: number

  constructor() {

  }

  getNum(): number {
    return Math.floor(Math.random() * this.end + this.start)
  }
}

export default Ball1