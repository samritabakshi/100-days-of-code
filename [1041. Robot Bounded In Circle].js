/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dirX=0,dirY=1,x=0,y=0;
    for(let i of instructions){
        if(i == 'G'){
            x += dirX;
            y += dirY;
        }else if(i == 'L'){
            const temp = dirX;
            dirX = -1 * dirY;
            dirY = temp;
        }else{
             const temp = dirY;
            dirY = -1 * dirX;
            dirX = temp;
        }
    }
    return ((x==0 && y==0) || dirX !== 0 || dirY !== 1)
};