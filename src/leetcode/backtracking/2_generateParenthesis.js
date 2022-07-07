// https://leetcode.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = []
  const stack = []

  const generate = (left = 0, right = 0) => {
    if (left === n && right === n && left === right) {
      res.push(stack.join(''))
      return
    }
  
    if (left < n) {
      stack.push('(')
      generate(left + 1, right)
      stack.pop()
    }
    if (right < left) {
      stack.push(')')
      generate(left, right + 1)
      stack.pop()
    }
  }

  generate()
  return res
}

console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
