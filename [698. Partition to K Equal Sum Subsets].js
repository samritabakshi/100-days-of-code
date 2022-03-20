/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {

    let sum = 0
    for(const n of nums) sum+=n
    if(sum%k!==0) return false
    let used = new Array(nums.length).fill(false)
    let target = Math.floor(sum/k)
    
    function backtrack (i,k,subset_sum){
        if(k==0) {
            return true
        }
        if(subset_sum === target){
           return backtrack(0,k-1,0)
        }
        for(let l=i;l<nums.length;l++){
            if(used[l] || (nums[l] + subset_sum) > target) {
                continue;
            }
            used[l] = true;
            if(backtrack(l+1, k, subset_sum + nums[l])){
                return true;
            }
            used[l] = false;
        }
        return false;
    }
    return backtrack(0,k,0)
};