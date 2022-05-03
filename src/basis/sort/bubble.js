const bubble = arr => {
  for (let i = 1; i < arr.length; i++) {
    let isSorted = true;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j-1]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
        isSorted = false;
      }
    }
    if (isSorted) {
      break
    }
  }
  return arr
}

console.log(bubble([2, 1, 3, -2, 7, 0, -3, 5, 4, 8, -1, 6, 9]))
