export function combinations(num: number) {
    const result: number[][] = [];
    combinationsRecursive([], num.toString().split('').map(num => +num), result);
    return result;
}

function combinationsRecursive(active: number[], rest: number[], result: number[][]) {
    if(!rest.length) {
        if(active.length) result.push(active);
    } else {
        combinationsRecursive([...active, rest[0]], rest.slice(1,rest.length), result)
        combinationsRecursive(active, rest.slice(1,rest.length), result)
    }
}



export function colorfulNumbers(num: number) {
    const nums = num.toString().split('').map(num => +num);
    const map = new Set(nums);
    const result: number[][] = [];
    combinationsRecursive([], num.toString().split('').map(num => +num), result);
    const validResults = result.filter((res) => res.length > 1);
    // console.log(result);
    for(let combinations of validResults) {
        const product = combinations.reduce((acc, comb) => acc * comb, 1);
        if(map.has(product)) return "Not Colorful."
        else map.add(product);
     }
     return 'Colorful';
    
}