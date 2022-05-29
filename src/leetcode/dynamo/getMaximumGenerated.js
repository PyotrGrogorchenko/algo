// https://leetcode.com/problems/get-maximum-in-generated-array/

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n < 2) return n  

  const nums = [0, 1]
  let max = 1

  for (let i = 2; i <= n; i++) {
    nums.push(nums[Math.floor(i / 2)])
    if (i % 2 === 1) nums[i] += nums[Math.floor(i / 2) + 1]
    max = Math.max(max, nums[i])
  }
  return max
}

console.log(getMaximumGenerated(0))
console.log(getMaximumGenerated(1))
console.log(getMaximumGenerated(2))
console.log(getMaximumGenerated(3))
console.log(getMaximumGenerated(7))