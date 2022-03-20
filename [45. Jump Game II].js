/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res=0,l=0,r=0,far;
     while(r < nums.length - 1){
         far=0
         for(let i=l;i<=r;i++){
             far = Math.max(far, i+nums[i]);
         }
         l=r+1
         r=far
         res +=1
     }
     return res
 };