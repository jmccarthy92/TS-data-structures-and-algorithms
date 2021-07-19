function prettifyJSONString(str: string){
    const results = [];
    let line = '';
    let tabs = 0;
    const strNoSpaces = str.replace(/\s/g, '')
    for(let char of strNoSpaces) {
        if(char === '{' || char === "[") {
            if(line) results.push(`${repeatTabs(tabs)}${line}`);
            results.push(`${repeatTabs(tabs)}${char}`);
            tabs++;
            line = '';
        } else if (char === '}' || char === ']') {
            results.push(`${repeatTabs(tabs)}${line}`)
            tabs--;
            results.push(`${repeatTabs(tabs)}${char}`);
            line = '';
        } else if( char === ',') {
            results.push(`${repeatTabs(tabs)}${line}${char}`);
            line = '';
        } else {
            line += char;
        }
    }
    return results;
}

function repeatTabs(num: number) {
    return "\t".repeat(num);
}