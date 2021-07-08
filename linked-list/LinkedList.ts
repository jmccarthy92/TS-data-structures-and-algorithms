class LinkedList<T> {
    public head: LinkNode<T> | null;

    constructor(data?: T) {
        this.head = data ? new LinkNode(data) : null;
    }

    public prepend(data: T): boolean {
        const newHead = new LinkNode(data);
        newHead.next = this.head;
        this.head = newHead;
        return true;
    }

    public append(data: T): boolean {
        
        if(this.head === null) {
            this.head = new LinkNode(data);
            return true;
        }

        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        const newNode = new LinkNode(data);
        current.next = newNode;
        newNode.prev = current;
        return true;
    }


    public removeSingle(data: T): boolean {
        if(this.head === null) return false;
        if(this.head.value === data){ 
            this.head = this.head.next;
            return true;
        }
        let current = this.head;

        while(current.next !== null) {
            if(current.next.value === data ) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public remove(data: T): boolean {
        if(this.head === null) return false;

        let current = this.head;

        while(current.next !== null) {
            if(current.value === data ) {
                if(current.prev) current.prev.next = current.next;
                current.next.prev = current.prev;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public printAllNodes(): void {
        const nodes: T[] = [];
        if(this.head === null) {
            console.log(nodes);
            return;
        }
        let current = this.head;
        while(current.next !== null) {
            nodes.push(current.value);
            current = current.next;
        }
        console.log(`[ ${nodes.join(', ')} ]`);
    }
    
}