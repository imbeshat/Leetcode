/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	let map = new Map();
	let ans = [];
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			ans.push(nums[i]);
		} else {
			map.set(nums[i], i);
		}
	}
	for (let i = 1; i <= nums.length; i++) {
		if (!map.has(i)) {
			ans.push(i);
		}
	}
	return ans;
};