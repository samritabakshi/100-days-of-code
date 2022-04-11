/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(arr, target) {
    let count = 0;
    arr.sort((a, b) => a - b);
    for(let i=0;i<arr.length-2;i++){
      let curr = arr[i]
      let left = i+1;
      let right = arr.length-1;
      while(left<right){
        let curr_sum = curr + arr[left] + arr[right];
        if(curr_sum < target){
          count += right - left;
        left += 1;
        }else{
          right--;
        }
      }
    }
    return count;
  };