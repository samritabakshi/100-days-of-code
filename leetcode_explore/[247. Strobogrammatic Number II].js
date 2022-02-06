/**
 * @param {number} n
 * @return {string[]}
 */
let reversiblePairs = [
    ['0', '0'], ['1', '1'], 
    ['6', '9'], ['8', '8'], ['9', '6']
];
let hash_map = ['1','8','0']
var generateStroboNumbers = function(n,final_length) {
  
    
    if(n==0){
      return [""]  
    }
    if(n==1){
        return hash_map
    }
    let prev = generateStroboNumbers(n-2,final_length);
    let curr = [];
    prev.map(p => {
        reversiblePairs.forEach((pair) => {
            if (pair[0] != '0' || n != final_length) {
                curr.push(pair[0] + p + pair[1]);
            }
        });
    })
    return curr
    
};

let findStrobogrammatic = function(n) {
    return generateStroboNumbers(n, n);
};