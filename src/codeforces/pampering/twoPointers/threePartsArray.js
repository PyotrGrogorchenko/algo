const threePartsArray = arr => {
  let res = 0
  let r = arr.length - 1
  let l = 0
  let sumL = 0
  let sumR = 0
  while (l < r) {
    sumL += arr[l]
    while (sumR < sumL && l < r) {
      sumR += arr[r]
      r--
    }
    if (sumR === sumL) res = Math.max(res, sumL)
    l++
  }
  return res
}

console.log(threePartsArray([1, 3, 1, 1, 4]))
console.log(threePartsArray([1, 3, 2, 1, 4]))
console.log(threePartsArray([4, 1, 2]))
