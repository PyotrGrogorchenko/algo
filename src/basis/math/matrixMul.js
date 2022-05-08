const matrixMul = (a, b) => {

  const res = [[], []]
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b[0].length; j++) {
      res[i][j] = 0
      for (let k = 0; k < a[0].length; k++) {
        res[i][j] += a[i][k] * b[k][j]
      }
    }
  }
  return res
}

const a = [
  [1, 2, 3],
  [3, 1, 2]
]

const b = [
  [1, 2],
  [3, 2],
  [1, 2]
]

console.log(matrixMul(a, b)) // [[10, 12], [8, 12]]
