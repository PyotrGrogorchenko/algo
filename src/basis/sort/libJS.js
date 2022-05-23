const arr = [2, 1, 3, -2, 7, 0, -123, -3, -15, 5, 15, 4, 287, 8, -1, 6, 9]

console.log([...arr].sort((a, b) => a - b).toString()) // ascending
console.log([...arr].sort((a, b) => b - a).toString()) // descending
