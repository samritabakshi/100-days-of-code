var preorderTraversal = function(root) {
    const result = [];
    const traversal = function(node){
        if (node === null)
        {
            return;
        }
        result.push(node.val);
        traversal(node.left);
        traversal(node.right);
    };
    traversal(root);
    return result;
};


const preorderTraversalWithIteration = (root) =>
{
    const result = [];
    const stack = [root];
    
    while (stack.length > 0)
    {
        const cur = stack.pop();
        
        if (cur === null)
        {
            continue;
        }
        
        result.push(cur.val);
        
        stack.push(cur.right);
        stack.push(cur.left);
    }
    
    return result
}

var preorderTraversal = preorderTraversalWithIteration;