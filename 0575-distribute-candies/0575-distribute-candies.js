/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let max = candyType.length/2;
    let set = new Set(candyType);
    return Math.min(set.size, max);
};