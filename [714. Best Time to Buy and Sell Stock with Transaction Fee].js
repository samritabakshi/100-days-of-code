/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    //     const len = prices.length;
    //   const dp = new Array(len).fill([0, 0]);
    
    //   dp[0][0] = -prices[0];
    //   for (let i = 1; i < len; i += 1) {
    //     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    //     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
    //   }
    
    //   return Math.max(...dp[len - 1]);
        let sell = 0, buy = -prices[0];
            for (let i = 1; i < prices.length; i++) {
                sell = Math.max(sell, buy + prices[i] - fee);
                buy = Math.max(buy, sell - prices[i]);
            }
            return sell;
    };