interface StackItem {
    node: TreeNode;
    depth: number;
}

function minimumDepth(treeNode: TreeNode): number{
    if(!treeNode) return 0;
    const stack: StackItem[] = [{ node: treeNode, depth: 1 }];
    let min = -1;
    while(stack.length) {
        let { node, depth } = stack.pop() as StackItem;
        if(node.left) {
            stack.push({node: node.left, depth: depth + 1});
        }
        if(node.right) {
            stack.push({node: node.right, depth: depth + 1});
        }
        if(!(node.right || node.left)) {
            if(min < 0) min = depth;
            else min = Math.min(min, depth);
        }
    }
    return min;
}