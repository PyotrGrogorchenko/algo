// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
import { _makeTree } from './_tree.js'

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) return ''
  const queue = [root]
  const res = [root.val]
  
  let index = 0
  while (queue.length) {
    
    const node = queue.shift()

    if (!node) {
      index++
      continue
    }

    if (node.left) res[index * 2 + 1] = node.left.val
    if (node.right) res[index * 2 + 2] = node.right.val 
    index++

    queue.push(node.left)
    queue.push(node.right)
  }

  return res.toString()
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null
  const arr = data.split(',').map(val => val ? Number(val) : null)
  if (arr[0] === null) return null

  const traversal = i => {
    if (arr[i] === undefined && arr[i * 2 + 1] === undefined && arr[i * 2 + 2] === undefined) return null

    const left = traversal(i * 2 + 1)
    const right = traversal(i * 2 + 2)


    return new TreeNode(arr[i], left, right) 
  }

  const res = traversal(0)
  return traversal(0)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let str
let root

str = serialize(_makeTree([1,2,3,null,null,4,5]))
console.log([1,2,3,null,null,4,5].toString())
console.log(str)
console.log(serialize(deserialize(str)))
console.log()

root = _makeTree([1,null,2])
str = serialize(root)
console.log([1,null,2].toString())
console.log(str)
console.log(serialize(deserialize(str)))
console.log()

root = _makeTree([1,2,3,null,null,4,5,6,7])
str = serialize(root)
console.log([1,2,3,null,null,4,5, 6, 7].toString())
console.log(str)
console.log(serialize(deserialize(str)))
console.log()

root = _makeTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])
str = serialize(root)
console.log([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2].toString())
console.log(str)
console.log(serialize(deserialize(str)))
console.log()
