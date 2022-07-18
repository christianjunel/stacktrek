
number = int(input("Enter a number: "))

if number <= 1:
    print("Not Prime")
elif number == 2:
    print("Prime")
else:
    for divisor in range(2, number): 
        if number % divisor == 0:
            print("Not Prime")
            break
        elif number == divisor + 1:
            print("Prime")