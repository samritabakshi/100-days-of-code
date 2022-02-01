/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let pathTable = []
    
    let max = 0
    function dfs(x, y, val) {
        if(matrix[x] === undefined || matrix[x][y] === undefined || matrix[x][y] <= val) return 0
      
        if(pathTable[x][y]) return pathTable[x][y]
        
        pathTable[x][y] = 0
 
        let top = dfs(x - 1, y, matrix[x][y])
        let bottom = dfs(x + 1, y, matrix[x][y])
        let left = dfs(x, y - 1, matrix[x][y])
        let right = dfs(x, y+ 1, matrix[x][y])
        
        pathTable[x][y] = Math.max(top, bottom, left, right) + 1
        max = Math.max(max, pathTable[x][y])
        return pathTable[x][y]
    }
    
    for(let x = 0; x < matrix.length; x++) {
        pathTable.push([])
    }
    
    for(let x = 0; x < matrix.length; x++) {
        
        for(let y = 0; y < matrix[x].length; y++) {
            if(pathTable[x][y] === undefined) {
                let val = matrix[x][y]
                let top = dfs(x - 1, y, matrix[x][y])
        
                let bottom = dfs(x + 1, y, matrix[x][y])
                
                let left = dfs(x, y - 1, matrix[x][y])
                
                let right = dfs(x, y+ 1, matrix[x][y])
             
                pathTable[x][y] = Math.max(top, bottom, left, right) + 1
                max = Math.max(max, pathTable[x][y])
            }
        }
    }

    return max
};

