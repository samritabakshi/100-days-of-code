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
var countNodes = function(root) {
    let count_level = 0;
    function check_level(root){
        if(!root) return
     
        if(root.left) 
        {   
            check_level(root.left)
            
        }
        if(root.right) 
        {
            check_level(root.right)
        }
        count_level++
        
    }
    check_level(root)
    
    return count_level
};