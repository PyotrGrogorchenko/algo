const binary = (arr, target) => {

  let left = 0
  let right = arr.length - 1
  let mid

  while (left <= right) {
    mid = Math.round((right - left)/2) + left
    if (target === arr[mid]) {
      return mid
    }

    if (target < arr[mid]) {
      right = mid - 1  
    } else {
      left = mid + 1
    }
  }

}

console.log(binary([-3, -2, 0, 1, 2, 4, 5, 7, 9], 5))
console.log(binary([-3, -2, 0, 1, 2, 4, 5, 7, 9], -2))
console.log(binary([-3, -2, 0, 1, 2, 4, 5, 7, 9], 8))