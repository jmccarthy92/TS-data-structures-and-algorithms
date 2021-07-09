class Graph<T> {
    private _adjacencyList: Map<T, Vertex<T>>;

    public constructor() {
        this._adjacencyList = new Map();
    }

    public addVertex(vertex: T): boolean {
        const exists = this.findVertex(vertex);
        if(exists){
            return false;
        }
        this._adjacencyList.set(vertex, new Vertex(vertex));
        return true;
    }

    public addEdge(valueA: T, valueB: T): boolean {
        const vertexA = this.findVertex(valueA);
        const vertexB = this.findVertex(valueB);
        if(!vertexA) throw new Error('Invalid argument for valueA');
        if(!vertexB) throw new Error('Invalid argument for valueB')
        vertexA.edges.push(vertexB);
        vertexB.edges.push(vertexA);
        return true;
    }

    public findVertex(value: T): Vertex<T> | undefined {
        return this._adjacencyList.get(value);
    }

    public bfs(start: T, end: T): boolean {
        const visited: Set<T> = new Set();
        const queue: Vertex<T>[] = [];
        const startNode = this.findVertex(start);
        if(!startNode) return false;
        queue.push(startNode);
        while(queue.length > 0) {
            let current = queue.shift();
            if(current?.value === end){
                return true;
            }
            if(current?.edges) {
                for(let edge of current.edges) {
                    if(!visited.has(edge.value)){
                        queue.push(edge);
                    }
                }
                visited.add(current.value);

            }
        }
        return false;

    }

    public dfs(start: T, end: T): boolean {
        const visited: Set<T> = new Set();
        const stack: Vertex<T>[] = [];
        const startNode = this.findVertex(start);
        if(!startNode) return false;
        stack.push(startNode);
        while(stack.length > 0) {
            let current = stack.pop();
            if(current?.value === end){
                return true;
            }
            if(current?.edges) {
                for(let edge of current.edges) {
                    if(!visited.has(edge.value)){
                        stack.push(edge);
                    }
                }
                visited.add(current.value);

            }
        }
        return false;

    }
}


