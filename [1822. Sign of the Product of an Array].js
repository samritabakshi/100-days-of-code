/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let p =1;
    for(let i=0;i<nums.length;i++){
        p *= nums[i]
    }
    if(p > 0) return 1
    else if(p < 0) return -1
    else return 0
};