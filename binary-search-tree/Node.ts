export class TreeNode<T> {
    
    private _value: T;
    public get value(): T {
        return this._value;
    }
    public set value(val: T) {
        this._value = val;
    }

    private _left: TreeNode<T> | null;
    public get left(): TreeNode<T> | null {
        return this._left;
    }
    public set left(node: TreeNode<T> | null) {
        this._left = node;
    }

    private _right: TreeNode<T> | null;
    public get right(): TreeNode<T> | null{
        return this._right;
    }
    public set right(node: TreeNode<T> | null) {
        this._right = node;
    }

    constructor(val: T) {
        this._value = val;
        this._left = null;
        this._right = null;
    }

}