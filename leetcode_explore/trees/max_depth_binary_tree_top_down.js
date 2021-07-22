//Top Down via preorder
//Reference video https://www.youtube.com/watch?v=D2cFSDfg0So


var maxDepth = function(root) {
    if(root == null) return 0;
    var left_height = maxDepth(root.left);
    var right_height = maxDepth(root.right);
    return Math.max(left_height,right_height) + 1;
};