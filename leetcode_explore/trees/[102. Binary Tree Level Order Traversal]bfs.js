var levelOrder = function(root) {
    console.log(root)
    if (!root){
        return [];
    } else{
        var q = [];
        var res = [];
        q = [root];
        while(q.length >0) {
            var temp = []
            size = q.length;
            for(var i=0;i< size; ++i){
                var curr = q.shift();
                temp.push(curr.val);
                if(curr.left !== null ){
                    q.push(curr.left);
                }
                if(curr.right !== null){
                    q.push(curr.right);
                }
            }
            res.push(temp)
        }
        return res;
    }
    
};