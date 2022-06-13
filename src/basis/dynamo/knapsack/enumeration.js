const enumeration = (weights, costs, sizeWeight) => {

  const calculate = (state, arr) => {
    let powerOfTwo = 1
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      if ((powerOfTwo & state) !== 0) {
        res += arr[i]
      }
      // console.log(powerOfTwo, powerOfTwo.toString(2), size.toString(2), powerOfTwo & size)
      powerOfTwo <<= 1
    }
    return res
  }


  let maxState = 0
  let maxCost = 0
  let maxWeight = 0

  for (let state = 0; state < 2 << weights.length; state++) {
    const weight = calculate(state, weights)
    const cost = calculate(state, costs)
    if (weight <= sizeWeight && maxCost < cost) {
      maxState = state
      maxCost = cost
      maxWeight = weight
    }
  }

  return { weight: maxWeight, cost: maxCost, sizeWeight: `${sizeWeight}->${sizeWeight.toString(2)}`, state: `${maxState}->${maxState.toString(2)}` }  
}

console.log(enumeration([5, 2, 6, 4, 3], [3, 1, 5, 6, 8], 10))
console.log(enumeration([3, 4, 5, 8, 9], [1, 6, 4, 7, 6], 13))
