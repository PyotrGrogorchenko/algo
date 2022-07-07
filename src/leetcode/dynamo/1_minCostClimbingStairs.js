// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  cost.push(0)
  for (let i = 0; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1] || 0, cost[i - 2] || 0)
  }
  return cost[cost.length - 1]
}

console.log(minCostClimbingStairs([10,15,20])) // 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])) // 6
