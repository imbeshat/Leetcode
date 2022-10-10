class Solution {
public:
    int mostWordsFound(vector<string>& sentences) {
        int size=sentences.size();
        int result=0;
        for(int i=0;i<size;i++){
            int count=0;
            string str=sentences[i];
            for(int j=0;j<str.length();j++){
                if(str[j]==' '){
                    count+=1;
                }
            }
            result=max(result,count);
        }
        return ++result;   
    }
};