var minMoves2 = function(nums) {
    nums.sort((a,b)=> a-b)
    let total = 0
    for(let i=0;i<nums.length;i++){
       total += Math.abs(nums[parseInt((nums.length)/2)] - nums[i])
    }
    return total
};