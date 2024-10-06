function* primeGenerator(limit) {
    let num = 2;
    
    function isPrime(n) {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }
  
    while (num <= limit) {
      if (isPrime(num)) {
        yield num;
      }
      num++;
    }
  }
  const primes = primeGenerator(20);
  console.log(primes.next()); 
  console.log(primes.next());
  console.log(primes.next()); 
  console.log(primes.next()); 
  console.log(primes.next()); 
  console.log(primes.next()); 
  console.log(primes.next()); 
  console.log(primes.next()); 
  console.log(primes.next()); 
  