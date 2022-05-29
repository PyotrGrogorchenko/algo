const fibonacciStraight = n => {
  let a = 1, b = 1
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b
}

console.log(fibonacciStraight(10))

const fibonacciRecursion = n => {
  if (n < 2) return n
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2)
}

console.log(fibonacciRecursion(10))
