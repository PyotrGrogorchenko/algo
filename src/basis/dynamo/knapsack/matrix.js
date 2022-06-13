const printArr = arr => {
  console.log('//print\\\\')
  arr.forEach(row => console.log(row.reduce((p, c) => p += ' ' + (c ? c : '-') + ' ', '')))
}

const matrix = (weights, costs, sizeWeight) => {

  const makeMatrix = () => {
    const matrix = []
    for (let i = 0; i <= weights.length; i++) {
      matrix.push(new Array(sizeWeight).fill(null))
    }
  
    for (let i = 0; i <= weights.length; i++) {
      for (let j = 0; j <= sizeWeight; j++) {
        if (i === 0 || j === 0) {
          matrix[i][j] = 0
          continue
        } 
        if (j >= weights[i - 1]) {
          matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i - 1][j - weights[i - 1]] + costs[i - 1])
        } else {
          matrix[i][j] = matrix[i - 1][j]
        }
      }
    }
  
    return matrix
  }

  const trace = (matrix, i, j, res) => {
    if (matrix[i][j] === 0) {
      return
    }
    if (matrix[i - 1][j] === matrix[i][j]) {
      trace(matrix, i - 1, j, res)
    } else {
      trace(matrix, i - 1, j - weights[i - 1], res)
      res.push({ w: weights[i - 1], c: costs[i - 1]})
    }
  }
  
  const matrix = makeMatrix()
  printArr(matrix)
  const res = []
  trace(matrix, weights.length, sizeWeight, res)
  
  return res
}

console.log(matrix([5, 2, 6, 4, 3], [3, 1, 5, 6, 8], 10))
console.log(matrix([3, 4, 5, 8, 9], [1, 6, 4, 7, 6], 13))
