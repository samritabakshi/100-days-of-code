//Reference video
//https://www.youtube.com/watch?v=13m9ZCB8gjw


var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left,p,q);
    const right = lowestCommonAncestor(root.right,p,q);
    return left && right ? root : left || right
 
};