const binarySearch = (arr, x) => {
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    if (arr[m] === x) return m
    if (arr[m] < x) {
      l = m + 1
      continue
    }
    if (arr[m] > x) r = m - 1
  }
}

const arr = [1, 2, 4, 5, 7, 9, 12, 15, 19, 23]

console.log(binarySearch(arr, 4))
console.log(binarySearch(arr, 23))
console.log(binarySearch(arr, 1))
console.log(binarySearch(arr, 9))
console.log(binarySearch(arr, 3))
console.log(binarySearch(arr, 50))
