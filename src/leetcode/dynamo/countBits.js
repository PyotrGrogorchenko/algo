// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const res = [0]
  let offset = 1
  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i
    res.push(1 + res[i - offset])
  }
  return res
}

console.log(countBits(2))
console.log(countBits(5))
console.log(countBits(8))
