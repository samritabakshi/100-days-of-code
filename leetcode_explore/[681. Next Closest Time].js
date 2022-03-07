/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    // let digits = getDigits(time);
    let digits = new Set();
    
    for (let item of time) {
        if (item == ':') continue;
        if (! digits.has(item)) digits.add(item);
    }
    let hours = parseInt(time.slice(0, 2));
    let minutes = parseInt(time.slice(3)) + 1;
    
    let newTime;
    
    while (newTime != time) {
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        
        if (hours == 24) hours = 0;
        
        newTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
        if (checkTimeDigitsValid(digits, newTime)) return newTime;
        
        minutes++;
    }
};

// check if considerting time is built up on the given digits
function checkTimeDigitsValid(digits, considertingTime) {
    for (let item of considertingTime) {
        if (item == ':') continue;
        if (! digits.has(item)) return false;
    }
    
    return true;
};