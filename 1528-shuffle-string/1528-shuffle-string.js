/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let newArr=[];
    for(let i=0;i<indices.length;i++){
        newArr[indices[i]]=s[i];
    }
    return newArr.join("");
};