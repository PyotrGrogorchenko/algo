const greedy = (weights, costs, sizeWeight) => {
  const res = []
  const mark = new Set()

  let resWeight = 0

  while (costs.length !== mark.size) {
    let maxCost = 0
    let maxIndex = 0

    for (let i = 0; i < costs.length; i++) {
      if (mark.has(i)) continue
      if (maxCost < costs[i]) {
        maxCost = costs[i]
        maxIndex = i
      }
    }
    resWeight += weights[maxIndex]
    if (resWeight > sizeWeight) {
      resWeight -= weights[maxIndex]  
    } else {
      res.push(maxIndex)
    }
    
    mark.add(maxIndex)
  }

  return res
}

console.log(greedy([5, 2, 6, 4, 3], [3, 1, 5, 6, 8], 10))
console.log(greedy([3, 4, 5, 8, 9], [1, 6, 4, 7, 6], 13))
