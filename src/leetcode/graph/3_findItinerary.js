// https://leetcode.com/problems/reconstruct-itinerary/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  tickets.sort((t1, t2) => t1[1].localeCompare(t2[1]))
  const graph = {}

  for (let i = 0; i < tickets.length; i++) {
    const [departure, destination] = tickets[i]
    const adj = graph[departure] || []
    adj.push(destination)
    graph[departure] = adj
  }

  const res = ['JFK']

  const dfs = (src) => {
    if (res.length === tickets.length + 1) return true
    if (!graph[src]) return false


    for (let i = 0; i < graph[src].length; i++) {
      const dest = graph[src][i]
      res.push(dest)
      graph[src].splice(i, 1)
      if (dfs(dest)) return true
      graph[src].splice(i, 0, dest)
      res.pop()
    }
  }

  dfs('JFK')
  return res
}

console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]))
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]))
