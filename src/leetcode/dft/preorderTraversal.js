// https://leetcode.com/problems/binary-tree-preorder-traversal/

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

const treeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]
const tree = []

for (let i = 0; i < treeNum.length; i++) {
  if (treeNum[i] === null) continue
  const treeNode = new TreeNode(treeNum[i], treeNum[i * 2 + 1], treeNum[i * 2 + 2])
  tree.push(treeNode)
  if (i === 0) continue
  const parent = i - Math.floor(i / 2) - 1
  tree[parent][i % 2 === 0 ? 'right' : 'left'] = treeNode
}

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
