const sortDfs = graph => {
  const used = []
  const order = []

  const dfs = start => {
    used[start] = true
    graph[start].forEach(v => {
      if (!used[v]) dfs(v)
    })
    order.push(start)
  }
  
  graph.forEach((_, i) => {
    if (!used[i]) dfs(i)
  })
  return order.reverse()
}

console.log(sortDfs([[4], [0], [3, 1], [0, 1, 4], []]))