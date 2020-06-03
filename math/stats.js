const max = function (numbers) {
  let m = numbers[0]
  for (let x = 1; x < numbers.length; x++) {
    if (m < numbers[x]) {
      m = numbers[x];
    }
  }
  return m;
}

const min = function (numbers) {
  let z = numbers[0]
  for (let f = 1; f < numbers.length; f++) {
    if (z > numbers[f]) {
      z = numbers[f];
    }
  }
  return z;
}

const range = function (numbers) {
  let h = numbers[0], b = numbers[0]
  for (let l = 1; l < numbers.length; l++) {
    if (h > numbers[l]) {
      h = numbers[l];
    }
    if (b < numbers[l]) {
      b = numbers[l]
    }
  }
  return b - h;
}

const mean = function (numbers) {
  let a = 0
  for (let o = 0; o < numbers.length; o++) {
    a += numbers[o];
  }
  return Math.round(a / numbers.length)
}

const median = function (numbers) {
  let sorted = numbers.sort()
  if (sorted.length % 2 === 0) {
    return ((sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2)
  } else {
    return (sorted[Math.floor(sorted.length / 2)])
  }
  return sorted;
}

const sort = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let min = numbers[i]
    for (let u = i + 1; u < numbers.length; u++) {
      if (numbers[u] < min) {
        min = numbers[u];
        index = u;
      }
    }

    if (index !== i) {
      [numbers[index], numbers[i]] = [numbers[i], numbers[index]];
    }
  }
  return numbers;
}

const IQR = function (numbers) {
let s = numbers.sort() 

}
