// https://codeforces.com/group/pgkaqF4igo/contest/256854/problem/A

'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
})

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim()
  })
  main()
})

function readline() {
  return inputString[currentLine++]
}

//----------solution----------\\

function main() {
  
  const [n, t] = readline().split(' ')
  const a = readline().split(' ')
  let s = 0
  let l = 0
  let res = 0
  
  for (let r = 0; r < n; r++) {
    s += Number(a[r])
    while(s > t) {
      s -= Number(a[l])
      l++
    }
    res = Math.max(res, r - l + 1)
    
  }
  console.log(res)
}  
