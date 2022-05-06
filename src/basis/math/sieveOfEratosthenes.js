const sieveOfEratosthenes = n => {
  const sieve = []
  const primes = []
  for (let i = 2; i <= n; i++) {
    if (!sieve[i]) {
      primes.push(i)
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = true 
      }
    }
  }
  console.log(sieve)
  return primes
}

console.log(sieveOfEratosthenes(100))