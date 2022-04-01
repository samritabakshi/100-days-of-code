/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    let colours = costs[0].length,dp=[];
  
   for(let i=1;i<costs.length;i++){
       for(let j=0;j<colours;j++){
           let best = Number.POSITIVE_INFINITY
           for(let k=0;k<colours;k++){
               if(j==k) {
                   continue;
               }
               best = Math.min(best,costs[i-1][k])
           }
        costs[i][j] += best
       }
   }
    return Math.min.apply(Math, costs[costs.length-1]);
};