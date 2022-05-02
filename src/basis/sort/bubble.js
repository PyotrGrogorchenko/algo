const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubble = (arr) => {
  for (i = 1; i < arr.length; i++) {
    let isSorted = true;
    for (j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j-1]) {
        swap(arr, j, j-1)
        isSorted = false;
      }
    }
    if (isSorted) {
      break
    }
  }
  return arr
}

console.log(bubble([2, 1, 3, 7, 5, 4, 8, 6, 9]))
