// https://leetcode.com/problems/divisor-game/

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
  const cache = new Map()
  const canWin = n => {
    if (n <= 1) return false
    if (cache.has(n)) return cache.get(n)

    for (let x = 1; x <= Math.floor(n / 2); x++) {
      if (n % x === 0) {
        if (!canWin(n - x)) {
          cache.set(n, true)
          return true
        }
      }
    }
    cache.set(n, false)
    return false
  }
  return canWin(n)  
}

console.log(divisorGame(2))
console.log(divisorGame(3))
