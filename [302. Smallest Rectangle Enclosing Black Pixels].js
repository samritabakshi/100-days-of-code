/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {
    if(image.length == 0 || image[0].length == 0) return 0;
    let top = x, bottom = x;
    let left = y, right = y;
    dfs(image, x, y);
    return (right - left) * (bottom - top);
    
   function dfs(image,x,y){
        if(x<0 || y <0  || x>=image.length || y>= image[0].length || image[x][y] == '0') return;
        image[x][y]='0';
        top = Math.min(top,x);
        bottom = Math.max(bottom,x+1);
        left = Math.min(left,y);
        right = Math.max(right,y+1);
        dfs(image,x+1,y);
        dfs(image,x,y+1);
        dfs(image,x-1,y);
        dfs(image,x,y-1);
    } 
};


