function isValid(str: string) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            count++;
        }
        if(str[i] === ")") {
            count--;
        }
    } 
    return count === 0;
}

function invalidParentheses(str: string): string[] {
    // if empty string or is already valid
    if(!str.length || isValid(str)) return [str];
    const set: Set<string> = new Set();
    for(let i =0; i < str.length; i++) {
        const temp = str.slice(0, i) + str.slice(i + 1, str.length);

        if(isValid(temp)) {
            set.add(temp);
        }
    }
    return [...set];

}