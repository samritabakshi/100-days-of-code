var expressiveWords = function(s, words) {
    const output = [];
    
    for (let word of words) {
        if (checkStretchy(s, word)) output.push(word);
    }
    
    
    return output.length;
};

function checkStretchy(s, word) {
    const sArr = seperate(s);
    const wordArr = seperate(word);
    //console.log({ sArr, wordArr });
    
    if (sArr.length != wordArr.length) return false;
    
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i][0] != wordArr[i][0] // the letter of mapping parts are different (eg: hhhhh vs ii, llll vs k)
            || wordArr[i].length > sArr[i].length
            || (sArr[i].length == 2 && wordArr[i].length == 1)) // eg: ll and l
            return false;
    }
    
    return true;
}

// seperate string into small parts. Eg: 'sass' to [s, a, ss], 'heeellooo' to [h, eee, ll, ooo], 'helo' to [h, e, l, o]
function seperate(str) {
    const arr = [];
    let curr = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] != curr) {
            arr.push(str[i]);
            curr = str[i];
        } else {
            arr[arr.length - 1] += str[i];
        }
    }
    
    return arr;
}