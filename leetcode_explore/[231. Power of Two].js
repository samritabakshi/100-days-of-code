/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 0) return false
    return n > 0 && (n & (n - 1)) == 0
};
// Turn off the Rightmost 1-bit

// Let's first discuss why x & (x - 1) is a way to set the rightmost 1-bit to zero.

// To subtract 1 means to change the rightmost 1-bit to 0 and to set all the lower bits to 1.

// Now AND operator: the rightmost 1-bit will be turned off because 1 & 0 = 0, and all the lower bits as well.

// fig

// Detect Power of Two

// The solution is straightforward:

// Power of two has just one 1-bit.

// x & (x - 1) sets this 1-bit to zero, and hence one has to verify if the result is zero x & (x - 1) == 0.

// fig