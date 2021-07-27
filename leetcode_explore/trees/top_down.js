// 1. return if root is null
// 2. if root is a leaf node:
// 3.     answer = max(answer, depth)         // update the answer if needed
// 4. maximum_depth(root.left, depth + 1)     // call the function recursively for left child
// 5. maximum_depth(root.right, depth + 1)  