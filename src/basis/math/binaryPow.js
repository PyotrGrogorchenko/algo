const binaryPowRecursion = (x, n) => {
  if (n === 0) return 1
  if (n % 2) return binaryPowRecursion(x, n - 1) * x
  const y = binaryPowRecursion(x, n / 2)
  return y * y
}

console.log('---recursion---')
console.log(binaryPowRecursion(2, 10) === 1024)
console.log(binaryPowRecursion(3, 5) === 243)
console.log(binaryPowRecursion(3, 15) === 14348907)

const binaryPow = (x, n) => {
  let res = 1
  while(n !== 0) {
    if (n & 1) res *= x
    n >>= 1
    x *= x
  }
  return res
}

console.log('---binary---')
console.log(binaryPow(2, 10) === 1024)
console.log(binaryPow(3, 5) === 243)
console.log(binaryPow(3, 15) === 14348907)
