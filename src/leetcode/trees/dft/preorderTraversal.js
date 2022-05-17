// https://leetcode.com/problems/binary-tree-preorder-traversal/
import { _makeTree } from '../_makeTree.js'

const treeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]
const tree = _makeTree(treeNum)

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) return []
  const res = []
  const stack = [root]
  
  while(stack.length) {
    const node = stack.pop()
    res.push(node.val)

    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  
  return res
} 

console.log(preorderTraversal(tree[0]).toString())

var preorderTraversalNum = function(root) {
  const res = []
  const stack = [root]
  
  while(stack.length) {
    const node = stack.pop()
    res.push(treeNum[node])

    if (treeNum[node * 2 + 2]) stack.push(node * 2 + 2)
    if (treeNum[node * 2 + 1]) stack.push(node * 2 + 1)
  }
  
  return res
} 

console.log(preorderTraversalNum(0).toString())
