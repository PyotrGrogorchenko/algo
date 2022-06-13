const graph = [
  [4, 5],
  [3],
  [3],
  [1, 2, 9],
  [0],
  [0],
  [],
  [8],
  [7],
  [3]
]

const used = []

const dfs = (i, subGraph) => {
  subGraph.push(i)
  used[i] = true
  graph[i].forEach(v => {
    if (!used[v]) dfs(v, subGraph)
  })
}

graph.forEach((_, i) => {
  if (!used[i]) {
    const subGraph = []
    dfs(i, subGraph)
    console.log(subGraph.join(' '))
  }
})
