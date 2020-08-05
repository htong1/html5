class Difference {
  maximumDifference = 0;
  constructor(elements){
  this.elements = elements;
  }

  computeDifference(){
  let max = this.elements[0];
  let min = this.elements[0];
  for(let i = 0; i < this.elements.length; i++){
    if(max < this.elements[i]){
      max = this.elements[i];
    }

    if(min > this.elements[i]){
      min = this.elements[i];
    }
  }
  this.maximumDifference = max - min;
  }
}