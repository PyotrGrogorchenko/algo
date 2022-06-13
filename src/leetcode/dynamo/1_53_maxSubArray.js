// https://leetcode.com/problems/maximum-subarray/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
  let maxSum = nums[0]
  let curSum = 0

  for (let i = 0; i < nums.length; i++) {
    curSum = Math.max(0, curSum)
    curSum += nums[i]
    maxSum = Math.max(curSum, maxSum)
  }

  return maxSum
}

console.log(maxSubArray([-2]))
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
