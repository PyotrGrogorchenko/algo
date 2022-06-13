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
  order.reverse()

  const reverseGraph = []
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      const component  = reverseGraph[graph[i][j]] || []
      component.push(i)
      reverseGraph[graph[i][j]] = component
    }
  }

  used.length = 0
  const reverseDfs = start => {
    console.log(start)
    used[start] = true
    graph[start].forEach(v => {
      if (!used[v]) reverseDfs(v)
    })
  }
  
  for (let i = 0; i < order.length; i++) {
    if (!used[order[i]]) {
      reverseDfs(order[i])
    }
  }


}

console.log(sortDfs([[2], [0, 2], [3, 4], [], [1, 8], [10], [5], [1, 5], [9], [8], [6, 7]]))
