// https://leetcode.com/problems/sum-of-all-subset-xor-totals/
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  const sum = (i, cur) => {
    if (i === nums.length) return cur
    return sum(i + 1, cur) + sum(i + 1, cur^nums[i])
  }
  return sum(0, 0)
}

var subsetSum = function(nums) {
  const sum = (i, cur) => {
      if(i === nums.length) return cur
      return sum(i + 1, cur) + sum(i + 1, cur + nums[i])
  }
  return sum(0, 0)
}

console.log(subsetSum([1,3]))
console.log(subsetSum([5,1,6]))
console.log()
console.log(subsetXORSum([1,3]))
console.log(subsetXORSum([5,1,6]))
console.log(subsetXORSum([3,4,5,6,7,8]))