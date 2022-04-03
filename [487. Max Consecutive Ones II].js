/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max_seq=0,left=0,right=0,num_zeros=0;
   while(right < nums.length){
       if(nums[right] == 0){
           num_zeros++;
       }
       while(num_zeros == 2){
          if (nums[left] == 0) {
                num_zeros--;
           }
           left++;
       }
       max_seq =  Math.max(max_seq,right-left+1);
       right++;
   }
    return max_seq 
};