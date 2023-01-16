/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let outputArr=[];
    let i=0;
    while (i < nums.length) {
        outputArr.push(...new Array(nums[i]).fill(nums[i + 1]))
        i=i+2;
    }
    return outputArr;
};
