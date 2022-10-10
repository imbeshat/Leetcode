class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int size=nums.size();
        int leftSum=0;
        int rightSum=0;
        for(int number:nums){
            rightSum+=number;
        }
        for(int i=0;i<size;i++){
            rightSum-=nums[i];
            if(leftSum==rightSum){
                return i;
            }
            leftSum+=nums[i];
        }
        return -1;
    }
};