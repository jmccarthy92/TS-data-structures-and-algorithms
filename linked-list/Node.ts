class LinkNode<T> {
    public value: T;
    public prev: LinkNode<T> | null;
    public next: LinkNode<T> | null;

    constructor(data: T) {
        this.value = data;
        this.prev = null;
        this.next = null;
    }
}