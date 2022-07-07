// https://leetcode.com/problems/binary-watch/
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(n) {
  const res = []

  for (let hour = 0; hour < 12; hour++){
    const hourBits = hour.toString(2).split('').reduce((r, v) => v === '1' ? ++r : r, 0)
    for(let minute = 0; minute < 60; minute++) {
      const minuteBits = minute.toString(2).split('').reduce((r, v) => v === '1' ? ++r : r, 0)
      if (hourBits + minuteBits === n) {
        res.push(String(hour).concat(':').concat(String(minute).padStart(2, '0')))
      }
    }
  }
  return res
}

// console.log(readBinaryWatch(1))
// console.log(readBinaryWatch(2))
// console.log(readBinaryWatch(8))

const a = 2 ^ 2
console.log((6 << 1))