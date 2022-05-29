// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let l = 0, r = 0
  
  while (r < t.length && l < s.length) {
    if (s[l] === t[r]) l++
    r++
  }
  return l === s.length
}

console.log(isSubsequence('abc', 'ahbgdc')) // true
console.log(isSubsequence('axc', 'ahbgdc')) // false
