const fib = {
sequence: [0,1],
nextNum(){
  let answer = "" + this.sequence[this.sequence.length-1] + " + " + this.sequence[this.sequence.length-2] + " = " + 
(this.sequence[this.sequence.length-1] + this.sequence[this.sequence.length-2])
return answer;
}
}