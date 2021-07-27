//Imp for Google
// reference Link: https://www.youtube.com/watch?v=7HgsS8bRvjo

function is_unival(root,count){
    if(root == null) return true;
    if(root.left != null && root.left.val === root.val) return false;
    if(root.right != null && root.right.val === root.val) return false;
    if(is_unival(root.left) && is_unival(root.right)) return true;
    return false;
    
}
var countUnivalSubtrees = function(root) {
    var total_count;
    if(root == null) return 0;
    total_count = countUnivalSubtrees(root.left) + countUnivalSubtrees(root.right);
    if(is_unival(root)){
        total_count+=1;
    }
    return total_count
};
