// https://leetcode.com/problems/jewels-and-stones/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const set = new Set()
  jewels.split('').forEach(v => set.add(v))
  return stones.split('').reduce((r, v) => {
    set.has(v) ? r++ : r
    return r
  }, 0)
}

console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.log(numJewelsInStones('aAb', 'aAAbbbbccc'))
