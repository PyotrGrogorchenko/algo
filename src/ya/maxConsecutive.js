const maxConsecutive = str => {
  let res = 0
  let start = 0
  let finish = 0
  while (start < str.length) {
    start = finish
    while (finish < str.length && str[start] === str[finish]) {
      finish++   
    }
    res = Math.max(res, finish - start)
  }  
  return res
}

console.log(maxConsecutive('abbbcccdeeeeeeffff'))