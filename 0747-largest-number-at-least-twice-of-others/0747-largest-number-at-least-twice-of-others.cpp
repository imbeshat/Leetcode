class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int arrSize=nums.size();
        int maxNum=nums[0],index=0;
        for(int i=0;i<arrSize;i++){
            if(nums[i]>maxNum){
                maxNum=nums[i];
                index=i;
            }
        }
        for(int i=0;i<arrSize;i++){
            if(maxNum<nums[i]*2 && nums[i]!=maxNum){
                return -1;
            }
        }
        return index;
    }
};