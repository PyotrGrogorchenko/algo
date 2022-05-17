// https://leetcode.com/problems/symmetric-tree/
import { _makeTree } from './_makeTree.js'

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const queue = [root.left, root.right]
  while (queue.length) {
    const left = queue.shift()
    const right = queue.shift()
    if (!left && !right) continue

    if (!left && right || !right && left) return false
    if (left.val !== right.val) return false

    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)

  }
  return true
}

console.log(isSymmetric(_makeTree([1,2,2,3,4,4,3])[0]))
console.log(isSymmetric(_makeTree([1,2,2,null,3,null,3])[0]))
