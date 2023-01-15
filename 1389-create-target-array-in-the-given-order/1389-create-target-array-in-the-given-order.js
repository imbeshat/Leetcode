/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let targetArr=[];
    let i=0;
    while(i<nums.length){
        targetArr.splice(index[i],0,nums[i]);
        i++;
    }
    return targetArr;
};