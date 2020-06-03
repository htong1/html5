const fib = {
  sequence: [0, 1],
  nextNum() {
    let answer = "" + this.sequence[this.sequence.length - 1] + " + " + this.sequence[this.sequence.length - 2] + " = " +
      (this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2])
    return answer;
  },
  next() {
    return (this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2]);
  },

  grow() {
    this.sequence.push(this.next())
  },

  lastNum() {
    let answer = "" + (this.sequence[this.sequence.length - 2] + this.sequence[this.sequence.length - 3]) + "=" +
      (this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2]) + " - " + this.sequence[this.sequence.length - 2]
    return answer;
  },

  shrink() {
    if (this.sequence.length > 2) {
      this.sequence.pop(this.next())
    }
  },

  previous() {
    return (this.sequence[1] - this.sequence[0])
  },

  growDown() {
    this.sequence.unshift(this.previous())
  },

  shrinkUp() {
    this.sequence.shift()
  },

  goldenRatio() {
    if (this.sequence.length > 2) {
      return (this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2]) / this.sequence[this.sequence.length - 1]
    }
  }

}