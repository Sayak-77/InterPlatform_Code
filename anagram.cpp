#include <bits/stdc++.h>
using namespace std;

class Anagram {
public:
    bool IsAnagram(string str1, string str2) {
        // Sort both strings
        sort(str1.begin(), str1.end());
        sort(str2.begin(), str2.end());
        return str1 == str2;
    }
};

int main() {
    Anagram obj;
    string a = "seat";
    string b = "east";

    if (obj.IsAnagram(a, b)) {
        cout <<"The Strings '"+a+"' and '"+b+"' are ANAGRAMS" << endl;
    } else {
        cout <<"The Strings '"+a+"' and '"+b+"' are not ANAGRAMS" << endl;
    }
    return 0;
}
