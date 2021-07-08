function fib(num: number, memo: Record<number, number>): number {
    if(num === 0) return 0;
    if(num === 1) return 1;
    if(memo[num]) return memo[num];
    const result = fib(num - 2, memo) + fib(num - 1, memo);
    memo[num] = result;
    return result;
}


function fibIteratrive(num: number){
    if(num === 0) return 0;
    if (num === 1) return 1;
       let result = 1;
       let prev = 1;
       let next = 1;
       for(let i = 2; i < num; i++){ // 0 < 2
            result = prev + next; // 1: 0 + 1
            prev = next; // 1
            next = result; // 1
       }
       return result;
}