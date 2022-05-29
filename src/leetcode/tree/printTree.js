// https://leetcode.com/problems/print-binary-tree/
import { _makeTree } from './_tree.js'

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
 var printTree = function(root) {
  const getDepth = root => root ? Math.max(getDepth(root.left), getDepth(root.right)) + 1 : 0
  const dep = getDepth(root)
  const res = Array(dep).fill(0).map(_ => Array(2 ** dep - 1).fill(''))
  const dfs = (root, level = 1, index = 2 ** (dep - level) - 1) => {
      if(!root) return
      res[level - 1][index] += root.val
      dfs(root.left, level + 1, index - 2 ** (dep - level - 1))
      dfs(root.right, level + 1, index + 2 ** (dep - level - 1))
  }
  dfs(root)
  return res
}

console.log(printTree(_makeTree([3,null,30,10,null,null,15,null,45])))
console.log()

console.log(printTree(_makeTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])))
console.log()
