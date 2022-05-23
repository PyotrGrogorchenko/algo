// https://leetcode.com/problems/binary-tree-inorder-traversal/
import { _makeTree } from '../_tree.js'

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = root => {
  const traversal = (res, node) => {
    if (node === null) return
    traversal(res, node.left)
    res.push(node.val)
    traversal(res, node.right)
  }
  
  const res = []
  traversal(res, root)
  return res
}

var inorderTraversalNum = arr => {
  const traversalNum = (res, index) => {
    if (treeNum[index] === undefined) return
    traversalNum(res, index * 2 + 1)
    res.push(treeNum[index])
    traversalNum(res, index * 2 + 2)
  }

  const res = []
  traversalNum(res, 0)
  return res
}

const treeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]
const treeRoot = _makeTree(treeNum)

console.log(inorderTraversal(treeRoot).toString())
console.log(inorderTraversalNum(treeNum).toString())
