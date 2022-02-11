/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
  const backtrack = (str = [], open = 0, close = 0) => {
      if (str.length == 2*n) return res.push(str)
      if (open < n) backtrack(str+'(', open+1, close)
      if (close < open) backtrack(str+')', open, close+1)
  }
  backtrack()
  return res
};