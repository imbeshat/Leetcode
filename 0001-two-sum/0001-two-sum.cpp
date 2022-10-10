class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int size=nums.size();
        unordered_map<int,int> m;
        for(int i=0;i<size;i++){
            int x=nums[i];
            int y=target-x;
            if(m.find(y)!=m.end()){
                return {m[y],i};
            }
            m[nums[i]]=i;
        }
        return {-1,-1};
     }
};
