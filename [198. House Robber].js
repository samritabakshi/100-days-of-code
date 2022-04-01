/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let d1=0,d2=0
    for(let i=0;i<nums.length;i++){
        let temp =  Math.max(nums[i]+d1,d2)
        d1 = d2
        d2 = temp;
    }
    return d2;
};