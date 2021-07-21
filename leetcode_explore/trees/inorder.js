// Reference video
// https://www.youtube.com/watch?v=nzmtCFNae9k


var inorderTraversal = function(root) {

    // recursive method
    var arr =[]
    const traversal = (node) => {
        if(node === null ) {return};
        traversal(node.left)
        arr.push(node.val);
        traversal(node.right)
    }
    traversal(root);
    return arr
};

    //stack method

var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let curr = root;
    stack = [root]
    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};