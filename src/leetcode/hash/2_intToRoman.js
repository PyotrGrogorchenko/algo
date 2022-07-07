// https://leetcode.com/problems/integer-to-roman/

const map = new Map()

map.set('M', 1000)
map.set('CM', 900)
map.set('D', 500)
map.set('CD', 400)
map.set('C', 100)
map.set('XC', 90)
map.set('L', 50)
map.set('XL', 40)
map.set('X', 10)
map.set('IX', 9)
map.set('V', 5)
map.set('IV', 4)
map.set('I', 1)

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let res = ''
  map.forEach((v, k) => {
    res += k.repeat(Math.floor(num / v))
    num %= v
  })
  return res
}

console.log(intToRoman(3), '= III')
console.log(intToRoman(58), '= LVIII')
console.log(intToRoman(1994), '= MCMXCIV')
