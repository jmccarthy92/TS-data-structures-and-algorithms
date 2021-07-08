type HashMap = Record<string, string>;
function isBalanced(s: string): string {
    // Write your code here
    // {[(])}
    //  {[(
    //  ])}
     
    // {[()]}  
    //  {[(  
    //  )]}
    //  
    // stack = [{]
    const stack: string[] = [];
    const pushCharacters: HashMap = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    const popCharacters: HashMap = {
        '}': '{',
        ']': '[',
        ')': '(',
    }

    // [1,2,3] -> pop -> [2,3] -> push(5) -> [5,2,3]
    for(let i = 0; i < s.length; i++) {
        let character = s.charAt(i);
        if(pushCharacters[character]) {
            stack.push(character);
        } else {
            let poppedValue = stack.pop();
            if(poppedValue !== popCharacters[character]) return 'NO';
        }
    }
    console.log(stack);
    return stack.length === 0 ? 'YES' : 'NO';
}
