function evaluateExpressions(arr: string[]){
    if(arr.length < 1) return 0;
    let stack: number[] = [];
    const operands: Record<string,string> = {
        "+": "+",
        "-": "-",
        "*": "*",
        "/": "/",
    }
    for(let a of arr) {
        if(operands[a]) {
            let operandB = stack.pop() as number;
            let operandA = stack.pop() as number;
            let result = 0;
            switch(a) {
                case operands["+"]:
                    result = operandA + operandB
                    break;
                case operands["-"]:
                    result = operandA - operandB
                    break;
                case operands["*"]:
                    result = operandA * operandB
                    break;
                case operands["/"]:
                    result = Math.floor(operandA / operandB);
                    break;
            }
            stack.push(result)
        }  else {
            stack.push(+a);
        }
    }
    return stack.pop();
}