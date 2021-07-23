interface Array<T> {
    peak(): T;
}

Array.prototype.peak = function() {
    return this[this.length - 1];
}

function candyCrush(input: string): string {
  const stack = [];
  stack.push(input[0]); // a
  let j = 1;
  for(let i = 1; i < input.length; i += j) { 
       let tos = stack.peak(); 
       if(input[i] === tos) {
         stack.pop(); 
         while( tos === input[i + j]) {  
              j++; 
         }
       } else {
         stack.push(input[i]);
       }
  }
  return stack.join('');
}


candyCrush('abbba');
candyCrush('ab');
candyCrush('abbbaa');
