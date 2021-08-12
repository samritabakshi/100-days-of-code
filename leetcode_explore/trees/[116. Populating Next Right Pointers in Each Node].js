//pretty much figured on my own // happy :)

var connect = function(root) {
    if (!root) return null;
     let q = [];
     q=[root]
     while(q.length > 0){
         let size = q.length;
         let prevRight = null;
         for(let i=0; i<size ; i++){
             let curr = q.shift();
             if (prevRight) prevRight.next = curr.left;
             if(curr.left !== null){
                 curr.left.next = curr.right
                 q.push(curr.left)
             }           
             if(curr.right !== null){
                  prevRight = curr.right;
                 q.push(curr.right)
             } 
            
         }  
         
     }
     return root;
 };