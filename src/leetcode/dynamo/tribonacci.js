// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n < 2) return n
  if (n === 2) return 1

  let a = 0, b = 1, c = 1

  for (let i = 3; i <= n; i++) {
    [a, b, c] = [b, c, a + b + c]
  }
  return c
}

var tribonacciRecursion = function(n) {
  const recursion = num => {
    if (num < 2) return Math.max(num, 0)
    if (num === 2) return 1
    return recursion(num - 3) + recursion(num - 2) + recursion(num - 1)
  }
  return recursion(n)
}



console.log(tribonacci(0), tribonacciRecursion(0))
console.log(tribonacci(1), tribonacciRecursion(1))
console.log(tribonacci(2), tribonacciRecursion(2))
console.log(tribonacci(3), tribonacciRecursion(3))
console.log(tribonacci(4), tribonacciRecursion(4))
console.log(tribonacci(5), tribonacciRecursion(5))
