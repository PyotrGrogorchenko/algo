// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (!matrix.length) return 0
  const m = matrix.length
  const n = matrix[0].length
  
  let res = 0
  const LIP = new Array(m).fill(0).map(_ => new Array(n).fill(0))

  const dfs = (i, j, prev) => {

    if (i < 0 || i === m
      || j < 0 || j === n
      || matrix[i][j] <= prev) { 
        return 0
      }
    if (LIP[i][j]) return LIP[i][j]


    let count = 1
    count = Math.max(count, 1 + dfs(i - 1, j, matrix[i][j]))
    count = Math.max(count, 1 + dfs(i + 1, j, matrix[i][j]))
    count = Math.max(count, 1 + dfs(i, j - 1, matrix[i][j]))
    count = Math.max(count, 1 + dfs(i, j + 1, matrix[i][j]))

    LIP[i][j] = count
    res = Math.max(res, count);    
    return count
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, -1)
    }
  }

  return res
}

// console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])) // 4
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])) // 4
// console.log(longestIncreasingPath([[1]])) // 1
