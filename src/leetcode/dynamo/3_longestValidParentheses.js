/**
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesDP = function(s) {
  let res = 0
  const dp = new Array(s.length).fill(0)

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2
      }
      res = Math.max(res, dp[i])
    }
  }  

  return res
}

var longestValidParenthesesL = function(s) {
  let res = 0, l = 0, r = 0

  for (let i = 0; i < s.length; i++) {
    s[i] === ')' ? r++ : l++
    if (l === r) res = Math.max(res, r * 2)
    else if (r >= l) l = r = 0
  }  
  
  l = r = 0
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] === ')' ? r++ : l++
    if (l === r) res = Math.max(res, r * 2)
    else if (r <= l) l = r = 0
  }  

  return res
}

console.log(longestValidParenthesesL('(()'))
console.log(longestValidParenthesesL('((())'))
console.log(longestValidParenthesesL('(((((()))))'))
