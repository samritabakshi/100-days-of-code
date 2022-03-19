/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let char_freq = new Map(), used = new Set(), res=0;
    for(let i=0;i<s.length;i++) {
        if(char_freq.has(s[i])){
            char_freq.set(s[i], char_freq.get(s[i])+1)
        }else{
            char_freq.set(s[i],1)
        } 
    }
    
    for(let [char, freq] of char_freq.entries()) {
        while(used.has(freq) & freq > 0){
            freq--;
            res++;
        }
        used.add(freq);
    }
    return res
};

