It is important and standard problem.
## Problem
![[Pasted image 20261030201818.png]]
Given an array, find the longest increasing sub-sequence(any subset in order(not continuous)).
## Approach  
let will have a sub-sequence so each element has 2 possibility it is present in the sub-sequence or not.
### Step 1
need to write brute recursion for using top down approach.
![[Pasted image 20261030202524.png]]
for behind each find which can come to make sure increasing
![[Pasted image 20261030202903.png]]
so on chooses...
for a digit find all possible digit which can come before it.
return max length for it.
not required all sub-sequence start at n-1 and end at 0.
```cpp
int lis(int i,vector<int> &a){
    if(i<=0) return 1;
    int score_max=1;
    for(int j=i-1;j>=0;j--){
        if(a[j]<a[i]){
            score_max=max(score_max,1+lis(j,a));
        }
    }
    return score_max;
}

class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int ans=0;
        int n=nums.size();
        for(int i=0;i<n;i++){
            ans=max(ans,lis(i,nums));
        }
        return ans;
    }
};
```
it gives ![[Pasted image 20261030204855.png]]
now use memorization.
```cpp
class Solution {
public:
    static const int N=1e5+10;
    int dp[N];
    int lengthOfLIS(vector<int>& nums) {
        int ans=0;
        memset(dp, -1, sizeof(dp));
        int n=nums.size();
        for(int i=0;i<n;i++){
            ans=max(ans,lis(i,nums));
        }
        return ans;
    }
    int lis(int i,vector<int> &a){
        if(i<=0) return 1;
        int score_max=1;
        if(dp[i]!=-1) return dp[i];
        for(int j=i-1;j>=0;j--){
            if(a[j]<a[i]){
                score_max=max(score_max,1+lis(j,a));
            }
        }
        return dp[i]=score_max;
    }
};
```
solved: ![[Pasted image 20261030205312.png]]
it is O(2^n) --> O(n^2)
