// https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const queue = [[0]]
  const res = []

  while (queue.length) {
    const route = queue.shift()
    const forward = graph[route[route.length - 1]]
    

    forward.forEach(v => {
      if (v === graph.length - 1) {
        res.push([...route, v])
      } else {
        queue.push([...route, v])
      }

    })
    
  }
  
  return res
}

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))
