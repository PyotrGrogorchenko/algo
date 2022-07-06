// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  const rating = new Array(n).fill(0)
  trust.forEach(v => {
    rating[v[0] - 1]--
    rating[v[1] - 1]++
  })
  for (let i = 0; i < rating.length; i++) {
    if (rating[i] === n - 1) return ++i
  }  
  return -1
}

console.log(findJudge(2, [[1,2]]))
console.log(findJudge(3, [[1,3],[2,3]]))
console.log(findJudge(3, [[1,3],[2,3],[3,1]]))
