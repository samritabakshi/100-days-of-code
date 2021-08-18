/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function(root) {
    if (!root) return null;
     let q = [];
     q=[root]
     while(q.length > 0){
         let size = q.length;
         let prevRight = null;
         for(let i=0; i<size ; i++){
             let curr = q.shift();
             if(prevRight) prevRight.next = curr.left;
             if(curr.left !== null){
                 if(curr.right !== null) {
                  curr.left.next = curr.right
                 }else{
                     prevRight = curr.left
                 }
                 q.push(curr.left)
             }
             if(curr.right !== null){
                 if(prevRight) {
                     prevRight.next = curr.right;
                 }
                  prevRight = curr.right;
                 q.push(curr.right)
             } 
            
         }  
         
     }
     return root;
 };