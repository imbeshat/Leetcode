class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int size=operations.size(), x=0;
        for(int i=0;i<size;i++){
            if(operations[i]=="X++" || operations[i]=="++X"){
                x=x+1;
            }
            if(operations[i]=="X--" || operations[i]=="--X"){
                x=x-1;
            }
        }
        return x;
    }
};