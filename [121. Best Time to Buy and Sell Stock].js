/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit=0;
    let lowest_sell=prices[0];
    for(let i=1;i<prices.length;i++){
        lowest_sell = Math.min(lowest_sell,prices[i])
        max_profit= Math.max(max_profit, prices[i]-lowest_sell)
    }
    return max_profit
};


