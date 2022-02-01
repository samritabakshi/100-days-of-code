//Micrsoft and google
//Concise solution
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;

    let root = postorder[postorder.length - 1];
    let pivot = inorder.indexOf(root);

    return {
        val: root,
        left: buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot)),
        right: buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1))
    };
};
//First solution I thought of!
var buildTree = function(inorder, postorder) {
    if(!inorder.length || !postorder.length) {
        return null;
    }
    const value = postorder[postorder.length - 1];
    let i = 0;
    for(i = 0; i < inorder.length; ++i) {
        if(inorder[i] === value) {
            break;
        }
    }
    const node = new TreeNode(value);
    node.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
    node.right = buildTree(inorder.slice(i + 1, inorder.length),
                           postorder.slice(i, postorder.length - 1));
    return node;
};