// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n
  let a = 1, b = 1
  for (let i = 2; i < n; i++) {
    [a, b] = [b, b + a]
  }
  return b
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
