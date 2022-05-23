const balancedTeam = students => {
  students.sort((a, b) => a - b)

  let res = 0, count = 0
  let l = 0
  let r = 0
  while (r < students.length && l < students.length) {
    while (students[r] - students[l] > 5) l++
    res = Math.max(res, r - l + 1)
    r++
  }
  return res
}

console.log(balancedTeam([1, 10, 17, 12, 15, 2]))
console.log(balancedTeam([1337, 1337, 1337, 1337, 1337, 1337, 1337, 1337, 1337, 1337]))
console.log(balancedTeam([1, 1000, 10000, 10, 100, 1000000000]))
