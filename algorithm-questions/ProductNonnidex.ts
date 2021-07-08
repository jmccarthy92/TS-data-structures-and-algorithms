export function multi(arr: number[]) {
    const output: number[] = [];
    for(let i = 0; i < arr.length; i++){
        let product = 1;
        for(let j = 0; j < arr.length; j++){
            if(i===j) continue;
            product *= arr[j];
        }
        output[i] = product;
    }
    return output;
}

export function productNonIndex(arr: number[]) {
    if(!arr.length || arr.length === 1) return arr;

    const left: number[] = [];
    left[0] = 1;
    for(let i = 1; i < arr.length; i++){ 
        left[i] = left[i - 1] * arr[i - 1];
    }

    const right: number[] = [];
    right[arr.length - 1] = 1;
    for( let i = arr.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * arr[i + 1];
    }

    const output: number[] = [];
    for( let i = 0; i < arr.length; i++) {
        output[i] = left[i] * right[i];
    }
    return output;
}