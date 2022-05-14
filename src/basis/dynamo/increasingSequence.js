const increasingSequence = (arr) => {
  const dp = new Array(arr.length).fill(1)
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j ++) {
      if (arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
  return dp  
}

console.log(increasingSequence([2, 3, 6, 4, 1, 3, 5, 4, 7]))