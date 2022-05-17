// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
 
export const _makeTree = (treeNum) => {
  const tree = []
  for (let i = 0; i < treeNum.length; i++) {
    if (treeNum[i] === null) continue
    const treeNode = new TreeNode(treeNum[i], treeNum[i * 2 + 1], treeNum[i * 2 + 2])
    tree.push(treeNode)
    if (i === 0) continue
    const parent = i - Math.floor(i / 2) - 1
    tree[parent][i % 2 === 0 ? 'right' : 'left'] = treeNode
  }
  return tree
}