/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let result = [],maxFreq=0;
    let dp = Array(nums.length).fill(1);
    let freq = Array(nums.length).fill(1);
    for(let i=1;i<nums.length;i++){
        let lenOfLIS = 1;
        for(let j=0;j<i;j++){
            if(nums[i] > nums[j]){
                lenOfLIS = Math.max(lenOfLIS, dp[j] + 1);
            }
        }
        let freqAtI = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[j] + 1 === lenOfLIS) {
                freqAtI += freq[j];
            }
        }
        dp[i] = lenOfLIS;
        freq[i] = freqAtI === 0 ? 1 : freqAtI;
    }
    let maxLen = Math.max(...dp);
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] === maxLen) {
            maxFreq += freq[i];
        }
    }
    return maxFreq;
};