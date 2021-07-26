export function permute(str: string, answer: string, permutations: string[]): void {
    if(str.length === 0) {
        permutations.push(answer); 
        return;
    }

    for(let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const leftSubStr = str.substring(0, i);
        const rightSubStr = str.substring(i + 1);
        const rest = leftSubStr + rightSubStr;
        permute(rest, answer + char, permutations);
    }
}

export function getPermutations(str: string): string[] {
    const results: string[] = []
    permute(str, '', results);
    return results;
}