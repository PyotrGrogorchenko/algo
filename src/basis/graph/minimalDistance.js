const graph = [
  [1, 2],
  [0, 3, 6],
  [0, 3],
  [1, 2, 4, 5, 6],
  [3, 7],
  [3, 7],
  [1, 3, 7],
  [4, 5, 6, 8],
  [7]  
]

const used = new Array(graph.length).fill(-1)

const bfs = start => {
  used[start] = 0
  const queue = [start]

  while (queue.length) {
    const vertex = queue.shift()
    graph[vertex].forEach((v) => {
      if (used[v] < 0) { 
        queue.push(v)
        used[v] = used[vertex] + 1
      }
    })
  }
}

bfs(0)
console.log(used.toString())
