/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
	let map = new Map();
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
	}
	for (let [key, value] of map) {
		if (map.has(key + 1)) {
			max = Math.max(max, value + map.get(key + 1));
		}
	}
	return max;
};