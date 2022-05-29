// https://leetcode.com/problems/n-queens-ii/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = 0
  
  const col = new Set()
  const diagL = new Set()
  const diagR = new Set()

  const queens = (r = 0) => {
    if (r === n) {
      res++
      return 
    }

    for (let c = 0; c < n; c++) {
      if (col.has(c) || diagL.has(c + r) || diagR.has(c - r)) continue

      col.add(c)
      diagL.add(c + r)
      diagR.add(c - r)

      queens(r + 1)

      col.delete(c)
      diagL.delete(c + r)
      diagR.delete(c - r)
    }

  }
  
  queens()
  return res
}

console.log(totalNQueens(1))
console.log(totalNQueens(2))
console.log(totalNQueens(3))
console.log(totalNQueens(4))
console.log(totalNQueens(5))
console.log(totalNQueens(6))
console.log(totalNQueens(7))
console.log(totalNQueens(8))
