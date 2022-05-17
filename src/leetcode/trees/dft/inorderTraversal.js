// https://leetcode.com/problems/binary-tree-inorder-traversal/
import { _makeTree } from '../_makeTree.js'

const treeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]
const tree = _makeTree(treeNum)

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
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

console.log(inorderTraversal(tree[0]).toString())

var inorderTraversalNum = function(rootIndex) {
  const traversalNum = (res, index) => {
    if (!treeNum[index]) return
    traversalNum(res, index * 2 + 1)
    res.push(treeNum[index])
    traversalNum(res, index * 2 + 2)
  }

  const res = []
  traversalNum(res, rootIndex)
  return res
}

console.log(inorderTraversalNum(0).toString())
