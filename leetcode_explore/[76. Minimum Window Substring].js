/**

@param {string} s
@param {string} t
@return {string}
*/
var minWindow = function(s, t) {
    let need = new Map();
    let window = new Map();
    let len = Number.MAX_SAFE_INTEGER;

    for(let i =0;i <t.length; i++){
        if(need.has(t[i])){
            need.set(t[i], need.get(t[i])+1);
        }
        else
            need.set(t[i], 1);
        }

    let left =0, right = 0, valid = 0, start =0;
    // extend the right side
    while(right< s.length){
        let c= s[right];
        right++;
        if(need.has(c)){
            if(window.has(c))
            {
                window.set(c,window.get(c) +1 );
            }
            else
                window.set(c,1);
            if(window.get(c) == need.get(c)){
                valid++;
            }
        }
        while(valid === need.size){
            if(right - left < len){
                start = left;
                len = right - left;
            }
            // move d out of left window
            let d= s[left];
            // 
            left++;
            if(need.has(d)){
                if(window.get(d) == need.get(d)){ 
                    valid--;
                }
                window.set(d, window.get(d)-1);
            }
        }
    }
return len == Number.MAX_SAFE_INTEGER? "":s.substring(start, start+len);
};