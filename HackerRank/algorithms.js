function solveMeFirst(a, b) {
  // Hint: Type return a+b below  
  return a + b; 
}

function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sum = 0;
for(let i = 0; i < ar.length; i++){
sum += ar[i];
}
return sum;
}

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
let points = [];
let score1 = 0;
let score2 = 0;
for(let i = 0; i < 3; i++){
if(a[i] > b[i]){
score1++
}

if(a[i] < b[i]){
score2++
}

if(a[i] === b[i]){
score1 = score1
score2 = score2
}
}
points.push(score1, score2);
return points;
}

function aVeryBigSum(ar) {
let sum = 0;
for(let i = 0; i < ar.length; i++){
    sum += ar[i];
}
return sum;
}


function diagonalDifference(arr) {
    // Write your code here
    let sum1 = arr[0][0] + arr[1][1] + arr[2][2];
    let sum2 = arr[0][2] + arr[1][1] + arr[2][0];
    let abs = Math.abs(sum1 - sum2);
    return abs;

}