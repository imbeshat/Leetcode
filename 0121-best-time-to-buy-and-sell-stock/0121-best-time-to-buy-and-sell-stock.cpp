class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int maxProfit=0;
        int minimumPrice=prices[0];
        int size=prices.size();
        for (int i=0; i<size; i++){
            minimumPrice=min(minimumPrice,prices[i]);
            int profit=prices[i]-minimumPrice;
            maxProfit=max(maxProfit,profit);
        }
        
        return maxProfit;
    }
};