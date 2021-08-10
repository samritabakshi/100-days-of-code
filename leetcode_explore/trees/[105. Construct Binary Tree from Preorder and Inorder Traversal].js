//Refernce video - https://www.youtube.com/watch?v=GeltTz3Z1rw&t=370s
// check Screenshot to understand how pointer for the preorder array will be set 


//works but difficult to understand
const buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    let i = 0;

    while (inorder[i] != preorder[0])
        i++;
    console.log(i)
    return new TreeNode(preorder[0],
        buildTree(preorder.slice(1, 1 + i), inorder.slice(0, i)),
        buildTree(preorder.slice(1 + i), inorder.slice(i + 1))
    );

};