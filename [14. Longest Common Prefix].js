/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix;
    for(let i=0;i<strs[0].length;i++){
        let curr = strs[0][i]
        for(let j=1;j<strs.length;j++){
            if(i === strs[j].length ||curr !== strs[j][i]){
                strs[0] = strs[0].substring(0,i);
            }
        }
    }
    return strs[0];
};