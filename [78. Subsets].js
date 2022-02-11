/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [],sub =[];
    function dfs(i){
        if(i>= nums.length){
            result.push([...sub])
            return 
        }
        sub.push(nums[i])
        dfs(i+1)
        sub.pop()
        dfs(i+1)
    }
    dfs(0)
    return result
};
