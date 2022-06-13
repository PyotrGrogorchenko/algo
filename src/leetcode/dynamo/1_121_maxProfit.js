// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let l = 0, r = 1, max = 0

  while (r < prices.length) {
    if (prices[l] < prices[r]) max = Math.max(max, prices[r] - prices[l])
    else l = r
    r++
  }
  return max
}

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9])) // 9