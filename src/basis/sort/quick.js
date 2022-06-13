const quick = (arr, i = 0, j = arr.length) => {
  if (i === j) return

  const partition  = (i, j) => {
    let current = i
    for (let k = i + 1; k < j; k++) {
      if (arr[k] < arr[i]) {
        current++
        [arr[current], arr[k]] = [arr[k], arr[current]]
      }
    }
    [arr[i], arr[current]] = [arr[current], arr[i]]
    return current
  }
  

  const pivot = partition(i, j)
  quick(arr, i, pivot)
  quick(arr, pivot + 1, j)
  return arr
}

console.log(quick([2, 1, 3, -2, 7, 0, -3, 5, 4, 8, -1, 6, 9]))
