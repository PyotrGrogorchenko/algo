const binaryPow = (x, n, mod) => {
  let res = 1
  while(n !== 0) {
    if (n & 1) {
      res *= x
      res %= mod
    }
    n >>= 1
    x *= x
    x %= mod
  }
  return res
}


let mod = 7
console.log(2 * binaryPow(5, mod - 2, mod) % mod)

mod = 1000000007
console.log(2 * binaryPow(5, mod - 2, mod) % mod)