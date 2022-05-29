// https://leetcode.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const res  = []
  const restore = (i = 0, dots = 0, prev = '') => {
    if (dots === 4 && i === s.length) {
      res.push(prev)
      return
    }
    if (dots > 3) {
      return
    }

    for (let j = i; j < i + 3; j++) {
      const num = s.slice(i, j+1)
      if (num && Number(num) <= 255 && !(num.length > 1 && num.startsWith('0'))) {
        restore(j + 1, dots + 1, prev + (prev ? '.' : '') + num)
      } 
    }
  }

  restore()
  return res
}

console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('101023'))
console.log(restoreIpAddresses('0000'))
