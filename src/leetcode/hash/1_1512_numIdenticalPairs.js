// https://leetcode.com/problems/number-of-good-pairs/submissions/ 
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const frequencies = []
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    frequencies[nums[i]] = frequencies[nums[i]] || 0
    res += frequencies[nums[i]]++
  }
  return res
}

console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,1,1,1]))
