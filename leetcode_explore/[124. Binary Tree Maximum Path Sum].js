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
var maxPathSum = function(root) {
    let max_sum = -Infinity
    const max_gain = (root) => {
        if(!root){
            return 0;
        }
        let left_gain = Math.max(max_gain(root.left),0)
        let right_gain = Math.max(max_gain(root.right),0)
         let price_newpath = root.val + left_gain + right_gain
         max_sum = Math.max(max_sum, price_newpath)
         return root.val + Math.max(left_gain, right_gain)
    }
    max_gain(root)
    return max_sum
};
