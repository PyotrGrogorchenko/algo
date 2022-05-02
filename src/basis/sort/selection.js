const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const selection = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        swap(arr, min, j)
      }
    }
  }
  return arr;
}

console.log(selection([2, 1, 3, 7, 5, 4, 8, 6, 9]))
