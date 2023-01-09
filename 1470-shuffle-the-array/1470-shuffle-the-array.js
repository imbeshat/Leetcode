/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let stack = [];
    let i = 0;
    while(i<n){
        stack.push(nums[i]);
        stack.push(nums[i+n]);
        i++;
    }
    return stack;
};