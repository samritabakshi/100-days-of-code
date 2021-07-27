//https://www.youtube.com/watch?v=K7LyJTWr2yA
//https://www.youtube.com/watch?v=XV7Sg2hJO3Q

var isSymmetric = function(root) {
    if (root == null) return true;
    return checkSymmetric(root.left,root.right);
   
};

function checkSymmetric(left, right){
    if(left == null || right == null) return left == right;
    if(left.val !== right.val) return false;
    return checkSymmetric(left.left,right.right) && checkSymmetric(left.right,right.left);
}