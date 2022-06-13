const dfsList = (graph, used = [], cur = 0) => {
  console.log(cur)
  used[cur] = 1
  graph[cur].forEach(adjacent => {
    if (!used[adjacent]) dfsList(graph, used, adjacent)
  })
}

console.log('---dfsList---')
dfsList([
  [1, 3],
  [0, 5, 6],
  [6],
  [0, 4],
  [3, 7],
  [1, 6],
  [1, 2, 5],
  [4]
])

const dfsMatrix = (graph, used = [], cur = 0) => {
  console.log(cur)
  used[cur] = 1
  graph[cur].forEach((adjacent, index) => {
    if (adjacent && !used[index]) dfsMatrix(graph, used, index)
  })
}

console.log('---dfsMatrix---')
dfsMatrix([
  [0, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0]
])