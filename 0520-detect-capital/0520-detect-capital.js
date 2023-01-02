/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let newWord = word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    if (word == word.toUpperCase() || word == word.toLowerCase()){
        return true;
    } else if (word == newWord){
        return true;
    }
    return false;
};