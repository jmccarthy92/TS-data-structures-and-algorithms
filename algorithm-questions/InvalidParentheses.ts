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

const removeInvalidParentheses = function(s: string): string[] {
    const queue: string[] = [];
    const visited: Set<string> = new Set();
    queue.push(s);
    const result: string[] = [];
    let found = false;
      
    while(queue.length !== 0) {
      var str: string = queue.shift() as string;
      if(isValid(str)) {
        result.push(str);
        return result;
      } else if(!found){   
        for(let i = 0; i < s.length; i++) {
          if(str[i] === "(" || str[i] === ")") {
            var subStr = str.slice(0, i) + str.slice(i + 1, s.length);
            if(!visited.has(subStr)) {
              queue.push(subStr);   
              visited.add(subStr);
            }
          }    
        }
      }
    }
    
    return result;
  };