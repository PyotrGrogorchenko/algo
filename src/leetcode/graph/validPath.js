// https://leetcode.com/problems/find-if-path-exists-in-graph/

import { console } from "@ip-algorithmics/codeforces-io"

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  if (source === destination) return true
  if (!edges.length) return false

  const graph = edges.reduce((g, e) => {
    g[e[0]] = g[e[0]] || []
    g[e[0]].push(e[1])
    g[e[1]] = g[e[1]] || []
    g[e[1]].push(e[0])
    return g
  }, [])

  const check = () => {
    const visited = new Set()
    const queue = [source]

    while (queue.length) {
      const vertex = queue.shift()
      visited.add(vertex)
      for (let i = 0; i < graph[vertex].length; i++) {
        const v = graph[vertex][i]
        if (!visited.has(v)) {
          if (v === destination) return true
          queue.push(v)
        } 
      }
    }
    return false
  }

  return check()
}

console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2)) // true
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)) // false
console.log(validPath(10, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], 5, 9)) // true
