/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let y = target - nums[i];
        if (map.has(y)) {
            return [map.get(y), i];
        }
        map.set(x,i);
    }
};