// https://leetcode.com/problems/binary-tree-postorder-traversal/
import { _makeTree } from '../_makeTree.js'

const treeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]
const tree = _makeTree(treeNum)

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const traversal = (node, res) => {
    if (!node) return res
    traversal(node.left, res)
    traversal(node.right, res)
    res.push(node.val)
    return res
  }
  return traversal(root, [])
}

console.log(postorderTraversal(tree[0]).toString())

var postorderTraversalNum = function(root) {
  const traversal = (index, res) => {
    if (!treeNum[index] && treeNum[index] !== 0) return res
    traversal(index * 2 + 1, res)
    traversal(index * 2 + 2, res)
    res.push(treeNum[index])
    return res
  }
  return traversal(root, [])
}

console.log(postorderTraversalNum(0).toString())
