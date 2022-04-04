/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function(nums) {
    const MIN = Number.MIN_SAFE_INTEGER;
 const n = nums.length;
 
 const postFixMax = [];
 let maxSum = 0;
 
 for (let i = n - 1; i >= 0; i--) {
     // console.log(i,maxSum,maxSum + nums[i], nums[i])
     postFixMax[i] = maxSum;
     maxSum = Math.max(maxSum + nums[i], nums[i]);
 }
 // console.log(postFixMax)
 
 let resMax = MIN;
 maxSum = 0;
 
 for (let i = 0; i < n; i++) {
     const curr = nums[i];
     const squared = curr * curr;

     const sum1 = maxSum + squared + postFixMax[i];
     const sum2 = maxSum + squared;
     const sum3 = squared + postFixMax[i];

     resMax = Math.max(resMax, sum1, sum2, sum3);
     maxSum = Math.max(maxSum + nums[i], nums[i]);
 }
 
 return resMax;
};