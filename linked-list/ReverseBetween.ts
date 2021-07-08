

function reverseBetween(node: LinkNode<number> | null, start: number, end: number){
    if(!node) return node;
    if(start === end) return node;
    let prev = null;
    let current: LinkNode<number> | null = node;
    let counter = 1;
    
    while(current.next) {
        if(counter === start) break;
        prev = current;
        current = current.next;
        counter++;
    }
    let next = null;
    let last = null;
    let first = current;
    while(current && counter <= end) {
        next = current.next;
        current.next = last;
        last = current;
        current = next;
        counter++;
    }
    if(prev) prev.next = last;
    first.next = current;
    if(first === node) node = last;
    return node;
}