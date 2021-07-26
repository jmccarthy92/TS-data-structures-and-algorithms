function sieveOfEratosthenes(max: number): number[] { // max = 5
    const primes = Array(max).fill(true, 2).fill(false, 0, 2); // [F,F,T,T,T]

    let prime = 2;
    while(prime <= Math.sqrt(max)) { // 1: 2 <= 2.24
        for(let i = prime * prime; i < max; i+= prime) { // 1: 4; 4 < 5; 4+=2;
            primes[i] = false;
        } // 1: [F, F, T, T, F]
        
        let next = prime + 1; // 3
        while(next < max && !primes[next]) { // 3 < 5 && true
            next++;
        }
        prime = next; // 3
    }
    return primes.reduce((acc, prime, ndx) => {
        if(prime) {
            acc.push(ndx);
        }
        return acc;
    },[])
}