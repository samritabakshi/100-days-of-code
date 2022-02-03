/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    console.log(digits)
    let num = BigInt(digits.join("")) + 1n
    // console.log(num)
    // console.log(num.toString().split(""))
    let res = Array.from(String(num), Number)
    return res
    
    
//     const digitsArray  = digits.join(''); 
//     const arrToInt = BigInt(digitsArray) ;
//     const plusone = arrToInt + 1n;
//     const plusoneResult =  Array.from(String(plusone), Number); 
    
//     return plusoneResult;
};