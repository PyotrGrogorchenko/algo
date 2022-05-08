const gsd = (x, y) => y ? gsd(y, x % y) : x

const euler = n => {
  let count = 1
  for (let i = 2; i < n; i++) {
    if (gsd(i, n) === 1) count++
  }
  return count
}

console.log('---slow---')
console.log(euler(9), 6)
console.log(euler(36), 12)
console.log(euler(84), 24)

const eulerFast = n => {
  let res = n
  let prime = 2
  while (n >= prime * prime) {
    if (n % prime === 0) {
      res = Math.floor(res / prime * (prime - 1))
      while (n % prime === 0) n = Math.floor(n / prime)
    }
    prime++
  }
  if (n !== 1) res = Math.floor(res / n * (n - 1))
  return res
}

console.log('---fast---')
console.log(eulerFast(9), 6)
console.log(eulerFast(36), 12)
console.log(eulerFast(84), 24)
