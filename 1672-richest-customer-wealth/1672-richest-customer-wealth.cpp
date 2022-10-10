class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int len = accounts.size();
        int maximum=0;
        for(int i=0;i<len;i++){
            int wealth=0;
            for(int j=0;j<accounts[i].size();j++){
                wealth+=accounts[i][j];
            }
            maximum=max(maximum,wealth);
        }
        return maximum;
    }
};