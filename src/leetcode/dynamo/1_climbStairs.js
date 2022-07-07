// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const k = 2  
  const queue = [1]
  let res = 1

  for (let i = 1; i <= n; i++) {
    res = queue.reduce((prev, val) => prev += val , 0)
    queue.push(res)
    if (queue.length > k) queue.shift()
  }

  return res
}

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(9))
