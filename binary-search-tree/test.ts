type TNode = TreeNode | null;

class TreeNode {
    public left: TNode;
    public right: TNode;
    public value: number;

    public constructor(value: number) {
        this.left = null;
        this.right = null;
        this.value = value;
    }

}

const collect = (node: TNode, data: Record<number, Record<string, number>>, depth = 0) => {
    if(node === null) {
        return;
    }

    if(!data[depth]) data[depth] = { sum: 0, count: 0 };

    const sum = data[depth].sum + node.value;
    const count = data[depth].total + 1;
    data[depth] = { sum, count }

    collect(node.left, data, depth + 1);
    collect(node.right, data, depth + 1)

}

const avg_dfs = (node: TNode) => {
    const data: Record<number, Record<string, number>> = {};
    collect(node, data);
    return Object.values(data).map((datum: Record<string, number>): number => {
        return datum.sum / datum.total;
    });

}