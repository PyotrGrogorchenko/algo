const books = (data, time) => {
  const [bookCount, freeTime] = data
  let res = 0, sum = 0, l = 0, r = 0
  for (r = 0; r < time.length; r++) {
    sum += time[r]
    if (sum > freeTime) {
      res = Math.max(res, r - l)
      sum -= time[l]
      l++
    }
  }
  res = Math.max(res, r - l)

  return res
}

// console.log(books([4, 5], [3, 1, 2, 1]))
// console.log(books([3, 3], [2, 2, 3]))
console.log(books([10, 10], [6, 4, 2, 3, 6, 7, 4, 8, 3, 4, 2, 1, 9, 4, 2, 5, 6, 3, 2, 1, 5, 8, 3]))
