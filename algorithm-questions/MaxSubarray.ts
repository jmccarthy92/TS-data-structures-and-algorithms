function kadanes(arr: number[]): number{
    let sum = 0;
    let max = -1000;
    for(let i =0; i < arr.length; i++) {
        sum+=arr[i];
        if(sum > max ) {
            max = sum;
        }
        if(sum < 0) sum = 0;
    }
    return max
}

function kadanes2(arr: number[]) : number {
    let globalMax = -1000;
    let localMax = -1000;
    for(let i =0; i < arr.length; i++) {
        let localMax = Math.max(arr[i], arr[i] + localMax);
    }
    return globalMax;
}