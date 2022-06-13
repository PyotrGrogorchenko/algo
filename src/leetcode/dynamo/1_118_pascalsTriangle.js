// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = []
  if (numRows === 0) return triangle
  triangle.push([1])
  if (numRows === 1) return triangle
  triangle.push([1, 1])
  
  for (let i = 2; i < numRows; i++) {
    const prev = triangle[i - 1]
    const cur = []
    for (let j = 0; j < prev.length - 1; j++) cur.push(prev[j] + prev[j + 1])
    triangle.push([1, ...cur, 1])
  }
  return triangle
}

console.log(generate(0))
console.log(generate(1))
console.log(generate(2))
console.log(generate(5))