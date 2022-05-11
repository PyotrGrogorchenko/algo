const dfsList = graph => {
  const used = [1]
  const queue = [0]
  while (queue.length) {
    const cur = queue.shift()
    console.log(cur)
    graph[cur].forEach((adjacent, index) => {
      if (!used[adjacent]) {
        queue.push(adjacent)
        used[adjacent] = 1
      }
    })
  }
}

console.log('---bfsList---')
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

const dfsMatrix = (graph) => {
  const used = [1]
  const queue = [0]
  while (queue.length) {
    const cur = queue.shift()
    console.log(cur)
    graph[cur].forEach((adjacent, index) => {
      if (adjacent && !used[index]) {
        queue.push(index)
        used[index] = 1
      }
    })
  }
}

console.log('---bfsMatrix---')
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