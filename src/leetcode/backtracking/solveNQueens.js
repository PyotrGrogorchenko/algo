// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = []
  
  const col = []
  const diagL = []
  const diagR = []

  const queens = (row, startColumn, res) => {
    for (let column = startColumn; column < n; column++) {
      if (col[column] || diagL[column + row] || diagR[row - column + (n - 1)]) continue
      
      col[column] = diagL[column + row] = diagR[row - column + (n - 1)] = 1
      
      const resItem = new Array(n).fill('.')
      resItem[column] = 'Q'
      res.push(resItem.join(''))
      queens(row + 1, 0, res)
    }
}

  for (let i = 0; i < n; i++) {
    col.length = 0
    diagL.length = 0
    diagR.length = 0
  
    const res = []
    queens(0, i, res)
    console.log(res)
    if (res.length === n) result.push(res)
  }

  return result
}

// console.log(solveNQueens(1))
console.log(solveNQueens(2))
// console.log(solveNQueens(3))
// console.log(solveNQueens(4))
// console.log(solveNQueens(8))