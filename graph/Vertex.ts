class Vertex<T> {
    private _value: T;
    public get value(): T {
        return this._value;
    }
    public set value(val: T) {
        this._value = val;
    }

    private _edges: Vertex<T>[];
    public get edges(): Vertex<T>[] {
        return this._edges;
    }
    public set edges(vals: Vertex<T>[]) {
        this._edges = vals;
    }

    public constructor(value: T) {
        this._value = value;
        this._edges = [];
    }

}