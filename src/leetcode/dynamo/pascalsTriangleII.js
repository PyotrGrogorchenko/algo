// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const triangle = [[1]]
  if (rowIndex === 0) return triangle[0]
  triangle.push([1, 1])
  
  for (let i = 1; i < rowIndex; i++) {
    const prev = triangle[i]
    const cur = []
    for (let j = 0; j < prev.length - 1; j++) cur.push(prev[j] + prev[j + 1])
    triangle.push([1, ...cur, 1])
  }
  return triangle[triangle.length-1] 
}

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(5))
