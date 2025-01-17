/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(arr, target_sum) {
    arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = target_sum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) { // we've found a triplet with an exact sum
        return target_sum; // return sum of all the numbers
      }

      // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
      if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
        smallest_difference = target_diff; // save the closest and the biggest difference
      }


      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return target_sum - smallest_difference;

};