const merge = (left, right) => {
  let merged = []
  let leftIndex = 0
  let rightIndex = 0

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) merged.push(left[leftIndex++])
    else merged.push(right[rightIndex++])
  }

  if (leftIndex < left.length) merged = [...merged, ...left.slice(leftIndex)]
  if (rightIndex < right.length) merged = [...merged, ...right.slice(rightIndex)]

  return merged
}

export const mergeSort = arr => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length/2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  
  return merge(mergeSort(left), mergeSort(right))

}

console.log(mergeSort([2, 1, 3, -2, 7, 0, -3, 5, 4, 8, -1, 6, 9]))

