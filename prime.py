def Isprime(num):
    if num < 2:
        return False
    i=2
    while i*i < num:
        if num % i == 0:
            return False
        i+=1
    return True

num1=29
num2=15
if Isprime(num1) == True:
    print(f"{num1} is a Prime Number")
else:
    print(f"{num1} is not a Prime Number")

if Isprime(num2) == True:
    print(f"{num2} is a Prime Number")
else:
    print(f"{num2} is not a Prime Number")
        