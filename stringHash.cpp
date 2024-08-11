#include<bits/stdc++.h>
using namespace std;
#define lpr pair<char,int>

bool customsort(lpr a, lpr b){
    if(a.second == b.second){
        return a.first < b.first;
    }
    return a.second > b.second;
}
int main(){
    unordered_map<char,int> umap;
    string str="uuuppaa";
    for(char c:str){
        umap[c]++;
    }
    vector<lpr> vec(umap.begin(),umap.end());
    sort(vec.begin(),vec.end(),customsort);

    cout<<"INPUT: "+str<<endl;
    cout<<"Ascending HASHED Output: "; 
    for(auto it: vec){
        cout<<it.second<<it.first;
    }
}