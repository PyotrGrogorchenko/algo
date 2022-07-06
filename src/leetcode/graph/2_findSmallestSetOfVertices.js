// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  const indegree = []
  const res = []
  
  edges.forEach(e => indegree[e[1]] = 1)
  for (let i = 0; i < n; i++) if (!indegree[i]) res.push(i)
 
  return res
}

console.log(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]))
console.log(findSmallestSetOfVertices(5, [[0,1],[2,1],[3,1],[1,4],[2,4]]))
