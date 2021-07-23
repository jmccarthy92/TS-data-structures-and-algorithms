function diffK(numbers: number[], K: number): boolean{ 
    if(numbers.length <= 1) return false;
    let i = 0;
    let j = 1;
    while(i < numbers.length && j <= numbers.length) {
            if(i === j) j++;
            if(numbers[j] - numbers[i] === K) return true;
            else if(numbers[j] - numbers[i] > K) i++;
            else j++;
    }
    return false;
}
