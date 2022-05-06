const gsd = (x, y) => y ? gsd(y, x % y) : x

console.log('---gsd---')
console.log(gsd(15, 24) === 3)
console.log(gsd(7, 14) === 7)
console.log(gsd(14, 7) === 7)
console.log(gsd(15, 28) === 1)

const lcm = (x, y) => x / gsd(x, y) * y

console.log('---lcm---')
console.log(lcm(15, 24) === 120)
console.log(lcm(7, 14) === 14)
console.log(lcm(14, 7) === 14)
console.log(lcm(15, 28) === 15 * 28)