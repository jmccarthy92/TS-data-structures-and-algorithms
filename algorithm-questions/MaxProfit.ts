function maxProfit(arr: number[]): number {
    if(arr.length < 1 || arr.length === 1) return 0;
    let minPrice = arr[0];
    let maxProfit = 0
    for(let i = 1; i < arr.length; i++){
        const currentPrice = arr[i];
        const currentProfit = arr[i] - minPrice;
        minPrice = Math.min(minPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentProfit)
    }
    return maxProfit;
}