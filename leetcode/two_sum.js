var twoSum = function(nums, target) {
    if(nums.length >=2 && nums.length <= 10000){
            for(i=0;i<nums.length;i++){
            for(j=i+1;j<nums.length;j++){
                if(nums[j] == target - nums[i]) {
                    return [i,j];
                }
            }
        }
    } 
};
console.log(twoSum([0,0],0))
