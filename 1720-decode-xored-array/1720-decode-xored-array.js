/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let solution=[];
    solution.push(first);
    for(let i=0;i<encoded.length;i++){
        solution.push(encoded[i]^solution[i]);
    }
    return solution;
};