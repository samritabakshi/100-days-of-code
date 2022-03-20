/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [];
    let sum = 0
    let rand = 1;
    for(let i =0;i<n-1;i++){
        arr.push(rand);
        sum += rand
        rand++;
    }
    arr.push(0-sum)
    console.log(arr)
    return arr
};