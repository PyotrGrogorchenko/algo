// https://leetcode.com/problems/implement-trie-prefix-tree/

var TrieNode = function() {
  this.children = new Map() 
  this.terminated = false
}

var Trie = function() {
  this.root = new TrieNode()
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root
  for (let i = 0; i < word.length; i++) {
    const letter = word.codePointAt(i)
    if (!node.children.has(letter)) {
      node.children.set(letter, new TrieNode())
    } 
    node = node.children.get(letter)
  }
  node.terminated = true
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root
  for (let i = 0; i < word.length; i++) {
    const letter = word.codePointAt(i)
    if (!node.children.has(letter)) return false
    node = node.children.get(letter)
  }
  return node.terminated
}

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root
  for (let i = 0; i < prefix.length; i++) {
    const letter = prefix.codePointAt(i)
    if (!node.children.has(letter)) return false
    node = node.children.get(letter)
  }
  return true
}

const trie = new Trie()
trie.insert("apple")
console.log(trie.search("apple"), '= true') // return True
console.log(trie.search("app"), '= false') // return False
console.log(trie.startsWith("app"), '= true') // return True
trie.insert("app")
console.log(trie.search("app"), '= true') // return True

trie.insert("alert")

console.log(trie.search("appl"), '= false') // return False
console.log(trie.search("alrt"), '= false') // return False
console.log(trie.search("alert"), '= true') // return True

