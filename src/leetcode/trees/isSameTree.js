// https://leetcode.com/problems/same-tree/
import { _makeTree } from './_makeTree.js'

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const queue = [{p, q}]
  while (queue.length) {
    const { p, q } = queue.shift()
    
    if (!p && !q) continue
    
    if ((!p && q) || (!q && p)) return false
    if (p.val !== q.val) return false
    
    queue.push({ p: p.left, q: q.left })
    queue.push({ p: p.right, q: q.right })
  }
  return true
}

console.log(isSameTree(_makeTree([1,2,3])[0], _makeTree([1,2,3])[0]))
console.log(isSameTree(_makeTree([1,2])[0], _makeTree([1,null,2])[0]))
console.log(isSameTree(_makeTree([1,2,1])[0], _makeTree([1,1,2])[0]))
