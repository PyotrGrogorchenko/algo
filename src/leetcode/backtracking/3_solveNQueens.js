// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = []
  
  const col = []  
  const diagL = []  
  const diagR = []  
  const board = []
  
  const queens = (row = 0) => {
    
    if (row === n) {
      res.push([...board])
      return
    }
    
    for (let column = 0; column < n; column++) {
      if (!col[column] && !diagL[column + row] && !diagR[row - column + (n - 1)]) {
      
        const resItem = new Array(n).fill('.')
        resItem[column] = 'Q'
        board[row] = resItem.join('')
        
        col[column] = diagL[column + row] = diagR[row - column + (n - 1)] = 1
        queens(row + 1)
        col[column] = diagL[column + row] = diagR[row - column + (n - 1)] = 0
        board[row] = null
      }
    }
  }

  queens()

  return res
}

console.log('n=1')
console.log(solveNQueens(1))
console.log('n=2')
console.log(solveNQueens(2))
console.log('n=3')
console.log(solveNQueens(3))
console.log('n=4')
console.log(solveNQueens(4))
console.log('n=5')
// console.log(solveNQueens(5))
// console.log('n=6')
// console.log(solveNQueens(6))
// console.log('n=7')
// console.log(solveNQueens(7))
// console.log('n=8')
// console.log(solveNQueens(8))
