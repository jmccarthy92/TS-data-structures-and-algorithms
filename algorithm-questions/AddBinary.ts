function addBinaryStrings(binaryA: string, binaryB: string): string{
    let greater = binaryA.length >= binaryB.length ? binaryA : binaryB;
    let lesser = binaryA.length < binaryB.length ? binaryA : binaryB;
    let greaterStack = greater.split('');
    let lesserStack = lesser.split('');
    let carry = 0;
    let resultStack = [];
    while(greaterStack.length || lesserStack.length) {
        let a = greaterStack.length ? parseInt(greaterStack.pop() as string, 10) : 0;
        let b = lesserStack.length ? parseInt(lesserStack.pop() as string, 10) : 0;
        let running = a + b + carry;
        if(running === 3) {
            resultStack.push(1);
            carry = 1;
        } else if (running === 2) {
            resultStack.push(0);
            carry = 1;
        } else {
            resultStack.push(running);
            carry = 0;
        }
    }
    if(carry === 1) resultStack.push(carry); 
    return resultStack.reverse().join('')
}