const counting = arr => {
  const min = Math.min(...arr)
  return arr.reduce((res, num) => {
    res[num - min] = (res[num - min] || 0) + 1
    return res  
  }, [])
  .reduce((res, num, index) => [...res, ...new Array(num).fill(index + min)], [])
}

console.log(counting([2, 1, 3, 3, 2, 2, 7, 0, 3, 5, 4, 1, 8, 3, 1, 2, 6, 1, 9]))
console.log(counting([10, 11, 13, 12, 17, 10, 15, 14, 11, 18, 12, 16, 11, 19, 14, 18, 17]))