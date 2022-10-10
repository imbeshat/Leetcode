class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int size=nums.size();
        vector<int> arr(size);
        arr[0]=nums[0];
        for(int i=1;i<size;i++){
            arr[i]=arr[i-1]+nums[i];
        }
        return arr;
    }
};