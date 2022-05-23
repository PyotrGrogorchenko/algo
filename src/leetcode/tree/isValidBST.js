// https://leetcode.com/problems/validate-binary-search-tree/
import { _makeTree } from './_tree.js'

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let isValid = true
  let prev = null

  const traversal = (node) => {
    if (!isValid) return
    if (node === null) return
    traversal(node.left, node.val)
    if (!isValid) return
    isValid = prev === null || prev < node.val
    prev = node.val
    traversal(node.right)
  }

  traversal(root)
  return isValid
}


console.log(isValidBST(_makeTree([32,26,47,19,null,null,56,null,27]))) // false
console.log(isValidBST(_makeTree([3,1,5,0,2,4,6]))) // true
console.log(isValidBST(_makeTree([2, 2, 2]))) // false
console.log(isValidBST(_makeTree([1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, null, null, 14]))) // false
console.log(isValidBST(_makeTree([2, 1, 3]))) // true
console.log(isValidBST(_makeTree([5, 1, 4, null, null, 3, 6]))) // false
console.log(isValidBST(_makeTree([5, 4, 6, null, null, 3, 7]))) // false
console.log(isValidBST(_makeTree([3, 1, 5, 0, 2, 4, 6]))) // true
