const slidingWindow = (arr, k) => {
  let res = arr.slice(0, 4).reduce((sum, num) => sum += num, 0)
  arr.slice(4).reduce((sum, val, index) => {
    sum = sum - arr[index] + val
    res = Math.max(res, sum)
    return sum
  }, res)
  return res
}

console.log(slidingWindow([1, 7, 5, 3, 2, 3, 8, 9], 4))