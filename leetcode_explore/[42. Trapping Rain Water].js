/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0;
    let r = height.length-1;
    let leftMax = height[l], rightMax=height[r],res=0;
    while(l<r){
        if(leftMax<=rightMax){
            l++;
            leftMax = Math.max(leftMax,height[l])
            res += (leftMax - height[l])>0 ? leftMax - height[l] : 0
        }else{
            r--;
            rightMax= Math.max(rightMax,height[r])
            res += (rightMax - height[r])>0 ? rightMax - height[r] : 0
        }
    }
    return res;
};