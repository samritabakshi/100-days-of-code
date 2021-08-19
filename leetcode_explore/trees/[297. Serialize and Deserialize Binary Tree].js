/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var arr=[];
    serializeHelper(root);
    function serializeHelper(node)
    {
        if(node === null)
        {
            arr.push('null');
            return;
        }
        // preorder 
        arr.push(node.val);
        serializeHelper(node.left);
        serializeHelper(node.right);
    }
    return arr.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
     var arr = data.split(",");
  function deserializeHelper() {
    if (arr.length === 0) {
      return null;
    }
    var val = arr.shift(); // keep shift the first index 
    if (val === "null") {
      return null;
    }
    var node = new TreeNode(val);
    node.left = deserializeHelper();
    node.right = deserializeHelper();
    return node;
  }
  return deserializeHelper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */