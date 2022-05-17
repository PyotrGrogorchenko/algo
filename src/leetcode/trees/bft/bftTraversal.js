import { _makeTree } from '../_makeTree.js'

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const bftTraversal = root => {
  const queue = [root]
  const res = []
  while (queue.length) {
    const node = queue.shift()
    res.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return res
}

console.log(bftTraversal(_makeTree([1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14])[0])) // false
