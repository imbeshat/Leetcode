/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elementSum=nums.reduce((a,b)=>a+b,0);
    let allDigitSum=0;
    for (let i=0;i<nums.length;i++){
        const digitSum=nums[i].toString().split('').map(Number).reduce((a,b) => a + b,0);
        allDigitSum+=digitSum;
    }
    return Math.abs(elementSum-allDigitSum);
};