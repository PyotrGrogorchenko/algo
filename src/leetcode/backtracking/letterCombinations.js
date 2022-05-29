// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const map = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []
  let res = []

  const combine = (digitIndex = 0, prev = '') => {
    if (digitIndex === digits.length) return
    map[digits[digitIndex]].split('').forEach(l => {
      const cur = prev + l
      if (digitIndex === digits.length - 1) res.push(cur)
      combine(digitIndex + 1, cur)
    })
  }
 
  combine()
  return res  
}

console.log(letterCombinations(''))
console.log(letterCombinations('55'))
console.log(letterCombinations('5'))
console.log(letterCombinations('23'))
console.log(letterCombinations('234'))
