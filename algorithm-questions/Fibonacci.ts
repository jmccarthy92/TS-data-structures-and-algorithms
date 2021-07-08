function fib(num: number, memo: Map<number, number>): number {
    if(num === 0) return 0;
    if(num === 1) return 1;
    if(memo.has(num)) 
        return memo.get(num) as number;
    const result = fib(num - 2, memo) + fib(num - 1, memo);
    memo.set(num, result);
    return result;
}