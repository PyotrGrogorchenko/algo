const radix = arr => {
  for (let pow = 0; pow < String(Math.max(...arr)).length; pow++) {
    const bucket = {}
    arr.forEach(el => {
      const index = Math.floor(el / Math.pow(10, pow)) % 10
      bucket[index] = bucket[index] || []
      bucket[index].push(el)
    })

    arr = []
    for (const val of Object.values(bucket)) {
      arr = [...arr, ...val]
    }
  }
  return arr
}

console.log(radix([20, 5, 1, 345, 264, 947, 7, 12, 34, 543, 22, 89, 4, 9]))