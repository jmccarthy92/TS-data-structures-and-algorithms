class GraphVertex {
	public data: number;
	public edges: GraphVertex[];

	constructor(data: number) {
		this.data = data;
        this.edges = [];
	}
}

function bfsDistance(graph: Record<number, GraphVertex>, start: GraphVertex): { endNode: GraphVertex, distance: number} {
	    let largestDistance = 0;
		let largestDistanceNode = start;
		const stack: any[] = [{ node: start, distance: 0 }];
		const visited = new Set();
		while(stack.length > 0) {
			 let {node , distance } = stack.pop();
			 if(distance > largestDistance) {
				 largestDistance = distance;
				 largestDistanceNode = node;
			 }
			 if(graph[node.data]){
				let edges = graph[node.data].edges;
				for(let i = 0; i < edges.length; i++) {
					if(!visited.has(edges[i].data)){
						stack.push({ node: edges[i], distance: distance + 1 });
					}
				}
			 }
			 visited.add(node.data);
		}
		return { distance: largestDistance, endNode: largestDistanceNode };
}

function largestPathfunction(arr: number[]){
    if(arr.length === 1) return 0;
    if(arr.length === 2) return 1;
    const g: Record<number, GraphVertex> = {};
    const root = arr.findIndex((a) => a === -1);
    g[root] = new GraphVertex(root);
    for(let i = 0; i < arr.length; i++) {
        if(i === root) continue;
        let newNode = new GraphVertex(i);
        g[i] = newNode;
        if(g[arr[i]]) {
            g[arr[i]].edges.push(newNode);
            g[i].edges.push(g[arr[i]])
        }
    }
    const { endNode, distance: d1 } = bfsDistance(g, g[root]);
    const { distance } = bfsDistance(g, endNode);
    return distance;
}

