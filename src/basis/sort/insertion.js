const insertion = arr => {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    let j = i - 1;
    while(j >= 0 && arr[j] > cur) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = cur
  } 
  return arr 
}

console.log(insertion([2, 1, 3, -2, 7, 0, -3, 5, 4, 8, -1, 6, 9]))
