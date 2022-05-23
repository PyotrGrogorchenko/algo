// https://leetcode.com/problems/print-binary-tree/
import { _makeTree } from './_tree.js'

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
  console.log(root)
  
  const arr = serialize(root).split(',')

  const height = Math.floor(Math.log2(arr.length))
  const width = Math.pow(2, height + 1) - 1
  
  const res = []

  let start = 0
  for (let i = 0; i <= height; i++) {
    const count = Math.pow(2, i)
    const row = new Array(width).fill('')
    const gap = Math.floor(Math.pow(2, height - i)) - 1
    
    let pos = gap
    for (let j = start; j < start + count; j ++) {
      row[pos] = arr[j] === undefined ? '' : arr[j]
      pos += gap * 2 + 2
    }
    start += count
    res.push(row)
  }

  
  
  return(res)
  
}

var serialize = function(root) {
  if (!root) return ''
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


printTree(_makeTree([3,null,30,10,null,null,15,null,45]))
console.log()

// console.log(printTree(_makeTree([1,2])))
// console.log()

// console.log(printTree(_makeTree([1,2,3,null,4])))
// console.log()

// console.log(printTree(_makeTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])))
// console.log()

// printTree(_makeTree([1]))
// console.log()
// printTree(_makeTree([1,2]))
// printTree(_makeTree([1, 2,2]))
// console.log()
// printTree(_makeTree([1, 2,2, 3]))
// printTree(_makeTree([1, 2,2, 3,3]))
// printTree(_makeTree([1, 2,2, 3,3,3]))
// printTree(_makeTree([1, 2,2, 3,3,3,3]))
// console.log()
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4]))
// console.log()
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]))
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]))
// console.log()
// printTree(_makeTree([1, 2,2, 3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5, 6]))
// console.log()
