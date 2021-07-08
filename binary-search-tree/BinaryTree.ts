import { TreeNode } from "./Node";

export class BinaryTree<T> {
    private _root: TreeNode<T> | null = null;
    public get root(): TreeNode<T> | null {
        return this._root;
    }
    public set root(node: TreeNode<T> | null) {
        this._root = node;
    }

    constructor(val?: T) {
        if(val){ 
            const node = new TreeNode(val);
            this._root = node;
        }
    }

    public add(value: T): boolean {
        const newNode = new TreeNode(value);

        let currentNode = this.root;
        if(currentNode === null) {
            this.root = newNode;
            return true;
        }

        let traversing = true;
        while(traversing) {
            if(currentNode.value === newNode.value) {
                traversing = false;
                return false;
            } else if( newNode.value < currentNode.value ) {
                if(currentNode.left === null) {
                    currentNode.left = newNode;
                    traversing = false;
                    return true;
                }
                currentNode = currentNode.left;
            }else if(newNode.value > currentNode.value) {
                if(currentNode.right  === null) {
                    currentNode.right = newNode;
                    traversing = false;
                    return true;
                }
                currentNode = currentNode.right;
            }
        }
        return false;
    }


    public breadthFirstSearch(value: T): TreeNode<T> | null {
        const queue: TreeNode<T>[] = [];
        const visited: T[] = [];
        if(!this.root) return null;
        queue.push(this.root);

        while(queue.length !== 0) {
            const currentNode = queue.shift();
            if(!currentNode) break;
            if(currentNode.value === value) return currentNode;
            visited.push(currentNode.value);

            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        return null;
       
    }


    public breadthFirstSearchAll(): T[] {
        const queue = [];
        const visited: T[] = [];
        if(!this.root) return visited;
        queue.push(this.root);

        while(queue.length !== 0) {
            const currentNode = queue.shift();
            if(!currentNode) break;
            visited.push(currentNode.value);

            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        return visited;
       
    }
    

    public dfsPreOrderIterative(): T[] {
        if(this._root === null) return [];
        const stack = [];
        const visited: T[] = [];
        stack.push(this._root);

        while(stack.length !== 0) {
            const currentNode = stack.pop();
            if(!currentNode) break;
            visited.push(currentNode.value);

            if(currentNode.right !== null) {
                stack.push(currentNode.right);
            }
            if(currentNode.left !== null) {
                stack.push(currentNode.left);
            }
        }
        return visited;

    }

    public dfsPreOrderRecursive(): T[] {
        const visited: T[] = [];
        const currentNode = this.root;
        if(currentNode) {
            this.traversePreOrder(currentNode, visited);
        }
        return visited;
    }

    private traversePreOrder(node: TreeNode<T> | null, visited: T[]): void {
        if(node === null) return;
        visited.push(node.value);
        this.traversePreOrder(node.left, visited);
        this.traversePreOrder(node.right, visited);
    }

    public dfsPostOrderRecursive(): T[] {
        const visited: T[] = [];
        const currentNode = this.root;
        if(currentNode) {
            this.traversePostOrder(currentNode, visited);
        }
        return visited;
    }

    private traversePostOrder(node: TreeNode<T> | null, visited: T[]): void {
        if(node === null) return;
        this.traversePostOrder(node.left, visited);
        this.traversePostOrder(node.right, visited);
        visited.push(node.value);
    }

    public dfsInOrderRecursive(): T[] {
        const visited: T[] = [];
        const currentNode = this.root;
        if(currentNode) {
            this.traverseInOrder(currentNode, visited);
        }
        return visited;
    }

    private traverseInOrder(node: TreeNode<T> | null, visited: T[]): void {
        if(node === null) return;
        this.traverseInOrder(node.left, visited);
        visited.push(node.value);
        this.traverseInOrder(node.right, visited);
    }


    public dfsInOrder(node: TreeNode<T> | null, visited: T[]): void {
        if(!node) return;
        this.dfsInOrder(node.left, visited);
        visited.push(node.value);
        this.dfsInOrder(node.right, visited);

    } 
}