/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let up=1,down=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            up=down+1;
        }else if(nums[i-1]>nums[i]){
            down=up+1;
        }
    } 
      return Math.max(down, up);
 };