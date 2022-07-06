// https://leetcode.com/problems/clone-graph/

// Definition for a Node.
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

const makeGraph = adjList => {
  const cache = new Map()
  const root = new Node(1)
  cache.set(1, root)

  for (let i = 0; i < adjList.length; i++) {
    const node = cache.has(i + 1) ? cache.get(i + 1) : new Node(i + 1)
    cache.set(i + 1, node)
    for (let j = 0; j < adjList[i].length; j++) {
      const neighbor = cache.has(adjList[i][j]) ? cache.get(adjList[i][j]) : new Node(adjList[i][j])
      cache.set(adjList[i][j], neighbor)
      node.neighbors.push(neighbor)
    }
  }

  return root
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return null
  const cache = new Map()

  const dfs = n => {
    if (cache.has(n)) return cache.get(n)
    const copy = new Node(n.val)
    cache.set(n, copy)
    n.neighbors.forEach(nei => {
      copy.neighbors.push(dfs(nei))
    })
    return copy
  }

  const res = dfs(node)
  return res
}

console.log(cloneGraph(makeGraph([[2,4],[1,3],[2,4],[1,3]])))
console.log(cloneGraph(makeGraph([])))
console.log(cloneGraph(makeGraph([[]])))