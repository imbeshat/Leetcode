/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elementSum=nums.reduce((a,b)=>a+b,0);
    let allDigitSum=nums.join("").split("").reduce((a, b) => +a + +b, 0);
    return Math.abs(elementSum-allDigitSum);
};