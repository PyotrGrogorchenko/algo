// 1. List of edges
const listOfEdge = ['1:2', '1:3','1:4', '1:5', '2:3', '2:4', '2:5', '3:4', '4:5']

// 2. Adjacency matrix
const adjacencyMatrix = [
  [0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 0],
  [1, 1, 1, 0, 1],
  [1, 1, 0, 1, 0]
]

// 3. Adjacency list
const adjacencyList = [
  [1, 2, 3, 4],
  [0, 2, 3, 4],
  [0, 3],
  [0, 4],
  [0]
]