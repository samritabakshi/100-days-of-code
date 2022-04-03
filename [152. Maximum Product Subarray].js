/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max_product = nums[0];
    let min_product = nums[0];
    let result = max_product;
    for(let i=1;i<nums.length;i++){
        let temp_max = Math.max(nums[i],Math.max(nums[i]*max_product, nums[i]*min_product))
        min_product = Math.min(nums[i],Math.min(nums[i]*max_product, nums[i]*min_product))
        max_product = temp_max;
        result = Math.max(result,max_product)
    }
    return result
};