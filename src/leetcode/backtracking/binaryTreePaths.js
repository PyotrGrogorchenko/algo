// https://leetcode.com/problems/binary-tree-paths/
import { _makeTree } from '../tree/_tree.js'

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = []

  const traversal = (node, path) => {
    path = path.concat(path ? '->' : '').concat(node.val)

    if (node.left === null && node.right === null) res.push(path)

    if (node.left) traversal(node.left, path) 
    if (node.right)traversal(node.right, path) 

  }

  traversal(root, '')

  return res
}

console.log(binaryTreePaths(_makeTree([1,2,3,null,5])))
console.log(binaryTreePaths(_makeTree([1])))
