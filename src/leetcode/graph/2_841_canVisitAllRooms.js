// https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const visited = new Array(rooms.length)
  visited[0] = true

  const stack = [0]

  while (stack.length) {
    const key = stack.pop()
    rooms[key].forEach(k => {
      if (!visited[k]) {
        visited[k] = true
        stack.push(k)
      }
    })
  }

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) return false
  }

  return true
}

var canVisitAllRoomsR = function(rooms) {
  const visited = new Array(rooms.length)
  visited[0] = true

  const dfs = r => {
    rooms[r].forEach(k => {
      if (!visited[k]) {
        visited[k] = true
        dfs(k)
      }
    })        
  }

  dfs(0)

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) return false
  }

  return true
}



console.log(canVisitAllRooms([[1],[2],[3],[]]), canVisitAllRoomsR([[1],[2],[3],[]]))
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]), canVisitAllRoomsR([[1,3],[3,0,1],[2],[0]]))
