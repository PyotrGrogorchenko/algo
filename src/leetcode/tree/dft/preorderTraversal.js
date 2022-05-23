// https://leetcode.com/problems/binary-tree-preorder-traversal/
import { _makeTree } from '../_tree.js'

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = root => {
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

var preorderTraversalRecursion = root => {
  if (!root) return []
  const res = []

  const traversal = node => {
    if (!node) return
    res.push(node.val)

    if(node.left) traversal(node.left)
    if(node.right) traversal(node.right)
  }

  traversal(root)

  return res
} 

var preorderTraversalNum = arr => {
  const res = []
  const stack = [0]
  
  while(stack.length) {
    const i = stack.pop()
    res.push(arr[i])

    if (arr[i * 2 + 2]) stack.push(i * 2 + 2)
    if (arr[i * 2 + 1]) stack.push(i * 2 + 1)
  }
  
  return res
} 

var preorderTraversalNumRecursion = arr => {
  const res = []
  
  const traversal = i => {
    if (!arr[i]) return
    res.push(arr[i])

    if (arr[i * 2 + 1]) traversal(i * 2 + 1)
    if (arr[i * 2 + 2]) traversal(i * 2 + 2)
  }

  traversal(0)

  return res
}

const treeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]
const treeRoot = _makeTree(treeNum)

console.log(preorderTraversal(treeRoot).toString())
console.log(preorderTraversalRecursion(treeRoot).toString())
console.log(preorderTraversalNum(treeNum).toString())
console.log(preorderTraversalNum(treeNum).toString())

