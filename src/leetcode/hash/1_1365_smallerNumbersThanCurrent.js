/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const res = []
  const hash = []
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] || 0
    hash[nums[i]]++ 
  }

  hash[0] = hash[0] || 0
  for (let i = 1; i < hash.length; i++) {
    hash[i] = hash[i] || 0
    hash[i] += hash[i-1]
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      res.push(0)
      continue
    }
    res.push(hash[nums[i] - 1])
  }
  return res
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent([7,7,7,7]))
console.log(smallerNumbersThanCurrent([6,5,4,8]))
