/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    
    const map = new Map(), results = {};
       
     for(let i=0; i<nums.length; i++){
           map.set(nums[i], (map.get(nums[i]) || 0) + 1)
       }
       const keys = Array.from(map.keys()).sort((a,b) => a<b ? -1 : 1)
       for(let i=0; i<keys.length; i++){
           const twoPrevKey = keys[i]-keys[i-1] === 1 ? keys[i-2] : keys[i-1];
           results[keys[i]] = Math.max((twoPrevKey ? results[twoPrevKey] || 0 : 0) + keys[i]*map.get(keys[i]), i>0 ? results[keys[i-1]] || 0 : 0)
       }
       return Math.max(results[keys[keys.length-1]] || 0, results[keys[keys.length-2]] || 0)
   };
   
   