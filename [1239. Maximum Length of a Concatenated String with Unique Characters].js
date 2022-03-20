/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    if(arr.length === 0) return 0;
    let max = 0;

    function backtracking(i, memo = []) {
        if(i >= arr.length) return

        memo.push(arr[i]);
        max = Math.max(max, countMax(memo));
        backtracking(i + 1,memo);
        memo.pop();
        backtracking(i + 1, memo);
    };

    backtracking(0);
    return max;
};
const countMax = (arr) => {
    const arrToStr = arr.join('');
    const uniq = new Set(arrToStr)
    return arrToStr.length === uniq.size ? uniq.size: 0; 
};
