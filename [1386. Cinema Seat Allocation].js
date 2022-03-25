/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    //     let max_fam = 2*n;
    //     let hash_map = {};
    //     reservedSeats.sort((a,b) => a[0] - b[0]);
    //     for(let i=0;i<reservedSeats.length;i++){
    //         if(!(reservedSeats[i][0] in hash_map)){
    //             hash_map[reservedSeats[i][0]] = []
    //             hash_map[reservedSeats[i][0]].push(reservedSeats[i][1])
    //         }else{
    //             hash_map[reservedSeats[i][0]].push(reservedSeats[i][1])
    //         }
    //     }
    //     for(let i=1;i<=n;i++){
    //         let dec=0;
    //         if(i in hash_map){
    //             if(hash_map[i].includes(2) || hash_map[i].includes(3) || hash_map[i].includes(4) || hash_map[i].includes(5)){
    //                 dec++;
    //                 max_fam--;
    //             }
    //             if(hash_map[i].includes(6) || hash_map[i].includes(7) || hash_map[i].includes(8) || hash_map[i].includes(9)){
    //                 dec++;
    //                 max_fam--;
    //             }
    //             if(!hash_map[i].includes(4) && !hash_map[i].includes(5) && !hash_map[i].includes(6) && !hash_map[i].includes(7)){
    //                 if(dec == 2){
    //                     max_fam++;
    
    //                 }
    //             }
    //         }
            
    //     }
    //     return max_fam;
        let map = new Map();
        
        for (let i = 0; i < reservedSeats.length; i++) {
            
            let reserved;
            if (map.has(reservedSeats[i][0])) {
                
                reserved = map.get(reservedSeats[i][0]);
            } else {
                
                reserved = [];
                map.set(reservedSeats[i][0], reserved);
            }
            
            reserved[reservedSeats[i][1]] = true;
        }
        
        let seats = 0, groups = (n - map.size) * 2;
        
        map.forEach((reserved, key) => {
            
            let leftAisle1 = !reserved[2] && !reserved[3];
            let rightAisle1 = !reserved[4] && !reserved[5];
            let leftAisle2 = !reserved[6] && !reserved[7];
            let rightAisle2 = !reserved[8] && !reserved[9];
            
            if (leftAisle1 && rightAisle1) {
                
                ++groups;
                
                if (leftAisle2 && rightAisle2) {
                    
                    ++groups;
                }
            } else if ((rightAisle1 && leftAisle2) || (leftAisle2 && rightAisle2)) {
                
                ++groups;
            }
        });
        
        return groups;
    };