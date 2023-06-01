/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
	let min = Math.min(...nums);
	let max = Math.max(...nums);
	let diff = max - min;
	if (diff <= 2 * k) {
		return 0;
	} else {
		return diff - 2 * k;
	}
};