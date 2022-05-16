// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
