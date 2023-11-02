function isPrime(num) {
    if (num <= 1) return false;
    let i = 2;
    while (i < num) {
      if (num % i === 0) return false;
      i++;
    }
    return true;
  }
  
  function findPrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  console.log(findPrimes(100)); 