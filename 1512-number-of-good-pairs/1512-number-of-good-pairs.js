/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    nums.sort();
    let i = 0;
    let j = 1;
    let count = 0;
    while(i<nums.length){
        if(nums[i+1]==nums[i]){
            count += j;
            j++;
        }
        else{
            j=1;
        }
        i++;
    }
    return count;
};