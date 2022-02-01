/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const numberStack = [];
    // holds the sequences we see along the way
    // if we see '[' we start and new sequences
    // if we see ']' we end the latest sequence and add the result to the prev sequence
    // which holds the inside sequence the we just calculated.
    const seqStack = [''];
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char >= 0 && char <= 9) {
            while(s[i+1] >= 0 && s[i+1] <= 9) {
                char += s[i+1];
                i++;
            }
            numberStack.push(+char);
            continue;
        }
        
        // if we see '[' we start a new sequence
        if(char === '[') {
            seqStack.push('');
            
        // if we see ']' we take the latest number and multiply by the latest sequence    
        // and add that to the previous sequence.
        } else if(char === ']') {
            const number = numberStack.pop();
            const latestSeq = seqStack.pop();
            const seq = latestSeq.repeat(number);
            seqStack[seqStack.length-1] += seq;
            
        // if we see a char we add it to the latest sequence.
        } else {
            seqStack[seqStack.length-1] += char;
        }
        console.log(seqStack)
    }
    
    return seqStack[0];
};