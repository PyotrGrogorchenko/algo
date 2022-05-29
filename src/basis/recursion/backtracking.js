const queens = (n, row, col, diag1, diag2) => {
  if (!row) row = 0
  if (!col) col = new Array(n).fill(0)
  if (!diag1) diag1 = new Array(n * 2 - 1).fill(0)
  if (!diag2) diag2 = new Array(n * 2 - 1).fill(0)

  if (row === n) return 1

  let res = 0
  for (let column = 0; column < n; column++) {
    if (!col[column] && !diag1[column + row] && !diag2[row - column + n - 1]) {
      col[column] = diag1[column + row] = diag2[row - column + n - 1] = 1
      res += queens(n, row + 1, col, diag1, diag2)
      col[column] = diag1[column + row] = diag2[row - column + n - 1] = 0
    }
  }
  return res
}

// for (let n = 1; n <= 12; n++) {
//   console.log(n + '=', queens(n))
// }

console.log(queens(8))
// console.log(queens(4))
