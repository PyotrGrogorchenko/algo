const diagonalUpRight = (i, j, strClean) => {
  if (i > j) {
    i = i - j + 1
    j = 1
  } else {
    j = j - i + 1
    i = 1
  }
  
  while (i < 9 && j < 9) {
    if (new RegExp(`\(${i},${j}\)`).test(strClean)) return true
    i++
    j++
  }

  return false
}

const diagonalDownRight = (i, j, strClean) => {
  const step = i >= j ? Math.min(8 - i, j - 1) : Math.min(j - 1, 8 - i)
  i += step
  j -= step

  while (i > 0 && j < 9) {
    if (RegExp(`\(${i},${j}\)`).test(strClean)) return true
    i--
    j++
  }
  
  return false
}

const chessQueen = (queens) => {
  const str = queens.join('')
  let res = false

  queens.every(queen => {
    const strClean = str.replace(queen, '')
    const cell = queen.slice(1, 4).split(',').map(coord => Number(coord))
    
    if (new RegExp(`\(${cell[0]},.\)`).test(strClean)) {
      res = {queen, line: 'horisontal'}
      return false
    }

    if (new RegExp(`\(.,${cell[1]}\)`).test(strClean)) {
      res = {queen, line: 'vertical'}
      return false
    }

    if (diagonalUpRight(cell[0], cell[1], strClean)) {
      res = {queen, line: 'diagonalUpRight'}
      return false
    }
    if (diagonalDownRight(cell[0], cell[1], strClean)) {
      res = {queen, line: 'diagonalDownRight'}
      return false
    }
    return true
  })
  
  return res
}

console.log(chessQueen(['(2,1)', '(4,2)', '(7,3)', '(8,5)', '(6,8)', '(3,6)']))
console.log(chessQueen(['(2,1)', '(4,2)', '(7,3)', '(5,5)', '(6,8)', '(2,6)']))
console.log(chessQueen(['(2,1)', '(4,2)', '(7,2)', '(8,5)', '(6,8)', '(3,6)']))
console.log(chessQueen(['(1,1)', '(8,8)']))
console.log(chessQueen(['(1,8)', '(8,1)']))
console.log(chessQueen(['(2,1)', '(4,2)', '(5,3)', '(5,5)']))
console.log(chessQueen(['(7,3)', '(3,7)']))
