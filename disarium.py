def count(num):
    c=0
    while num != 0:
        num //= 10
        c +=1
    return c
    
def Isdisarium(num):
    n=num
    result=0
    c=count(num)
    while n != 0:
        result += pow(n%10,c)
        c -=1
        n //= 10

    if(result == num):
        print(f"{num} is a DISARIUM NUMBER.")
    else:
        print(f"{num} is not a DISARIUM NUMBER.")

Isdisarium(175)
Isdisarium(150)