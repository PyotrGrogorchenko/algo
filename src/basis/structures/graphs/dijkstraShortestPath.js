const dijkstra = (graph, start = 'a') => {
  const costs = {[start]: 0}
  const queue = [{[start]: 0}]
  while (queue.length) {
    const [curVert, curCost] = Object.entries(queue.shift())[0]
    Object.entries(graph[curVert]).forEach((adjacent) => {
      const [adjacentVer, adjacentCost] = adjacent
      if (curCost + adjacentCost < (costs[adjacentVer] || Infinity)) {
        costs[adjacentVer] = curCost + adjacentCost
        queue.push({[adjacentVer]: costs[adjacentVer]}) 
      }
    })
  }
  costs[start] = 0
  return costs
}


const graph = {
  a: {b: 10, f: 5},
  b: {a: 10, c: 1},
  c: {b: 1, d: 5, f: 7, g: 10},
  d: {c: 5, e: 1},
  e: {d: 1, g: 2},
  f: {a: 5, c: 7, g: 100, h: 3},
  g: {c: 10, e: 2, f: 100, h: 8, i: 100},
  h: {f: 3, g: 8, j: 1},
  i: {g: 100, j: 1},
  j: {h: 1, i: 1}
}

console.log(dijkstra(graph))
console.log(dijkstra(graph, 'b'))
