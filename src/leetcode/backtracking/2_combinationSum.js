// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = []  

  const dfs = (i, cur, sum) => {
    
    if (sum > target || i >= candidates.length) return
    if (sum === target) {
      res.push(cur)
      return
    }

    cur.push(candidates[i])
    dfs(i, [...cur], sum + candidates[i])
    cur.pop()
    dfs(i + 1, [...cur], sum)

  }

  dfs(0, [], 0)
  return res
}

console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5], 8))
console.log(combinationSum([2], 1))
