const selection = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        [arr[min], arr[j]] = [arr[j], arr[min]]
      }
    }
  }
  return arr;
}

console.log(selection([2, 1, 3, -2, 7, 0, -3, 5, 4, 8, -1, 6, 9]))
