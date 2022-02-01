/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (y, x) => {
		//If the coordinates are out of bounds or the current cell is water, exit the function
        if (y < 0 || y >= grid.length || x < 0 || x >= grid[0].length || grid[y][x] === "0") return;
        grid[y][x] = "0"; //Convert the island cell into water so we do not visit it again
		//Check all adjacent cells 
        dfs(y + 1, x);
        dfs(y, x + 1);
        dfs(y - 1, x); 
        dfs(y, x - 1);
    }
    //Res is the total number of islands
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") { //When an island is found, count it and convert the entire island to water
                res++;
                dfs(i, j);
            }
        }
    }
    
    return res;
};