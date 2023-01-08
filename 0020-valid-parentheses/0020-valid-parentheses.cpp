class Solution {
public:
    bool isValid(string s) {
        stack<char> stk;
        for(int i=0; i<s.size();i++){
            if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
                if(stk.empty()) {
                    return false;
                }
                if(s[i]==')' && stk.top()!='(')
                    return false;
                if(s[i]=='}' && stk.top()!='{')
                    return false;
                if(s[i]==']' && stk.top()!='[')
                    return false;
                stk.pop();
            } else{
                stk.push(s[i]);
            }
        }
        if (!stk.empty()) {
            return false;
        }
        return true;
    }
};