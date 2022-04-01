/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==0) return ;
    if(nums.length==1) return nums[0];
    return Math.max(rob_house(nums,0,nums.length-2),rob_house(nums,1,nums.length-1))
    
    
};

function rob_house(nums,start,end){
     let d1=0,d2=0
    for(let i=start;i<=end;i++){
        let temp =  Math.max(nums[i]+d1,d2)
        d1 = d2
        d2 = temp;
    }
    return d2;
}