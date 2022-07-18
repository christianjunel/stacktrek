
number = int(input("Enter a number: "))
multiplier = number
factorial_ = 1

while multiplier != 0:
    factorial_ *= multiplier
    multiplier -= 1

print(factorial_)