/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let len1 = s1.length, len2=s2.length;
    let dp = [...new Array(len1+1)].map(() => new Array(len2+1).fill(0));
    
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = dp[i-1][0] + s1.codePointAt(i-1);
    }
    for (let j = 1 ; j <= len2; j++) {
        dp[0][j] = dp[0][j-1] + s2.codePointAt(j-1);
    }
    for(let i=1;i<=len1;i++){
        for(let j=1;j<=len2;j++){
            if(s1[i-1] === s2[j-1]){
                dp[i][j] = dp[i-1][j-1]
            }else{
                dp[i][j] = Math.min(s1.codePointAt(i-1) + dp[i-1][j] , s2.codePointAt(j-1) + dp[i][j-1])
            }
        }
    }
     // console.log(dp)
    return dp[len1][len2]
};

    
