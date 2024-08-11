def Ispalindrome(str):
    key=1
    for i in range(0,int(len(str)/2)):
        if(str[i] != str[len(str)-i-1]):
            key=-1
    
    if(key==1):
        print(f"{str} is a PALINDROME")
    else:
        print(f"{str} is not a PALINDROME")
    
Ispalindrome("MALAYALAM")
Ispalindrome("MONGODB")
