
//Important for FAANG
//reference for problem
//https://www.youtube.com/watch?v=xLQKdq0Ffjg&t=606s
var postorderTraversal = function(root) {
    //recurive
    // var res=[];
    // const traversal = (node) => {
    //     var curr =node;
    //     if(curr == null){
    //         return;
    //     }
    //     traversal(curr.left);
    //     traversal(curr.right);
    //     res.push(curr.val)
    // };
    // traversal(root);
    // return res;


    //stack
    var res = [];
    var stack = [];
    let curr = root;
    while (curr !== null || stack.length > 0) {
       if(curr !== null){
           stack.push(curr);
           curr = curr.left;
       }
        else{
            var temp = stack[stack.length - 1].right;
            console.log(stack[stack.length - 1]);
            if(temp === null){
                temp = stack.pop();
                res.push(temp.val);
                while(stack.length >0 && temp === stack[stack.length - 1].right){
                    temp = stack.pop();
                    res.push(temp.val);
                }
            }else{
               curr = temp; 
            }
        }
        console.log(res)
    }
    return res;
};