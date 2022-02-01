/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max_sum = 0
    const max_gain = (root) => {
        if(!root){
            return 0;
        }
        if(!root.left && !root.right){
            return 1;
        }
        let left_gain = max_gain(root.left)
        let right_gain = max_gain(root.right)
         max_sum = Math.max(max_sum, left_gain + right_gain)
         return (1 + Math.max(left_gain, right_gain))
    }
    max_gain(root)
    return max_sum
};