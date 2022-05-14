const frog = (stair, jump) => {
  const res = [1]
  for (let i = 1; i < stair; i++) {
    let interim = 0
    for (let j = 1; j <= jump; j++) {
      if (res.length < j) break
      interim += res[res.length - j]      
    }
    res.push(interim)
  }
  return res
}

console.log(frog(10, 2))