/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length <= 1) 
        return true;
    
    let s1 = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let i=0;
    let j=s1.length-1;

    while (i < j) {
        if (s1[i] != s1[j]) {
                return false;
        }
        i++;
        j--;
    }
    return true;
};