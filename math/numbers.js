const LCM = function (A, B) {
  for (let m = 1; ; m++) {
    if ((A * m) % B === 0) { return A * m }
  }
}

const EGCD = function (A, B) {
  if (A * B === 0) {
    return A + B;
  }
  if (A < B) {
    [A, B] = [B, A]
  }
  return EGCD(B, A % B)
}

const getGCD = function (num2, num3) {
  let cdmax = 1;
  for (let fAA = factor(num2), fAB = factor(num3); fAA.length > 0 && fAB.length > 0;) {
    if (fAA[fAA.length - 1] === fAB[fAB.length - 1]) {

      cdmax = fAA[fAA.length - 1]
      return cdmax;
    }
    if (fAA[fAA.length - 1] < fAB[fAB.length - 1]) {
      fAB.pop()

    } else {
      fAA.pop()

    }

  }
}

const factor = function (num) {
  let factors = [];
  for (let f = 2; f <= num; f++) {
    if (num % f === 0) {
      factors.push(f)
    }
  }
  return factors;
}
