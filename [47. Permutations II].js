/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result= [];
    let set = new Set(nums);
    let map = {}
    nums.forEach((num)=>{
        map[num] ? map[num]++ : map[num] = 1;
    })
    
    function backtrack(combinations){
        if(combinations.length===nums.length){
            result.push([...combinations]);
            return;
        }
        for(let num of set){
            if(map[num]){
                combinations.push(num)
                map[num]--;
                backtrack(combinations)
                combinations.pop();
                map[num]++;
            }
        }
    }
    backtrack([])
    return result;
};