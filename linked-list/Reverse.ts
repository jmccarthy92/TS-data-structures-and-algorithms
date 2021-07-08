export function reverse(node: any) {
    let current = node;
    let next = null;
    let prev = null;
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};